import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  profile: {
    name: 'Ernes Glenn Dalope',
    role: 'Computer Science |- It Support |- Software & Networking',
    subtitle:
      'Building systems that work, networks that connect, code that scales.',
    photoMain: '/images/hoveranime.jpg',
    photoHover: '/images/hoverprofile.png',
  },
  about: [
    "I’m Ernes, a Computer Science graduate with a strong interest in IT support, networking, and software. I enjoy solving technical problems, learning new technologies, and understanding how systems work. I’m continuously developing my skills and looking forward to opportunities where I can gain experience, contribute to a team, and grow in the IT field.",

  ],
  projects: [
    {
      id: '1',
      title: 'Temperature-Regulating-Smart-Coaster',
      description: [
        'Built an IoT-based smart coaster with Arduino and a mobile app for real-time temperature monitoring and control.',
        'Maintained beverage temperature accuracy within ±5°C, demonstrating reliability of the system.',
      ],
      techStack: ['Arduino', 'C++', 'Kotlin'],
      thumbnail: 'https://placehold.co/400x225?text=Coaster',
      links: {
        github: 'https://github.com/NeserxDD/Temperature-Regulating-Smart-Coaster',
      },
    },
    {
      id: '2',
      title: 'Brum App',
      description: [
        'Developed a mobile app to monitor 8S Good Housekeeping compliance in government offices and hospitals.',
        'Reduced manual inspection and reporting time by approximately 40%, improving operational efficiency.',
      ],
      techStack: ['Flutter'],
      thumbnail: 'https://placehold.co/400x225?text=Brum+App',
      links: {
        github: 'https://github.com/NeserxDD/BRUM/tree/main',
      },
    },


  ],
  skills: {
technical: [
  {
    category: 'IT Support & Systems',
    items: [
      'Hardware & Software Troubleshooting',
      'Operating Systems — Windows, Linux Basics',
      'User Support',
      'File & System Management',
      'Systems Administration',
      'Software Installation & Configuration',
    ],
  },
  {
    category: 'Networking & Security',
    items: [
      'Networking Fundamentals',
      'TCP/IP',
      'DNS',
      'DHCP',
      'LAN/WAN Fundamentals',
      'Network Configuration Fundamentals',
      'Network Troubleshooting',
    ],
  },
  {
    category: 'Programming & Development',
    items: [
      'Flutter',
      'Dart',
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'SQL',
      'HTML',
      'CSS',
      'Next.js',
    ],
  },
  {
    category: 'Tools & Productivity',
    items: [
      'VS Code',
      'Android Studio',
      'Git',
      'GitHub',
      'Claude Code',
      'OpenCode',
      'Figma',
      'Canva',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
    ],
  },
  ],
  },
  experience: [
    {
      id: '1',
      role: 'Application Programmer',
      company: 'Province of Pangasinan',
      location: 'Lingayen, Pangasinan',
      startDate: '2025-02-01',
      endDate: '2025-05-31',
      bullets: [
        'Contributed to the development, updating, and maintenance of a mobile application for internal monitoring processes.',
        'Resolved user-reported issues, improving system reliability and reducing downtime.',
        'Collaborated with team members to enhance application features based on operational and user feedback, improving workflow efficiency.',
      ],
    },

  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Pangasinan State University',
      location: 'Lingayen, Pangasinan',
      startDate: '2021-08-22',
      endDate: '2025-08-14',

},
  ],
  certifications: [
      {
      id: '1',
      name: 'Google IT Support',
      issuer: 'Google',
      dateEarned: '2026-01-20',
      badgeImage: '/images/googleitsupport.jpeg',
    },
    {
      id: '2',
      name: 'Operating Systems and You: Becoming a Power User',
      issuer: 'Google',
      dateEarned: '2025-12-15',
      badgeImage: 'images/operating system.jpeg',
    },
    {
      id: '3',
      name: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      dateEarned: '2025-12-13',
      badgeImage: 'images/The Bits and Bytes of Computer Networking.jpeg',
    },
  
    {
      id: '4',
      name: 'System Administration and IT Infrastructure Services',
      issuer: 'Google',
      dateEarned: '2026-01-15',
      badgeImage: 'images/System Administration and IT Infrastructure Services.jpeg',
    },
  ],
  outsideTech:
    "When I’m not working with technology, I enjoy playing different kinds of sports, watching movies and series, playing video games, and working out. I also enjoy learning new things and trying out different hobbies whenever I get the chance.",
  contact: {
    email: 'ernesdalope02@gmail.com',
    location: 'San Francisco, CA',
    socialLinks: [
      {
        platform: 'email',
        label: 'Email',
        url: 'mailto:ernesdalope02@gmail.com',
        value: 'ernesdalope02@gmail.com',
      },
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ernes-glenn-dalope-2282a9316/',
        value: 'linkedin.com/in/ernes-glenn-dalope',
      },
      {
        platform: 'facebook',
        label: 'Facebook',
        url: 'https://www.facebook.com/NESERXXX/',
        value: 'facebook.com/Ernes-Dalope',
      },
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/NeserxDD',
        value: 'github.com/NeserxDD',
      },
    ],
  },
};
