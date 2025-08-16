export type Courses = {
  id: string;
  courseName: string;
  courseId: string;
  grade: string;
  section: string; 
};

export type Section = {
  id: string;
  name: string;
  slug: string;
};

export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

const sections: Section[] = [
  { id: '1', name: 'Computer Science', slug: 'computer-science'},
  { id: '2', name: 'Data Science', slug: 'data-science'},
  { id: '3', name: 'Math', slug: 'math'},
  { id: '4', name: 'Other', slug: 'other'},
];

const products: Courses[] = [
  { id: '01', courseName: 'Data Structures and Algorithms', courseId: 'CSE310', grade: 'A+', section: '1' },
  { id: '02', courseName: 'Exploring Data in R and Python', courseId: 'DAT301', grade: 'A+', section: '2' },
  { id: '03', courseName: 'Applied Linear Algebra', courseId: 'MAT343', grade: 'A+', section: '3' },
  { id: '04', courseName: 'Intro to Software Engineering', courseId: 'CSE360', grade: 'In Progress', section: '1' },
  { id: '05', courseName: 'Computer Organization / Assembly Language Prog', courseId: 'CSE230', grade: 'A', section: '1' },
  { id: '06', courseName: 'Operating Systems', courseId: 'CSE330', grade: 'In Progress', section: '1' },
  { id: '07', courseName: 'Intro to Theoretical Computer Science', courseId: 'CSE355', grade: 'In Progress', section: '1' },
  { id: '08', courseName: 'Probability and Statistics for Engineers', courseId: 'IEE380', grade: 'A', section: '3' },
  { id: '09', courseName: 'Discete Math', courseId: 'MAT243', grade: 'A+', section: '3' },
  { id: '10', courseName: 'Math Tools for Data Science', courseId: 'DAT300', grade: 'In Progress', section: '2' },
  { id: '11', courseName: 'Intro to Programming Languages (C, C++, Scheme, Prolog)', courseId: 'CSE240', grade: 'A', section: '1' },
  { id: '12', courseName: 'Calculus for Engineers III', courseId: 'MAT267', grade: 'A+', section: '3' },
  { id: '13', courseName: 'Data Science and Society', courseId: 'DAT250', grade: 'In Progress', section: '2' },
  { id: '14', courseName: 'Information Assurance', courseId: 'CSE365', grade: 'B+', section: '1' },
  { id: '15', courseName: 'Computing Ethics', courseId: 'CSE301', grade: 'A+', section: '1' },
  { id: '16', courseName: 'Entrepreneur & Value Creation', courseId: 'FSE301', grade: 'A', section: '4' },
  { id: '17', courseName: 'Digital Design Fundamentals', courseId: 'EEE120', grade: 'A+', section: '1' },
  { id: '18', courseName: 'Object-Oriented Programming and Data', courseId: 'CSE205', grade: 'A', section: '1' },
  { id: '19', courseName: 'Programming Introduction to Engineering', courseId: 'CSE110', grade: 'A', section: '1' },
  { id: '20', courseName: 'The Geography of World Crises', courseId: 'GCU350', grade: 'A+', section: '4' },
  { id: '21', courseName: 'Intro to Physical Geography', courseId: 'GPH111/112', grade: 'A+', section: '4' },
  { id: '22', courseName: 'Latinas/os in the U.S.', courseId: 'TCL101', grade: 'A+', section: '4' },
  { id: '23', courseName: 'Introduction to Engineering', courseId: 'FSE100', grade: 'A', section: '4' },
  { id: '24', courseName: 'Intro to Geology I', courseId: 'GLG101/103', grade: 'A+', section: '4' },
  { id: '25', courseName: 'Intro to Geology II', courseId: 'GLG102/104', grade: 'A+', section: '4' },
  { id: '26', courseName: 'Into to Evolution and Medicine', courseId: 'ASB250', grade: 'A+', section: '4' },
  { id: '27', courseName: 'Intoduction to Psychology', courseId: 'PSY101', grade: 'A+', section: '4' },
  { id: '28', courseName: 'The ASU Experience', courseId: 'ASU101', grade: 'A+', section: '4' },
  { id: '29', courseName: 'Intoduction to Asia', courseId: 'HST111', grade: 'A+', section: '4' },
];


const demos = [
  {
    name: 'Personal Projects',
    items: [
      {
        slug: 'odds-optimizer',
        name: 'OddsOptimizer API',
        description: 'Real-time sports betting API that compares odds across multiple sportsbooks',
      },
      {
        slug: 'learning-cars',
        name: 'NeuroTrack',
        description: 'A Unity app where neural networks learn to control cars using sensors, speed, and generations of training.',
      },
      {
        slug: 'personal-website',
        name: 'Personal Website',
        description: 'My personal portfolio website showcasing projects, coursework, and custom UI components',
      }
    ]
  },
  {
    name: 'Work Experience',
    items: [
      {
        slug: 'meritage-homes',
        name: 'Full-Stack Development Intern',
        description: 'IT Full-Stack Development Intenship at Meritage Homes - Scottsdale, Arizona',
      },
      {
        slug: 'teaching-assistant',
        name: 'Teaching Assistant - Data Structures and Algorithms',
        description: 'Undergraduate Teaching Assistant for Data Structures and Algorithms at ASU - Tempe, Arizona',
      }
    ],
  },
  {
    name: 'Education',
    items: [
      {
        slug: 'arizona-state',
        name: 'Arizona State University',
        description: 'Bachelor\'s of Science in Computer Science & Data Science',
      },
      {
        slug: 'courses',
        name: 'Courses',
        description: 'Cumulative GPA: 4.00',
      }
    ],
  },
  {
    name: 'Volunteering',
    items: [
      {
        slug: 'theta-tau',
        name: 'Website Development',
        description: 'Lead the front-end development of the Theta Tau - Delta Gamme website',
      }
    ],
  }
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, products, demos };
