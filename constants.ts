import { Award, Degree, Position, Project, Role, SectionId } from './types';

export { SectionId };

export const NAV_LINKS = [
  { id: SectionId.HERO, label: 'Home' },
  { id: SectionId.AWARDS, label: 'Awards' },
  { id: SectionId.FOCUS, label: 'Focus' },
  { id: SectionId.EDUCATION, label: 'Education' },
  { id: SectionId.EXPERIENCE, label: 'Experience' },
  { id: SectionId.CONTACT, label: 'Contact' },
];

export const AWARDS_DATA: Award[] = [
  {
    year: '2025',
    title: 'Innovative Online Use of Technology',
    organization: 'Purdue University Online',
    description: 'Recognized for custom AI assistants helping graduate students',
    iconType: 'star'
  },
  {
    year: '2023',
    title: 'Excellence in Online Course Design',
    organization: 'Purdue University Online',
    description: 'Student-centric design of GB 513 Business Analytics',
    iconType: 'award'
  },
  {
    year: '2021',
    title: 'ACBSP Teaching Excellence Award',
    organization: 'ACBSP',
    description: 'One of 7 winners in the United States',
    iconType: 'trophy'
  },
  {
    year: '2016',
    title: 'School of Business Professor of the Year',
    organization: 'Purdue University Global',
    description: 'Recognized for outstanding contribution to the school',
    iconType: 'star'
  }
];

export const LEADERSHIP_ROLES: Role[] = [
  {
    title: 'Faculty Lead',
    category: 'Program Development',
    description: 'Doctorate in Business Administration program'
  },
  {
    title: 'Faculty Advisor',
    category: 'Student Success',
    description: 'Delta Mu Delta Honor Society'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Research Methodology Selector',
    description: 'Interactive tool for DBA students to identify appropriate research methodologies.',
    url: 'https://cunmayday.github.io/webtests/methods.html'
  },
  {
    title: 'Analytics Case Study',
    description: 'Comprehensive case study example demonstrating business analytics applications.',
    url: 'https://cunmayday.github.io/webtests/caseada.html'
  },
  {
    title: 'AI Use Cases Catalog',
    description: 'Curated collection of AI applications and use cases in education.',
    url: 'https://usecases.vercel.app/index.html'
  }
];

export const EDUCATION_DATA: Degree[] = [
  {
    degree: 'PhD',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    years: '1997-2001'
  },
  {
    degree: 'MBA',
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    years: '1994-1996'
  },
  {
    degree: 'BS - Industrial Engineering',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    years: '1990-1994'
  }
];

export const EXPERIENCE_DATA: Position[] = [
  {
    title: 'Professor',
    organization: 'Purdue University Global',
    period: '2009 - Present',
    highlights: [
      'Faculty lead in charge of developing the new Doctorate in Business Administration program',
      'Received the 2025 Purdue University Online award for Innovative Online Use of Technology',
      'Received the 2023 Purdue University Online award for Excellence in Online Course Design',
      'Received the 2021 ACBSP Teaching Excellence Award, one of 7 winners in the U.S.',
      'Recognized as the 2016 School of Business Professor of the Year',
      'Faculty advisor for Delta Mu Delta Honor Society'
    ]
  },
  {
    title: 'Post-doctoral Research Fellow',
    organization: 'North Carolina State University',
    period: '2001 - 2003',
    highlights: [
      'Created fuzzy logic based decision support system for supplier selection'
    ]
  },
  {
    title: 'Research Assistant',
    organization: 'North Carolina State University',
    period: '1997 - 2001',
    highlights: [
      'Conducted research regarding decision support systems',
      'Performance measurement in and of organizations',
      'Simulations to analyze coordination',
      'Workflow analysis of business processes',
      'Support for business decisions using fuzzy logic',
      'Developed two software programs that led to patent opportunities'
    ]
  },
  {
    title: 'Consultant',
    organization: 'CIBA Vision, Atlanta GA',
    period: '1995 - 1997',
    highlights: [
      'Consulted regarding inventory control issues',
      'Developed and implemented new methodology for effective inventory control',
      'Deliverables included inventory target levels and software tools',
      'Analyzed shipping warehouse efficiency'
    ]
  },
  {
    title: 'Operations Analyst',
    organization: 'IBM, Atlanta GA',
    period: '1995',
    highlights: [
      'Analyzed service operations and developed measurement tools',
      'Developed cost analysis tools and financial forecasts',
      'Created new queries for information collection',
      'Produced analysis reports and performance forecasts'
    ]
  }
];

export const EXPERTISE_TAGS = [
  'Business Administration',
  'AI in Education',
  'Decision Support Systems',
  'Inventory Control',
  'Industrial Engineering',
  'Online Education',
  'Educational Technology',
  'Fuzzy Logic'
];

export const CONTACT_EMAIL = 'caltinoz@purdueglobal.edu';