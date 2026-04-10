import React from "react";

function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className = "", ...props }) {
  return (
    <div
      className={joinClasses(
        "rounded-[2rem] border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-surface)] shadow-[0_18px_50px_rgba(68,55,35,0.08)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
