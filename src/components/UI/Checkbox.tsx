interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  className = "",
}: CheckboxProps) {
  return (
    <label
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer group ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-[#9a734c] text-primary focus:ring-primary"
      />
      <span className="text-sm group-hover:text-primary transition-colors">
        {label}
      </span>
    </label>
  );
}
