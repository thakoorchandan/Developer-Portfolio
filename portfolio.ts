import emoji from 'react-easy-emoji';

import hilton_image from './public/images/Hilton-Hotels.png';
import strawberrynet from './public/images/Strawberrynet.png';

import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Thakoor Chandan',
  title: 'Hi all, Thakoor Chandan',
  description:
    'Software Engineer who loves to transform ideas into reality using code and developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs. Motivated designer and developer with experience creating custom websites with ReactJs, Node, Express, Mongo, and React JS.',
  resumeLink:
    'https://drive.google.com/file/d/1ksyzvyWheHgbZuw13_aTTGt6JaXALw9h/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'thakoorchandan',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  facebook: 'https://www.facebook.com/cherrychandantakur',
  instagram: 'https://www.instagram.com/chandansingh__inc/?hl=en',
  twitter: 'https://twitter.com/thakoor_chandan',
  github: 'https://github.com/thakoorchandan',
  linkedin: 'https://www.linkedin.com/in/thakoor-chandan-4a78b5106/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'MASAI SCHOOL',
    subHeader: 'Full Stack Web Development',
    duration: 'April 2021 - December 2021',
    desc: 'Pursued Full-Stack Web Development Bootcamp.',
    descBullets: [
      'MERN Stack',
      'Data Structures and Algorithms',
      'Soft skills',
      'Hackathons',
    ],
  },
  {
    schoolName: 'Vivekananda Institute of Tech and Sci',
    subHeader: 'Computer Science and Engineering',
    duration: 'August 2016 - December 2020',
    desc: 'Recieved Young Scientist Award in my first year',
    descBullets: [
      'Operating Systems',
      'Database Management System',
      'Basics of Programming',
      'Software Engineering Basics',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Tekion Corp',
    companyLogo:
      'https://media.licdn.com/dms/image/C560BAQGB0W6_ixPclA/company-logo_200_200/0/1547049504116?e=2147483647&v=beta&t=Y17rrlkwdW8CKCWbsuMn4c_Lx9t-gtQvwaUEPfOteT0',
    date: 'Feb 2022 – Present',
    desc: 'I worked as a frontend web developer for Vehicle Inventory Module on ARC and DRP projects',
    descBullets: [
      "Designed and implemented new features and functionality for web and mobile applications",
"Collaborated with cross-functional teams to troubleshoot and resolve software issues",
"Improved application performance by optimizing code and reducing load times",
"Ensured software quality by conducting unit and integration tests",
"Utilized Agile methodology to manage project timelines and deliverables",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/thakoorchandan/Portfolio',
    link: 'https://thakoorchandan-portfolio.vercel.app/',
  },
  {
    name: 'Strawberrynet.com',
    desc: 'An E-Commerce website which speciaizes in selling beauty products all over the globe. The website provides 800 brands and 33,000 products of different types of makeup, skincare, body care, fragrances and home scents.',
    stack: ['HTML, ', 'CSS, ', 'Express.js,  ', 'Node.js,  ', 'MongoDb'],
    github: 'https://github.com/akhiladepu/re-clone-strawberrynet',
    link: 'https://strawberrynet-clone-frontend.vercel.app/',
  },
  {
    name: 'Hilton-Hotels',
    desc: "Hilton Hotels & Resorts is Hilton's flagship brand and one of the largest hotel brands in the world. The brand is targeted at both business and leisure travelers with locations in major city centers around the world.",
    stack: [
      'React.js,  ',
      'Material UI,  ',
      'Express.js,  ',
      'Node.js,  ',
      'MongoDb',
    ],
    github: 'https://github.com/thakoorchandan/Hotels-by-Hilton',
    link: 'https://hotels-by-hilton-44jhnnl0y-thakoorchandan.vercel.app/',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Thakoor Chandan',
  description: 'A passionate Full Stack Web Developer',
  author: 'Thakoor Chandan',
  url: 'https://thakoorchandan-portfolio.vercel.app/',
  keywords: [
    'Thakoor',
    'Thakoor Chandan',
    '@thakoorchandan',
    'thakoorchandan',
    'Portfolio',
    'Thakoor Chandan Portfolio ',
    'Thakoor Chandan Portfolio',
    'web developer',
    'full stack',
    'full stack web developer',
    'mobile app developer',
    'android developer',
    'django',
    'flask',
    'django rest framework',
    'nodejs ',
    'expressjs',
    'reactjs ',
    'contextapi',
    'redux',
    'flutter',
  ],
};
