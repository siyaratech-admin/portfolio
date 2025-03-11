"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 bottom-2 text-center justify-center text-xs text-muted-foreground border-t border-border w-full">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Siyaratech Innovations
    </div>
  );
};
