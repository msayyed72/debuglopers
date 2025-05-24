
import { Star, Github, ExternalLink, Code, Boxes } from "lucide-react";
import { Project } from "../3d/ProjectCard3DTypes";

export type { Project } from "../3d/ProjectCard3DTypes";

export type ViewMode = "3d" | "grid" | "featured";

export const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "Advanced analytics dashboard with real-time data visualization and AI-powered insights for business intelligence.",
    image: "/lovable-uploads/82393b3e-9be9-40f9-a437-ab14f4226712.png",
    category: "Dashboard",
    technologies: ["React", "Node.js", "D3.js", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#c2ff00",
    featured: true
  },
  {
    id: 2,
    title: "Neura AI Assistant",
    description: "AI-powered virtual assistant for business automation with natural language processing and machine learning capabilities.",
    image: "/lovable-uploads/c830e3ce-b0c3-4f06-9c0b-a34bbbdf1495.png",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#00FFFF",
    featured: true
  },
  {
    id: 3,
    title: "Luminous Brand System",
    description: "Complete brand identity and design system with component library and customizable UI elements.",
    image: "/lovable-uploads/b815adab-25dd-4e83-8aef-87547a34d911.png",
    category: "Branding",
    technologies: ["Figma", "Adobe CC", "WebGL", "React"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#ff00c2",
    featured: false
  },
  {
    id: 4,
    title: "Global Commerce Platform",
    description: "Scalable e-commerce solution with multiple payment gateways, inventory management, and customer analytics.",
    image: "/lovable-uploads/e4d47b62-e070-4b8e-ab49-742e2387678c.png",
    category: "Web Dev",
    technologies: ["Next.js", "Stripe", "MongoDB", "GraphQL"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff9900",
    featured: true
  },
  {
    id: 5,
    title: "Immersive XR Experience",
    description: "Virtual reality application for architectural visualization and interactive 3D modeling.",
    image: "/lovable-uploads/f7c59a27-abbc-450a-9bbc-98c0d46706f8.png",
    category: "3D",
    technologies: ["Three.js", "WebXR", "GLSL", "Blender"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#01c8ff",
    featured: false
  },
];

export const categories = ["All", "Web Dev", "Branding", "AI", "Dashboard", "3D"];

export const viewModes = [
  { id: "3d", icon: Boxes, label: "3D View" },
  { id: "grid", icon: Code, label: "Grid View" },
  { id: "featured", icon: Star, label: "Featured" },
];
