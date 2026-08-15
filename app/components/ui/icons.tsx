import type { SVGProps } from 'react';

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 12.79A9 9 0 0 1 11.21 3c0 .34.07.67.22.97A7 7 0 0 0 12 21a7.4 7.4 0 0 0 10-8.62c.02-.06.03-.13.03-.2z" />
    </svg>
  );
}

export function Monitor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Copy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="11 19 6 12 11 5" />
    </svg>
  );
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 12 9 16 9 8" />
    </svg>
  );
}

export function X(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7 8.991 14.095a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
      <path d="M8 17h.01" />
      <path d="M12 17h.01" />
      <path d="M16 17h.01" />
    </svg>
  );
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM7.12 20.452H3.559V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.344C0 23.406.596 24 1.326 24h11.49v-9.294H9.691V11.01h3.125V8.414c0-3.096 1.893-4.784 4.657-4.784 1.341 0 2.477.101 2.772.145v3.197l-1.897.001c-1.503 0-1.794.679-1.794 1.762v2.312h3.586l-.467 3.696h-3.052V24h6.006c.73 0 1.326-.595 1.326-1.326V1.326C24 .593 23.406 0 22.675 0z" />
    </svg>
  );
}

export function GitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .296C5.337.296 0 5.633 0 12.296c0 5.316 3.438 9.812 8.205 11.385.6.113.83-.26.83-.577 0-.284-.01-1.143-.015-2.04-3.338.724-4.033-1.604-4.033-1.604-.546-1.386-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.833 2.809 1.303 3.495.997.108-.775.418-1.303.76-1.602-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.01.004 2.027.134 3.002.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.612-5.475 5.94.421.36.804 1.096.804 2.212 0 1.606-.014 2.896-.014 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.296 24 5.633 18.663.296 12 .296z" />
    </svg>
  );
}

export function Viber(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 4.59A9.95 9.95 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.64-.97-5.07-2.41-6.86zm-2.42 8.53l-4.57 4.57c-.28.28-.7.43-1.13.43-.03 0-.06-.01-.09-.01-.38 0-.74-.14-1.05-.41l-.15-.14a1.63 1.63 0 0 1-.37-1.5v-2.62l-1.52-.36a1.5 1.5 0 0 1-.41-1.14c0-.57.32-1.08.84-1.34.43-.22.94-.15 1.37.12l2.67 1.73c.44.28.79.7 1.02 1.21l.34.92c.11.31.39.53.72.53.06 0 .12-.01.18-.02a1.51 1.51 0 0 0 .81-1.34c0-.28-.07-.54-.19-.77l-1.06-2.12a1.5 1.5 0 0 1 .08-1.61c.34-.42.91-.54 1.4-.4.86.27 1.56 1.01 1.81 1.88l1.19 3.37a2.94 2.94 0 0 1-.29 3.14z" />
      <path d="M18.9 8.5c0 .32-.03.63-.08.94l2.53 2.04a.5.5 0 0 1-.27.87l-2.96 1c-.48-.33-.97-.58-1.48-.77l-.38-.97a5.03 5.03 0 0 1-.02-2.97l.74-1.85a.5.5 0 0 1 .62-.32c.27.11.49.3.64.55.15.24.23.54.2.8.01.01 0 .03 0 .01z" />
    </svg>
  );
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.954 4.569c-.885.389-1.83.654-2.828.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.718 0-4.925 2.206-4.925 4.926 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.196 2.188 4.07-.807 0-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.775-.023-1.16-.067 2.189 1.397 4.768 2.21 7.557 2.21 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
    </svg>
  );
}
