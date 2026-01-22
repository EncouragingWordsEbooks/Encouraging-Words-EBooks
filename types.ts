
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  description: string;
  coverImage: string;
  introduction: string;
  benefits: string[];
  testimonials: Testimonial[];
  categories: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
