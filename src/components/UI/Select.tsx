import MaterialIcon from "./MaterialIcon";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder,
  className = "",
  label,
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold pb-2">{label}</label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-[#e7dbcf] dark:border-[#4a3a2a] bg-background-light dark:bg-[#1a130d] h-12 px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <MaterialIcon icon="expand_more" />
        </div>
      </div>
    </div>
  );
}
