import React from "react";

function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

const sizeClasses = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8 py-3 text-base",
};

const variantClasses = {
  default:
    "border-[color:var(--color-paper-accent)] bg-[color:var(--color-paper-accent)] text-white shadow-[0_14px_32px_rgba(17,17,17,0.12)] hover:-translate-y-0.5 hover:bg-[#2b2b2b]",
  outline:
    "border-[color:var(--color-paper-border-strong)] bg-[color:var(--color-paper-surface)] text-[color:var(--color-paper-ink)] hover:-translate-y-0.5 hover:border-[color:var(--color-paper-accent)] hover:bg-white",
};

export function Button({
  asChild = false,
  className = "",
  size = "default",
  variant = "default",
  ...props
}) {
  const classes = joinClasses(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f1e8] disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size] || sizeClasses.default,
    variantClasses[variant] || variantClasses.default,
    className,
  );

  if (asChild && React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      className: joinClasses(classes, props.children.props.className),
    });
  }

  return <button className={classes} {...props} />;
}
