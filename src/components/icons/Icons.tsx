import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icons = {
  home: (props: IconProps) => (
    <Base {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6.5 10.5V20h11V10.5" />
    </Base>
  ),
  board: (props: IconProps) => (
    <Base {...props}>
      <rect x="3.5" y="4" width="5" height="16" rx="1.2" />
      <rect x="9.5" y="4" width="5" height="10" rx="1.2" />
      <rect x="15.5" y="4" width="5" height="13" rx="1.2" />
    </Base>
  ),
  list: (props: IconProps) => (
    <Base {...props}>
      <path d="M9 6h12" />
      <path d="M9 12h12" />
      <path d="M9 18h12" />
      <circle cx="4.5" cy="6" r="1.4" />
      <circle cx="4.5" cy="12" r="1.4" />
      <circle cx="4.5" cy="18" r="1.4" />
    </Base>
  ),
  folder: (props: IconProps) => (
    <Base {...props}>
      <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4L12 8h6.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
    </Base>
  ),
  calendar: (props: IconProps) => (
    <Base {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
    </Base>
  ),
  people: (props: IconProps) => (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M16 14.2c2 .4 3.6 1.8 4.2 4.3" />
    </Base>
  ),
  settings: (props: IconProps) => (
    <Base {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.9 6.4l1.6 1.6M17.5 16l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.6l1.6-1.6M17.5 8l1.6-1.6" />
    </Base>
  ),
  search: (props: IconProps) => (
    <Base {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </Base>
  ),
  bell: (props: IconProps) => (
    <Base {...props}>
      <path d="M6 9.5a6 6 0 1 1 12 0c0 4.2 1.5 5.5 1.5 5.5H4.5S6 13.7 6 9.5Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </Base>
  ),
  plus: (props: IconProps) => (
    <Base {...props}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  ),
  close: (props: IconProps) => (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  ),
  chevron: (props: IconProps) => (
    <Base {...props}>
      <path d="m8 10 4 4 4-4" />
    </Base>
  ),
  check: (props: IconProps) => (
    <Base {...props}>
      <path d="m5 12 4.5 4.5L19 7.5" />
    </Base>
  ),
  logout: (props: IconProps) => (
    <Base {...props}>
      <path d="M10 7V5.5A1.5 1.5 0 0 1 11.5 4h7A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 10 18.5V17" />
      <path d="M4 12h10M7 9l-3 3 3 3" />
    </Base>
  ),
  filter: (props: IconProps) => (
    <Base {...props}>
      <path d="M4 6h16M7 12h10M10 18h4" />
    </Base>
  ),
  tree: (props: IconProps) => (
    <Base {...props}>
      <path d="M12 21V11" />
      <path d="M12 11 7 16h10z" />
      <path d="M12 8 8.5 12h7z" />
      <path d="M12 5 9.8 8h4.4z" />
    </Base>
  ),
};
