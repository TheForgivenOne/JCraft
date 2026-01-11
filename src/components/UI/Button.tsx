import MaterialIcon from "./MaterialIcon";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "icon" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: string;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background";

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-lg hover:shadow-primary/25 active:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] hover:bg-background-light/50 dark:hover:bg-[#1a130d]/50",
    icon: "hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    text: "hover:underline",
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 py-2 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <MaterialIcon icon={icon} className="mr-2 text-base" />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <MaterialIcon icon={icon} className="ml-2 text-base" />
      )}
    </button>
  );
}
