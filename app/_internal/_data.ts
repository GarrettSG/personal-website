// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Product = {
  id: string;
  courseName: string;
  courseId: string;
  grade: string;
  category: string;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

const sections: Section[] = [
  { id: '1', name: 'Computer Science', slug: 'clothing', categories: ['1', '2', '3'] },
  { id: '2', name: 'Data Science', slug: 'electronics', categories: ['4', '5', '6'] },
  { id: '3', name: 'Math', slug: 'sports', categories: ['7', '8', '9'] },
  { id: '4', name: 'Other', slug: 'other', categories: ['7', '8', '9'] },
];

const categories: Category[] = [
  { id: '1', name: 'Tops', slug: 'tops', section: '1', products: ['1'] },
  { id: '2', name: 'Shorts', slug: 'shorts', section: '1', products: ['2'] },
  { id: '3', name: 'Shoes', slug: 'shoes', section: '1', products: ['3'] },
  { id: '4', name: 'Phones', slug: 'phones', section: '2', products: ['4'] },
  { id: '5', name: 'Laptops', slug: 'laptops', section: '2', products: ['5'] },
  { id: '6', name: 'Tablets', slug: 'tablets', section: '2', products: ['6'] },
  { id: '7', name: 'Balls', slug: 'balls', section: '3', products: ['7'] },
  {
    id: '8',
    name: 'Equipment',
    slug: 'equipment',
    section: '3',
    products: ['8'],
  },
  {
    id: '9',
    name: 'Accessories',
    slug: 'accessories',
    section: '3',
    products: ['9'],
  },
];

const products: Product[] = [
  { id: '1', courseName: 'Data Structures and Algorithms', courseId: 'CSE310', grade: 'A+', category: '1' },
  { id: '2', courseName: 'Intro to Programming Languages', courseId: 'CSE240', grade: 'A', category: '2' },
  { id: '3', courseName: 'Computer Org/Assembly Programming', courseId: 'CSE230', grade: 'A', category: '3' },
  { id: '4', courseName: 'Phone', courseId: 'phone.png', grade: '', category: '4' },
  { id: '5', courseName: 'Laptop', courseId: 'laptop.png', grade: '', category: '5' },
  { id: '6', courseName: 'Tablet', courseId: 'tablet.png', grade: '', category: '6' },
  { id: '7', courseName: 'Basketball', courseId: 'balls.png', grade: '', category: '7' },
  { id: '8', courseName: 'Weights', courseId: 'weights.png', grade: '', category: '8' },
  { id: '9', courseName: 'Gloves', courseId: 'gloves.png', grade: '', category: '9' },
];


const demos = [
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
        description: 'Bachelor\'s of Science in Computer Science with a minor in Data Science',
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

export const data = { sections, categories, products, demos };
