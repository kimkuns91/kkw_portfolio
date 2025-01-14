export interface IProject {
  id: number;
  title: string;
  url_slug: string;
  description: string;
  link?: string;
  thumbnail: string[];
  created_at: string;
  stack: string[];
  content: string;
  github_url?: string;
}

export interface IProjectList {
  projects: IProject[];
}

export interface ContactFormType {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}
