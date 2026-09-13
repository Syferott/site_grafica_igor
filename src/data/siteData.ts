import { ServiceCategory, ServiceItem, Testimonial, PortfolioItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Gráfica Vinigor',
  slogan: 'Imprimindo boas ideias',
  cnpj: '19.642.269/0001-08',
  phone: '(21) 98383-1751',
  phoneClean: '5521983831751',
  whatsappUrl: 'https://wa.me/5521983831751',
  email: 'vinigorpenha@gmail.com',
  address: {
    street: 'Estrada José Rucas, nº 201',
    neighborhood: 'Penha',
    city: 'Rio de Janeiro',
    state: 'RJ',
    cep: '21.070-370',
    full: 'Estrada José Rucas, nº 201 - Penha - Rio de Janeiro - RJ - CEP: 21.070-370',
    mapsUrl: 'https://maps.google.com/?q=Estrada+Jos%C3%A9+Rucas+201+Penha+Rio+de+Janeiro'
  },
  regionalBranch: {
    address: 'Av. Independência - Unamar, Cabo Frio - RJ, CEP 28928-542',
    name: 'Atendimento Região dos Lagos'
  },
  hours: {
    weekdays: 'Segunda à Sexta, das 09h às 18h',
    saturday: 'Sábados, das 09h às 12h',
    sunday: 'Fechado',
    formatted: 'SEG À SEX 9h às 18h - Sáb 9h às 12h'
  },
  social: {
    instagram: 'https://www.instagram.com/graficavinigor/',
    facebook: 'https://www.facebook.com/vinigor',
    whatsapp: 'https://wa.me/5521983831751'
  },
  stats: [
    { label: 'Anos de Tradição', value: '+20', subtext: 'Desde a década de 90' },
    { label: 'Projetos Entregues', value: '+50 mil', subtext: 'Offset, digital e visual' },
    { label: 'Clientes Atendidos', value: '+3.800', subtext: 'Empresas, médicos e pessoas' },
    { label: 'Avaliação Média', value: '4.9 ★', subtext: 'Satisfação garantida' }
  ]
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'digital',
    slug: 'digital',
    name: 'Impressão Digital',
    badge: 'Pequenas Tiragens & Rapidez',
    shortDesc: 'Soluções rápidas e sob demanda com tecnologia laser e alta definição de cor.',
    longDesc: 'Ideal para quem precisa de agilidade, prazos curtos e quantidades personalizadas sem abrir mão de qualidade fotográfica impecável.',
    iconName: 'Printer',
    items: [
      'Impressão Laser Colorida e Preto & Branco',
      'Plottagem A1, A2 e grandes formatos de engenharia/arquitetura',
      'Impressões em Super A3, A3, A4, A5 e A6',
      'Cardápios e Catálogos PVC e plastificados laváveis',
      'Cadernos, Agendas e Planners personalizados',
      'Livretos, Apostilas e Manuais de treinamento',
      'Impressão de Dados Variáveis e Mala Direta',
      'Cópias de Alta Precisão e Encadernações (Espiral e Wire-o)',
      'Diplomas, Certificados em papéis nobres',
      'Cartazes, Pôsteres e Banners promocionais',
      'Calendários de Mesa e Parede',
      'Convites de Eventos e Casamento com acabamento especial',
      'Ventarolas e Plaquinhas fotográficas',
      'Tags "Não Perturbe" para hotelaria e eventos',
      'Impressão com corte e vinco especial sob medida',
      'Papel de Seda personalizado para embalagens',
      'Plastificação e Laminação fosca ou com brilho UV',
      'Crachás em PVC e cordões personalizados'
    ]
  },
  {
    id: 'offset',
    slug: 'offset',
    name: 'Gráfica Offset',
    badge: 'Grandes Tiragens & Custo-Benefício',
    shortDesc: 'A melhor relação custo-benefício para altos volumes com fidelidade cromática absoluta.',
    longDesc: 'Com parque gráfico industrial moderno, produzimos impressos de alta tiragem com registro milimétrico e uniformidade total em todas as folhas.',
    iconName: 'Layers',
    items: [
      'Blocos, Talões de Pedido e Comandas numeradas',
      'Impressões em grandes tiragens comerciais',
      'Folders com 2 ou 3 dobras em papel couché',
      'Flyers e Panfletos promocionais de alta circulação',
      'Envelopes Ofício, Saco e Carta personalizados',
      'Pastas personalizadas com bolsa e orelha para contratos',
      'Papelaria Corporativa Completa',
      'Receituários Médicos e Papéis Timbrados',
      'Cartões de Visita tradicionais e Verniz Localizado UV',
      'Tags e Rótulos adesivos em papel para produtos',
      'Adesivos em Papel com meio-corte',
      'Ventarolas rígidas para campanhas e comícios',
      'Marcadores de Página com verniz e laminação soft touch'
    ]
  },
  {
    id: 'comunicacao-visual',
    slug: 'comunicacao-visual',
    name: 'Comunicação Visual',
    badge: 'Destaque Sua Marca',
    shortDesc: 'Sinalização, fachadas, banners e ambientação para destacar sua empresa onde ela estiver.',
    longDesc: 'Materiais resistentes a intempéries, com tintas ecológicas duráveis e acabamentos profissionais para fachadas, eventos e lojas.',
    iconName: 'Sparkles',
    items: [
      'Placas de Sinalização interna e externa em PS e ACM',
      'Recorte Eletrônico em vinil adesivo de alta durabilidade',
      'Adesivos promocionais e decorativos',
      'Banners, Lonas e Faixas com acabamento em madeira e ilhós',
      'Wind Banners e Bandeiras promocionais com haste e base',
      'Adesivação residencial, vitrines e frotas empresariais',
      'Etiquetas industriais e selos holográficos',
      'Rótulos resistentes à umidade para cosméticos e bebidas',
      'Painéis decorativos e backdrops para palestras e fotos'
    ]
  },
  {
    id: 'papelaria-medica',
    slug: 'papelaria-medica',
    name: 'Papelaria Médica',
    badge: 'Especialidade Gráfica Vinigor',
    shortDesc: 'Materiais impressos sob medida para clínicas, consultórios, dentistas e laboratórios.',
    longDesc: 'Segurança, elegância e conformidade com as normas sanitárias e conselhos de classe. Papéis nobres que valorizam o atendimento ao paciente.',
    iconName: 'Stethoscope',
    items: [
      'Receituários Comuns e de Controle Especial (Portaria 344)',
      'Pastas Médicas com bolsa para exames e laudos',
      'Atestados e Declarações médicas timbradas',
      'Fichas de Anamnese e Prontuários clínicos',
      'Envelopes para Raio-X, Tomografias e Ultrassonografias',
      'Cartões de Consulta e Agendamento de Retorno',
      'Blocos de Pedido de Exames padronizados',
      'Crachás de Identificação para equipes de saúde'
    ]
  },
  {
    id: 'papelaria-empresarial',
    slug: 'papelaria-empresarial',
    name: 'Papelaria Empresarial',
    badge: 'Identidade Corporativa',
    shortDesc: 'Fortaleça sua marca com impressos executivos que transmitem credibilidade e profissionalismo.',
    longDesc: 'Do primeiro contato ao fechamento do contrato, garanta que cada material entregue ao seu cliente represente a autoridade do seu negócio.',
    iconName: 'Briefcase',
    items: [
      'Cartões de Visita Premium com acabamentos refinados',
      'Papel Timbrado Oficial em Offset 75g, 90g ou Vergê',
      'Pastas Corporativas com acabamento em laminação fosca',
      'Envelopes Ofício e Saco personalizados com timbragem',
      'Crachás de Funcionários e Credenciais para eventos',
      'Blocos de Anotações e Notas Fiscais/Recibos',
      'Manuais de Integração e Catálogos de Produtos'
    ]
  }
];

