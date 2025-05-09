export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  results: string[];
  image: string;
}