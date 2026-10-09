import Icon from "./Icon";

type Status = "certified" | "maintenance" | "out-of-service";

const config: Record<Status, { label: string; icon: string; bg: string; text: string; border: string }> = {
  certified: {
    label: "Certified",
    icon: "verified",
    bg: "bg-primary",
    text: "text-on-primary",
    border: "border-primary",
  },
  maintenance: {
    label: "Maintenance Required",
    icon: "warning",
    bg: "bg-[#f97316]",
    text: "text-white",
    border: "border-[#f97316]",
  },
  "out-of-service": {
    label: "Out of Service",
    icon: "cancel",
    bg: "bg-error",
    text: "text-on-error",
    border: "border-error",
  },
};

export default function StatusBadge({ status }: { status: Status }) {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 ${c.bg} ${c.text} font-mono-spec text-label-caps uppercase tracking-wider`}
    >
      <Icon name={c.icon} size="sm" />
      {c.label}
    </span>
  );
}
