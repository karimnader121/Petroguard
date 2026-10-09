interface IconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "text-[18px]",
  md: "text-[24px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
};

export default function Icon({ name, className = "", size = "md" }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
