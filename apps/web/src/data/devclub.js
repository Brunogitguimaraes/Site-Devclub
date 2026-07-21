import {
  GraduationCap,
  Users,
  MessagesSquare,
  TerminalSquare,
  Briefcase,
  Cpu,
  Workflow,
  PenTool,
  Layers,
  Server,
} from 'lucide-react';

export const socialStrip = [
  '+35.000 pessoas construindo o próximo nível',
  'Projetos reais. Comunidade real. Carreira real.',
  'Do primeiro código à primeira oportunidade.',
  'O mercado não espera. Você também não deveria.',
];

export const ecosystem = [
  {
    id: 'formacoes',
    label: 'Formações',
    icon: GraduationCap,
    status: '06 trilhas ativas',
    metric: '+1.200h',
    metricLabel: 'de conteúdo aplicado',
    title: 'Formações que constroem quem você quer ser',
    desc: 'Trilhas guiadas do primeiro código ao deploy em produção. Você aprende construindo projetos reais, não assistindo aulas soltas.',
    demo: 'progress',
  },
  {
    id: 'mentorias',
    label: 'Mentorias',
    icon: MessagesSquare,
    status: 'ao vivo toda semana',
    metric: '4.8/5',
    metricLabel: 'satisfação nas sessões',
    title: 'Mentorias com quem já está no jogo',
    desc: 'Sessões ao vivo, revisões de código e direcionamento de carreira com devs que trabalham no mercado agora.',
    demo: 'chat',
  },
  {
    id: 'comunidade',
    label: 'Comunidade',
    icon: Users,
    status: '35k membros online',
    metric: '24/7',
    metricLabel: 'de gente construindo junto',
    title: 'Uma comunidade que acelera resultados',
    desc: 'Você nunca trava sozinho. Dúvida, review, dupla de estudo e networking em um ecossistema que se move contigo.',
    demo: 'avatars',
  },
  {
    id: 'projetos',
    label: 'Projetos reais',
    icon: TerminalSquare,
    status: 'build in public',
    metric: '+9k',
    metricLabel: 'projetos entregues',
    title: 'Portfólio que fala mais alto que diploma',
    desc: 'Desafios com escopo de mercado. Você sai com projetos que provam o que sabe fazer, versionados e no ar.',
    demo: 'terminal',
  },
  {
    id: 'oportunidades',
    label: 'Oportunidades',
    icon: Briefcase,
    status: 'vagas semanais',
    metric: '1.200+',
    metricLabel: 'contratações e conexões',
    title: 'Onde o esforço vira oportunidade real',
    desc: 'Empresas parceiras buscam talentos formados aqui. Indicações, processos e portas que abrem quando você está pronto.',
    demo: 'hire',
  },
];

export const tracks = [
  {
    id: 'fullstack',
    name: 'Full Stack',
    icon: Layers,
    duration: '9 meses',
    level: 'Do zero ao pleno',
    skills: ['React', 'Node.js', 'PostgreSQL', 'APIs', 'Deploy'],
    progress: 82,
    color: '145 90% 52%',
  },
  {
    id: 'frontend',
    name: 'Front-end',
    icon: PenTool,
    duration: '5 meses',
    level: 'Iniciante a avançado',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
    progress: 74,
    color: '210 100% 60%',
  },
  {
    id: 'backend',
    name: 'Back-end',
    icon: Server,
    duration: '6 meses',
    level: 'Intermediário',
    skills: ['Node.js', 'SQL', 'Arquitetura', 'Segurança'],
    progress: 68,
    color: '145 90% 52%',
  },
  {
    id: 'ia',
    name: 'Inteligência Artificial',
    icon: Cpu,
    duration: '7 meses',
    level: 'Intermediário+',
    skills: ['Python', 'LLMs', 'RAG', 'Dados'],
    progress: 61,
    color: '48 100% 60%',
  },
  {
    id: 'automacao',
    name: 'Automação',
    icon: Workflow,
    duration: '4 meses',
    level: 'Iniciante',
    skills: ['Python', 'APIs', 'No-code', 'Integrações'],
    progress: 55,
    color: '210 100% 60%',
  },
  {
    id: 'uiux',
    name: 'UI/UX para produtos',
    icon: PenTool,
    duration: '5 meses',
    level: 'Iniciante a pleno',
    skills: ['Figma', 'Design System', 'Pesquisa', 'Protótipo'],
    progress: 47,
    color: '145 90% 52%',
  },
];

export const featuredStory = {
  name: 'Rafael Andrade',
  role: 'Desenvolvedor Full Stack',
  image: 'https://images.hostinger.com/83ee89b9-18db-4bcb-9888-d63c704eeb70.png',
  headline: 'De R$ 1.800 para R$ 8.500/mês criando soluções digitais.',
  quote: 'Eu trabalhava com suporte e achava que programação não era pra mim. Seis meses depois do primeiro projeto real, recebi a primeira proposta. Hoje construo produtos que milhares de pessoas usam.',
  timeline: [
    { label: 'Entrou no DevClub', detail: 'Sem base técnica, muita vontade' },
    { label: 'Entregou o primeiro projeto', detail: 'App de finanças no ar' },
    { label: 'Conseguiu entrevistas', detail: '3 processos em 5 semanas' },
    { label: 'Fechou a primeira oportunidade', detail: 'Vaga full stack pleno' },
  ],
};

export const miniStories = [
  {
    name: 'Camila Souza',
    role: 'Front-end Developer',
    text: 'Saí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.',
    delta: '+186% de renda',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Back-end Developer',
    text: 'Nunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.',
    delta: 'Primeira vaga em 7 meses',
  },
  {
    name: 'Beatriz Lima',
    role: 'Data & IA',
    text: 'Migrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar.',
    delta: 'Contrato internacional',
  },
];

export const companies = [
  'Nubex', 'Quantia', 'Verdo', 'Lumina', 'Stackly', 'Órbita',
  'Nível', 'Pulsar', 'Cortex', 'Vértice', 'Onda', 'Klaro',
];

export const impactMetrics = [
  { value: 35, suffix: 'k+', label: 'membros ativos' },
  { value: 1200, suffix: '+', label: 'contratações e oportunidades' },
  { value: 92, suffix: '%', label: 'recomendariam a comunidade' },
  { value: 24, suffix: '', label: 'estados conectados' },
];

export const tutors = [
  {
    name: 'Marina Costa',
    specialty: 'Full Stack & Carreira',
    image: 'https://images.hostinger.com/7131fd4f-1ad9-447d-bd45-dde0e1a8194d.png',
    phrase: 'Ninguém evolui no vácuo. Aqui a gente constrói junto.',
    color: '145 90% 52%',
  },
  {
    name: 'Diego Martins',
    specialty: 'Arquitetura & Back-end',
    image: 'https://images.hostinger.com/2d35cb99-b3bf-40b6-88c0-d9ed0022659c.png',
    phrase: 'Código bom é o que resolve problema de gente de verdade.',
    color: '210 100% 60%',
  },
  {
    name: 'Aline Rocha',
    specialty: 'Front-end & Produto',
    image: 'https://images.hostinger.com/d361daf7-1624-4745-92b9-c4808bee3b67.png',
    phrase: 'Interface é empatia. Você projeta pra alguém sentir.',
    color: '145 90% 52%',
  },
  {
    name: 'Kenji Tanaka',
    specialty: 'Dados & Inteligência Artificial',
    image: 'https://images.hostinger.com/5a6361a8-9be7-4060-a969-edb9b1df815f.png',
    phrase: 'IA não substitui você. Ela amplifica quem sabe usar.',
    color: '48 100% 60%',
  },
];
