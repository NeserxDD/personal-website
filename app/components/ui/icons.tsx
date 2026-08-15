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
    
<svg  {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.4 0C9.473.028 5.333.344 3.02 2.467C1.302 4.187.696 6.7.633 9.817C.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302c.407-.44.972-1.084 1.397-1.58c3.85.326 6.812-.416 7.15-.525c.776-.252 5.176-.816 5.892-6.657c.74-6.02-.36-9.83-2.34-11.546c-.596-.55-3.006-2.3-8.375-2.323c0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017c4.542.02 6.717 1.388 7.222 1.846c1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395c-.28.09-2.882.737-6.153.524c0 0-2.436 2.94-3.197 3.704c-.12.12-.26.167-.352.144c-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895c.054-2.604.543-4.738 1.996-6.173c1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602a.304.304 0 0 0-.004.607c1.624.01 2.946.537 4.028 1.592c1.073 1.046 1.62 2.468 1.633 4.334c.002.167.14.3.307.3a.304.304 0 0 0 .3-.304c-.014-1.984-.618-3.596-1.816-4.764c-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695a.981.981 0 0 0-.616.117l-.01.002c-.43.247-.816.562-1.146.932c-.002.004-.006.004-.008.008c-.267.323-.42.638-.46.948a.596.596 0 0 0-.007.14c0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604c.42.768.903 1.5 1.446 2.186c.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87a15.524 15.524 0 0 0 2.186 1.447c1.328.733 2.126 1.07 2.604 1.206l.01.014a1.275 1.275 0 0 0 .54.055c.31-.036.627-.19.948-.46c.004 0 .003-.002.008-.005c.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12c-.004 0-.698-.58-1.037-.83c-.36-.255-.73-.492-1.113-.71c-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246c-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248a12.73 12.73 0 0 0-.71-1.115a28.35 28.35 0 0 0-.83-1.035a.822.822 0 0 0-.502-.297zm4.49.88a.303.303 0 0 0-.018.606c1.16.085 2.017.466 2.645 1.15c.63.688.93 1.524.906 2.57a.306.306 0 0 0 .61.013c.025-1.175-.334-2.193-1.067-2.994c-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63a.305.305 0 0 0-.3.287c-.008.167.12.31.288.32c.523.028.875.175 1.113.422c.24.245.388.62.416 1.164a.304.304 0 0 0 .605-.03c-.03-.644-.215-1.178-.58-1.557c-.367-.378-.893-.574-1.52-.607h-.018z"/></svg>
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
