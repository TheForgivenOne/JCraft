import MaterialIcon from "./MaterialIcon";

interface ChipProps {
  children: React.ReactNode;
  onRemove?: () => void;
  variant?: "default" | "filter";
  className?: string;
}

export default function Chip({
  children,
  onRemove,
  variant = "default",
  className = "",
}: ChipProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold";
  const variantClasses =
    variant === "filter"
      ? "bg-[#f3ede7] dark:bg-[#3d2e21] hover:bg-[#e7dbcf] dark:hover:bg-[#4a3a2a]"
      : "bg-primary/20 text-primary";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
      {onRemove && (
        <button
          className="hover:text-primary transition-colors"
          onClick={onRemove}
          aria-label="Remove"
        >
          <MaterialIcon icon="close" className="text-sm" />
        </button>
      )}
    </div>
  );
}
