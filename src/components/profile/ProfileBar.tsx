"use client";

import { User } from "lucide-react";

type ProfileBarProps = {
  address: string;
  disconnect: () => void;
};

export default function ProfileBar({ address, disconnect }: ProfileBarProps) {
  if (!address) return null;

  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div
      onClick={disconnect}
      title="Click to disconnect"
      className="flex items-center gap-3 cursor-pointer rounded-full border border-border-primary bg-secondary-background px-4 py-2 hover:bg-muted transition"
    >
      <User className="h-5 w-5 text-muted-foreground" />

      <span className="text-sm font-medium text-foreground">
        {shortAddress}
      </span>
    </div>
  );
}
