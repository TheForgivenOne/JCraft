import React from "react";

interface MaterialIconProps {
  icon: string;
  className?: string;
  filled?: boolean;
  size?: "small" | "normal" | "large" | number;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({
  icon,
  className = "",
  filled = false,
  size = "normal",
}) => {
  // Determine size classes
  let sizeClass = "";
  if (typeof size === "string") {
    switch (size) {
      case "small":
        sizeClass = "text-base";
        break;
      case "large":
        sizeClass = "text-2xl";
        break;
      default:
        sizeClass = "text-lg"; // normal
        break;
    }
  } else {
    // If size is a number, we'll handle it via inline style
    sizeClass = "";
  }

  const iconSize = typeof size === "number" ? { fontSize: `${size}px` } : {};

  return (
    <span
      className={`material-symbols-outlined ${sizeClass} ${className}`}
      style={iconSize}
    >
      {icon}
    </span>
  );
};

export default MaterialIcon;