export const HIGHLIGHTED_PRODUCTS: ServiceItem[] = [
  {
    id: 'cartoes-visita-verniz',
    name: 'Cartões de Visita com Verniz Localizado',
    category: 'offset',
    description: 'Papel Couché 300g com laminação fosca (BOPP) e aplicação de Verniz UV localizado na logomarca ou elementos de destaque.',
    highlights: ['Couché 300g premium', 'Laminação fosca aveludada', 'Verniz UV localizado frente ou frente/verso'],
    popular: true,
    minQuantity: '500 unidades',
    basePrice: 'A partir de R$ 225,00',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cartoes-tradicionais',
    name: 'Cartões de Visita Clássicos',
    category: 'offset',
    description: 'Impressão 4x0 ou 4x4 em alta resolução em Couché 250g/300g com verniz total brilhante na frente.',
    highlights: ['Excelente custo-benefício', 'Cores vivas e nítidas', 'Entrega ágil'],
    popular: true,
    minQuantity: '1.000 unidades',
    basePrice: 'A partir de R$ 98,00',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'receituarios-medicos',
    name: 'Receituários Médicos e Odontológicos',
    category: 'papelaria-medica',
    description: 'Blocos de receituário simples ou autocopiativo com colagem de precisão, picote opcional e numeração sequencial.',
    highlights: ['Papel Sulfite 75g ou 90g', 'Opção 2 vias autocopiativo', 'Blocos de 50 ou 100 folhas'],
    popular: true,
    minQuantity: '5 blocos',
    basePrice: 'Sob consulta rápida',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastas-corporativas',
    name: 'Pastas Personalizadas com Bolsa ou Orelha',
    category: 'papelaria-empresarial',
    description: 'Perfeitas para apresentação de propostas comerciais, contratos e prontuários com encaixe para cartão de visita.',
    highlights: ['Papel Supremo ou Couché 300g', 'Bolsa colada ou orelha montada', 'Laminação fosca ou brilho'],
    popular: true,
    minQuantity: '100 unidades',
    basePrice: 'Sob consulta rápida',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wind-banners',
    name: 'Wind Banners e Bandeiras Promocionais',
    category: 'comunicacao-visual',
    description: 'Estrutura completa com tecido especial sublimado, haste de fibra flexível e base para fixação em chão ou grama.',
    highlights: ['Tecido resistente ao sol e vento', 'Haste de fibra de alta durabilidade', 'Base plástica preenchível'],
    popular: true,
    minQuantity: '1 unidade',
    basePrice: 'Sob consulta rápida',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'banners-lonas',
    name: 'Banners em Lona e Faixas de Fachada',
    category: 'comunicacao-visual',
    description: 'Lona frontlight reforçada 440g com impressão digital de alta resolução, ilhós metálicos ou bastão e corda para suspensão.',
    highlights: ['Lona 440g anti-rasgo', 'Acabamento completo pronto para pendurar', 'Qualidade fotográfica'],
    popular: false,
    minQuantity: '1 unidade',
    basePrice: 'Sob medida',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cardapios-pvc',
    name: 'Cardápios Laváveis em PVC e Plastificados',
    category: 'digital',
    description: 'Ideais para restaurantes, bares e cafeterias. Totalmente impermeáveis e resistentes a gordura e limpeza diária.',
    highlights: ['Impermeável e lavável', 'Acabamento grampeado ou wire-o', 'Cantos arredondados'],
    popular: false,
    minQuantity: '10 unidades',
    basePrice: 'Sob consulta rápida',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'panfletos-flyers',
    name: 'Flyers e Panfletos Promocionais',
    category: 'offset',
    description: 'Formatos 10x15cm, 15x21cm ou A4 com papel couché brilho 90g ou 115g. Grande alcance para sua divulgação local.',
    highlights: ['Papel Couché brilhante', 'Distribuição de massa', 'Preço unitário reduzido'],
    popular: true,
    minQuantity: '2.500 unidades',
    basePrice: 'Sob consulta rápida',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Kit de Identidade Corporativa e Papelaria',
    category: 'Papelaria Empresarial',
    description: 'Pastas com bolsa, papel timbrado e cartões de visita com verniz localizado para escritório de advocacia.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=80',
    tags: ['Couché 300g', 'Verniz Localizado', 'BOPP Fosco']
  },
  {
    id: 'p2',
    title: 'Receituários e Pastas para Clínica Médica',
    category: 'Papelaria Médica',
    description: 'Blocos de receituário controlado em 2 vias autocopiativo e pastas rígidas para entrega de exames de imagem.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    tags: ['Autocopiativo', 'Papel Sulfite 90g', 'Penha RJ']
  },
  {
    id: 'p3',
    title: 'Wind Banners Promocionais para Inauguração',
    category: 'Comunicação Visual',
    description: 'Conjunto de 4 wind banners gota e pena com estampa dupla face para rede de lojas no Rio.',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80',
    tags: ['Sublimação Digital', 'Fibra de Vidro', 'Resistente']
  },
  {
    id: 'p4',
    title: 'Cardápios Luxo em PVC com Laminação',
    category: 'Impressão Digital',
    description: 'Cardápios gastronômicos resistentes a líquidos e rasgos, com encadernação elegante para restaurante na Zona Norte.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    tags: ['PVC Rígido', 'Lavável', 'Cores Vivas']
  },
  {
    id: 'p5',
    title: 'Flyers de Alta Circulação para Lançamento',
    category: 'Gráfica Offset',
    description: 'Tiragem de 50.000 unidades em couché 115g com dobra perfeita e fidelidade cromática conferida em máquina.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80',
    tags: ['Offset 4 Cores', 'Couché 115g', 'Grande Tiragem']
  },
  {
    id: 'p6',
    title: 'Rótulos e Adesivos Vinil com Meio-Corte',
    category: 'Comunicação Visual',
    description: 'Adesivos circulares recortados eletronicamente para linha de cosméticos e cervejas artesanais.',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80',
    tags: ['Vinil Brilho', 'Recorte Eletrônico', 'Impermeável']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dra. Camila Vasconcelos',
    role: 'Médica Cardiologista',
    company: 'Consultório Particular',
    location: 'Penha, Rio de Janeiro',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    comment: 'A Gráfica Vinigor faz meus receituários médicos e pastas de exames há mais de 4 anos. A qualidade do papel e a pontualidade na entrega aqui na Penha são impecáveis. Nunca tive nenhum problema com a padronização das normas médicas!',
    date: 'Fevereiro de 2024',
    projectType: 'Receituários & Pastas Médicas'
  },
  {
    id: 't2',
    name: 'Marcelo Pires de Castro',
    role: 'Diretor Comercial',
    company: 'Castro & Associados Engenharia',
    location: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    comment: 'Fizemos os cartões de visita com verniz localizado e as pastas corporativas da empresa. O acabamento superou as expectativas dos nossos sócios. Atendimento rápido pelo WhatsApp e preço justo de verdade.',
    date: 'Janeiro de 2024',
    projectType: 'Cartões Verniz Localizado & Pastas'
  },
  {
    id: 't3',
    name: 'Juliana Mendes',
    role: 'Proprietária',
    company: 'Bistrô & Café Aromas',
    location: 'Cabo Frio, RJ',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    comment: 'Nossos cardápios em PVC ficaram incríveis! Clientes e garçons elogiaram muito, pois não molham, são fáceis de higienizar e a impressão ficou super nítida. Também encomendei os banners da fachada e a entrega foi pontual.',
    date: 'Novembro de 2023',
    projectType: 'Cardápios PVC & Banners'
  },
  {
    id: 't4',
    name: 'Rodrigo Santoro Alencar',
    role: 'Designer Gráfico & Produtor',
    company: 'Studio Criativo Rio',
    location: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    comment: 'Como designer, sou extremamente exigente com calibração de cor CMYK e sangria. A equipe da Vinigor entende do riscado e não erra o tom. Já rodei catálogos e folhetos de grandes tiragens e a consistência do offset é fantástica.',
    date: 'Março de 2024',
    projectType: 'Catálogos & Folders Offset'
  },
  {
    id: 't5',
    name: 'Tatiane Ramos',
    role: 'Coordenadora Pedagógica',
    company: 'Instituto Educacional Penha',
    location: 'Penha, Rio de Janeiro',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    comment: 'Imprimimos apostilas, agendas e certificados para os alunos. O atendimento é acolhedor, rápido e com muita paciência para alinhar os detalhes. Ter uma gráfica com essa qualidade e tradição no nosso bairro é um privilégio.',
    date: 'Janeiro de 2024',
    projectType: 'Agendas & Apostilas'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como faço para solicitar um orçamento rápido?',
    answer: 'Você pode solicitar diretamente pelo nosso botão de WhatsApp (21) 98383-1751 ou utilizando o simulador no site. Nossa equipe responde rapidamente com os valores, opções de papel e prazos estimados.',
    category: 'producao'
  },
  {
    question: 'Quais formatos de arquivo vocês aceitam para impressão?',
    answer: 'Recomendamos o envio em PDF/X-1a em padrão de cores CMYK com textos convertidos em curvas e imagens em resolução mínima de 300 DPI. Também recebemos arquivos em Corel Draw, Adobe Illustrator, Photoshop e TIFF.',
    category: 'arquivos'
  },
  {
    question: 'Vocês realizam a criação ou ajuste da arte gráfica?',
    answer: 'Sim! Se você já possui a arte, conferimos se está nos padrões técnicos antes de rodar. Se precisar criar do zero ou fazer ajustes na sua identidade visual, nosso setor de design gráfico desenvolve o layout para você aprovar.',
    category: 'arquivos'
  },
  {
    question: 'Qual é a diferença entre Impressão Digital e Offset?',
    answer: 'A Impressão Digital é recomendada para pequenas e médias quantidades com urgência ou dados variáveis, sem custo fixo de chapas. Já a Gráfica Offset é a opção mais econômica e precisa para médias e grandes tiragens (como 1.000, 5.000 ou 50.000 folhetos, blocos ou caixas).',
    category: 'producao'
  },
  {
    question: 'Como funciona a retirada e a entrega dos materiais?',
    answer: 'Você pode retirar seu pedido em nosso endereço na Penha (Estrada José Rucas, nº 201 - Penha - Rio de Janeiro) ou solicitar entrega via motoboy ou transportadora para todo o Grande Rio e Região dos Lagos.',
    category: 'entrega'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX com liberação imediata, cartões de crédito e débito, transferência bancária e condições especiais para faturamento empresarial mediante cadastro prévio.',
    category: 'pagamento'
  }
];
