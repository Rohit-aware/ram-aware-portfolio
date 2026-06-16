export interface MetricCard {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  tags: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  impact: string;
  impactValue?: string;
  description: string;
  outcomes: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  company: string;
  count?: string;
  description: string;
  icon: string;
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
