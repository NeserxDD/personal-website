export interface ProfileData {
  name: string;
  role: string;
  subtitle: string;
  photoMain: string;
  photoHover: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateEarned: string;
  dateExpires?: string;
  credentialId?: string;
  badgeImage: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'other';
  url?: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SiteConfig {
  profile: ProfileData;
  about: string[];
  projects: Project[];
  skills: {
    technical: SkillCategory[];
    soft: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  outsideTech: string;
  contact: {
    email: string;
    location: string;
  };
}
