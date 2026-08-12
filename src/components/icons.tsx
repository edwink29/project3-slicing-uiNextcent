type IconProps = { className?: string };

export function MembershipIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm14 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM7 35c0-5.5 4.5-10 10-10s10 4.5 10 10v2H7v-2Zm14 2v-2c0-2.8-1-5.4-2.6-7.4a9.9 9.9 0 0 1 17.6 6.2v3H21Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function AssociationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 39h34M12 39V21h9v18M27 39V10h9v29M15 26h3m-3 6h3m12-16h3m-3 6h3m-3 6h3m-3 6h3"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10 21 6.5-6 6.5 6M25 10l6.5-5 6.5 5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ClubsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="13" cy="28" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="35" cy="28" r="4" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="m21 15-6 9m12-9 6 9M17 30h14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function MembersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="17" cy="17" r="5" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="32" cy="19" r="4" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M7 37c0-5.5 4.5-10 10-10s10 4.5 10 10m0-8c1.4-.8 3-1.2 4.7-1.2 5.1 0 9.3 4.1 9.3 9.2"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function EventIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="32"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M8 18h32M16 7v6m16-6v6M16 26h5m5 0h6M16 33h5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m28 32 2 2 4-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function NetworkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="11" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="11" cy="34" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="37" cy="34" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="m22 15-8 15m12-15 8 15M15 34h18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function PaymentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="11"
        width="36"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M7 19h34M13 29h8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function SocialIcon({
  type,
  className,
}: IconProps & { type: "instagram" | "dribbble" | "twitter" | "youtube" }) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };
  if (type === "instagram")
    return (
      <svg {...shared}>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.2" cy="6.9" r="1" fill="currentColor" />
      </svg>
    );
  if (type === "dribbble")
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 10c5.4 0 9.6 1.8 12.3 6M8 5c3.7 4.1 5.2 8.5 4.5 14M5.5 15.5c4.2-3.4 8.5-4.7 13-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "twitter")
    return (
      <svg {...shared}>
        <path
          d="M19.5 7.2c-.6.3-1.3.5-2 .6a3.5 3.5 0 0 0-6 3.2 10 10 0 0 1-7.2-3.6 3.5 3.5 0 0 0 1.1 4.7c-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.2 3 3.5-.5.1-1.1.2-1.6.1.5 1.5 1.8 2.5 3.4 2.5A7 7 0 0 1 4 19.3 9.9 9.9 0 0 0 19.7 11c0-.2 0-.4-.1-.6.7-.5 1.2-1.1 1.6-1.8-.6.3-1.1.4-1.7.5Z"
          fill="currentColor"
        />
      </svg>
    );
  return (
    <svg {...shared}>
      <path
        d="M20 8.3a3 3 0 0 0-2.1-2.1C16 5.7 12 5.7 12 5.7s-4 0-5.9.5A3 3 0 0 0 4 8.3C3.5 10.2 3.5 12 3.5 12s0 1.8.5 3.7a3 3 0 0 0 2.1 2.1c1.9.5 5.9.5 5.9.5s4 0 5.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-3.7.5-3.7s0-1.8-.5-3.7Z"
        fill="currentColor"
      />
      <path d="m10.4 15.5 5-3.5-5-3.5v7Z" fill="#263238" />
    </svg>
  );
}
