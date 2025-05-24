
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
  live: string;
  isNew?: boolean;
  featured?: boolean;
  color: string;
};

export type ProjectCard3DProps = {
  project: Project;
  index: number;
  total: number;
  isHovered: boolean;
  setHovered: (isHovered: boolean) => void;
};
