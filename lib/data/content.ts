import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  profile: {
    name: 'Your Name',
    role: 'Entry-Level IT Support | Network Engineering | Software Engineering',
    subtitle:
      'Building systems that work, networks that connect, code that scales.',
    photoMain: '/images/profile-main.svg',
    photoHover: '/images/profile-hover.svg',
  },
  about: [
    "Placeholder paragraph about yourself. Replace with your bio about what drives you in tech — whether it's solving network puzzles, building web applications, or helping users navigate technology.",
    "Placeholder second paragraph about your journey. Replace with your story about how you got into IT Support, Network Engineering, or Software Engineering — what experiences shaped your path.",
  ],
  projects: [
    {
      id: '1',
      title: 'Portfolio Website',
      description:
        'A minimal portfolio built with Next.js and the bryl-minimal design system.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      thumbnail: 'https://placehold.co/400x225?text=Portfolio',
      links: {
        github: 'https://github.com/NeserxDD',
      },
    },
    {
      id: '2',
      title: 'Network Config Toolkit',
      description:
        'A collection of Python and Bash scripts for network device configuration auditing.',
      techStack: ['Python', 'Bash', 'YAML'],
      thumbnail: 'https://placehold.co/400x225?text=Network+Tool',
      links: {
        github: 'https://github.com/NeserxDD',
      },
    },
    {
      id: '3',
      title: 'API Dashboard',
      description:
        'A React dashboard consuming REST APIs with live data visualization.',
      techStack: ['React', 'REST API', 'Chart.js'],
      thumbnail: 'https://placehold.co/400x225?text=Dashboard',
      links: {
        github: 'https://github.com/NeserxDD',
        live: 'https://example.com',
      },
    },
  ],
  skills: {
    technical: [
      {
        category: 'Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Bash'],
      },
      {
        category: 'Frameworks',
        items: ['React', 'Next.js'],
      },
      {
        category: 'Tools',
        items: ['Git', 'Docker', 'VS Code'],
      },
      {
        category: 'Networks',
        items: ['TCP/IP', 'DNS', 'VLAN', 'Cisco IOS'],
      },
    ],
    soft: [
      'Communication',
      'Problem-solving',
      'Documentation',
      'Customer Service',
    ],
  },
  experience: [
    {
      id: '1',
      role: 'IT Support Intern',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      bullets: [
        'Provided first-line support for 50+ internal users',
        'Managed Active Directory account provisioning and deprovisioning',
        'Configured and troubleshot network printers across 3 office locations',
      ],
    },
    {
      id: '2',
      role: 'Help Desk Technician (Part-time)',
      company: 'University IT',
      location: 'Remote',
      startDate: '2024-09-01',
      endDate: '2025-05-31',
      bullets: [
        'Resolved 200+ tickets via Slack and email support channels',
        'Created and maintained documentation for common issues',
        'Supported macOS, Windows, and Linux users across departments',
      ],
    },
    {
      id: '3',
      role: 'Freelance Full-Stack Developer',
      company: 'Self-employed',
      location: 'Remote',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      bullets: [
        'Built 3 client websites using React and Next.js',
        'Deployed applications on Vercel with CI/CD pipelines',
        'Implemented responsive designs with Tailwind CSS',
      ],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'B.S. Computer Science',
      institution: 'University of Technology',
      startDate: '2022-09-01',
      endDate: '2026-05-31',
      details:
        'Relevant Coursework: Computer Networks, Operating Systems, Web Development, Database Systems',
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      dateEarned: '2025-03-15',
      badgeImage: 'https://placehold.co/80x80?text=Network+',
    },
    {
      id: '2',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dateEarned: '2025-01-10',
      badgeImage: 'https://placehold.co/80x80?text=AWS',
    },
  ],
  outsideTech:
    "When I'm not debugging code or configuring networks, I enjoy hiking, photography, and playing indie video games.",
  contact: {
    email: 'your.email@example.com',
    socialLinks: [
      {
        platform: 'github',
        label: 'github.com/neserxdd',
        url: 'https://github.com/NeserxDD',
      },
      {
        platform: 'linkedin',
        label: 'linkedin.com/in/yourname',
        url: 'https://linkedin.com/in/yourname',
      },
    ],
    location: 'San Francisco, CA',
  },
};
