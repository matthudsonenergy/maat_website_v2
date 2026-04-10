function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className = "", ...props }) {
  return <div className={joinClasses("rounded-3xl border", className)} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
