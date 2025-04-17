import React from "react";
import useArgentWebWallet from "./useArgentWebWallet";
import { useArgentAccount } from "./useArgentAccount";

export function useArgentConnect() {
  const { argentWebWallet } = useArgentWebWallet();
  const { refreshAccount } = useArgentAccount();

  const connectWebWallet = async () => {
    try {
      const response = await argentWebWallet.requestConnection({
        callbackData: "scanguard_connection",
        approvalRequests: []
      });

      if (!response) {
        throw new Error("No response from Argent WebWallet");
      }

      const { account: sessionAccount } = response;

      if (sessionAccount.getSessionStatus() !== "VALID") {
        throw new Error("Session invalid");
      }

      return sessionAccount;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      throw error;
    }
  };

  const connect = async () => {
    try {
      const account = await connectWebWallet();
      if (account) {
        await refreshAccount();
      }
      return account;
    } catch (error) {
      console.error("Failed to connect:", error);
      throw error;
    }
  };

  const disconnect = async () => {
    await argentWebWallet.clearSession();
    await refreshAccount();
  };

  return {
    connect,
    disconnect
  };
}
