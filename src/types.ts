export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: 'digital' | 'offset' | 'comunicacao-visual' | 'papelaria-medica' | 'papelaria-empresarial';
  highlights?: string[];
  popular?: boolean;
  minQuantity?: string;
  basePrice?: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  slug: 'digital' | 'offset' | 'comunicacao-visual' | 'papelaria-medica' | 'papelaria-empresarial';
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  badge: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  projectType: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'arquivos' | 'producao' | 'pagamento' | 'entrega';
}

export interface QuoteRequestData {
  name: string;
  phone: string;
  email?: string;
  category: string;
  product: string;
  quantity: string;
  paperType: string;
  finishing: string;
  hasArtwork: 'sim' | 'preciso-de-arte' | 'ajuste';
  notes: string;
}
