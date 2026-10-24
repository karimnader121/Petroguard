export default function Logo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="../assets/logo1.png"
      aria-label="Petroguard mark"
    >
      {/* Outer square */}
      <rect width="36" height="36" fill="#ffcf40" />
      {/* Upward arrow (lift symbol) */}
      <path d="M18 8 L25 19 H21 V27 H15 V19 H11 Z" fill="#111c2d" />
      {/* Base bar */}
      <rect x="9" y="29" width="18" height="2.5" fill="#f2b705" />
    </svg>
  );
}
