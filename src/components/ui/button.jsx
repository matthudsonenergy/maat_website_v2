import React from "react";

function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

const sizeClasses = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8 py-3 text-base",
};

const variantClasses = {
  default: "",
  outline: "border",
};

export function Button({
  asChild = false,
  className = "",
  size = "default",
  variant = "default",
  ...props
}) {
  const classes = joinClasses(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap border-transparent font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50",
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
