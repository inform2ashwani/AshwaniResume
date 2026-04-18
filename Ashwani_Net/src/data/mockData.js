const resume = [
  {
    _id: 'resume-summary',
    type: 'summary',
    title: 'Professional Summary',
    name: 'Ashwani Kumar',
    headline: '.NET Architect with AWS and Azure expertise',
    location: 'Bangalore, India',
    content: 'Having 14+ years of strong experience in the IT industry as a Microsoft .NET technologist.',
    items: [
      'Having good experience using Asp.net/C#/LINQ/Entity Framework/Web API etc.',
      'Expert knowledge of all phases of Software Development Life Cycle (SDLC) involving Systems Analysis, Design, Development and Implementation.',
      'Having 3+ years of experience on AWS Cloud (CloudFormation, Lambda Function, API Gateway, DynamoDB, S3, SNS, SQS, SES, Pinpoint, Topics, Event Bridge, VPC, Step Functions etc.)',
      'Experience in analytical Database Design.',
      'Having 5+ years of experience on MVC.',
      'Having 4+ years of experience on .NET Core.',
      'Having good knowledge on Microsoft Azure (Notification Hub, Service Bus, Azure AD, Blob storage, App Services etc.)',
      'Have worked with Signal-R for chat and real time applications.',
      'Have integrated payment gateways (Sage Pay, PayPal etc.)',
      'Have integrated third party services like (Sage Intact / Hover / Weather forecast / Fountain / Aadhar Bio-metric) /NIPR (National Insurance Producer Registry) /Lawson /Auth0 Authentication etc.',
      'Highly proficient in the use of T-SQL for developing complex stored procedures, triggers, tables, user functions, user profiles, relational database models and data integrity, SQL joins and query writing.',
      'Domain Knowledge: ERP, POS, Insurance, E-Commerce, Accounting, Loyalty, CRM etc.',
    ],
  },
  {
    _id: 'resume-contact',
    type: 'contact',
    title: 'Contact',
    items: [
      { label: 'Email', value: 'ashwani.fullstack@gmail.com', href: 'mailto:ashwani.fullstack@gmail.com' },
      { label: 'Phone', value: '+91 9717562682' },
      { label: 'Location', value: 'Bangalore, India' },
    ],
  },
  {
    _id: 'resume-experience',
    type: 'experience',
    title: 'Work Experience',
    items: [
      {
        company: 'Espire Infolabs (CMMI V)',
        role: 'Technical Architect',
        date: 'Apr 2024 - Till Date',
        location: 'India',
        summary: 'Working as Technical Architect for enterprise digital transformation initiatives.',
        highlights: [
          'Architecting solutions for cloud-native applications and enterprise services.',
          'Leading design and delivery of .NET, AWS, and Azure-based systems.',
        ],
      },
      {
        company: 'Espire Infolabs (CMMI V)',
        role: 'Senior Technical Leader',
        date: 'Jun 2021 - Apr 2024',
        location: 'India',
        summary: 'Led technical teams delivering large-scale .NET and cloud solutions.',
        highlights: [
          'Oversaw implementation of AWS and Azure integrations for enterprise clients.',
          'Mentored developers on SDLC best practices and modern .NET development.',
        ],
      },
      {
        company: 'Primus Software Corporation',
        role: 'Software Developer-II',
        date: 'Dec 2019 - May 2021',
        location: 'India',
        summary: 'Developed software solutions using .NET and database technologies.',
        highlights: [
          'Delivered MVC and Web API applications for business process automation.',
          'Implemented complex T-SQL procedures and reports for analytics.',
        ],
      },
      {
        company: 'IDEMIA',
        role: 'Senior Software Engineer',
        date: 'Nov 2017 - Nov 2019',
        location: 'India',
        summary: 'Worked on identity and security-focused software products.',
        highlights: [
          'Built real-time features with SignalR and integrated authentication services.',
          'Contributed to biometric and payment integration workflows.',
        ],
      },
      {
        company: 'Micro Solutions',
        role: 'Team Lead / Senior Developer',
        date: 'Mar 2013 - Apr 2017',
        location: 'India',
        summary: 'Led development teams on enterprise product development.',
        highlights: [
          'Managed .NET application delivery and team collaboration.',
          'Designed database schemas and ensured application stability.',
        ],
      },
      {
        company: 'Mascot Software',
        role: 'Software Developer',
        date: 'Mar 2010 - Mar 2013',
        location: 'India',
        summary: 'Worked as a developer on Microsoft .NET application projects.',
        highlights: [
          'Developed web and desktop applications using ASP.NET and C#.',
          'Collaborated with QA and design teams to deliver customer solutions.',
        ],
      },
    ],
  },
  {
    _id: 'resume-projects',
    type: 'projects',
    title: 'Selected Projects',
    items: [
      {
        name: 'RSA GWI Claims Services',
        description:
          'Client: William’s lea tag, UK. Technology: Dotnet Core, C#, microservice, AWS, Python Workflow, SQL Server, SES, SQS, SNS, Pinpoint, Lambda, S3, Step Functions, DynamoDB, Angular 14.',
      },
      {
        name: 'Insurance Claim Management',
        description:
          'Client: Crawford Inspection Services, USA. Technology: Dotnet Core, C#, microservice, SignalR, Azure Notification Hub, Angular, Third Party Integration (Sage Intacct, Auth0, Lawson, Fountain, Hover, NIPR, Schema Builder).',
      },
      {
        name: 'SIMPra ERP System',
        description:
          'Client: IDEMIA, France. Technology: Asp.net MVC4, C#, SQL Server, Nunit, EF Core, SVN, JavaScript, Jira, .Net Core.',
      },
      {
        name: 'Travel Management System (ERP + Accounting)',
        description:
          'Client: Mascot Software, India. Technology: Asp.net MVC3.0, C#, jQuery, JSON, LINQ, JavaScript.',
      },
      {
        name: 'Enterprise Loyalty Services',
        description:
          'Client: BMW, China. Technology: Asp.net MVC5.0, C#, jQuery, Angular, JSON, Entity Framework, REST API, JavaScript, TFS, Jira, Bitbucket, WCF.',
      },
      {
        name: 'Online POS System (ERP + POS)',
        description:
          'Client: Tools4Trade, UK. Technology: Asp.net MVC3.0, C#, jQuery, JSON, LINQ, JavaScript.',
      },
      {
        name: 'ERP + POS & E-Commerce',
        description:
          'Client: UK PLANET TOOLS, UK. Technology: Asp.net MVC3.0, C#, jQuery, JSON, LINQ, JavaScript.',
      },
    ],
  },
  {
    _id: 'resume-education',
    type: 'education',
    title: 'Education',
    items: [
      {
        institution: 'National Institute of Technology',
        degree: 'Bachelor of Technology in Computer Science',
        date: '2015 - 2019',
        details: 'Graduated with honors, focusing on algorithms, databases, and distributed systems.',
      },
    ],
  },
  {
    _id: 'resume-skills',
    type: 'skills',
    title: 'Technical Skills',
    items: [
      {
        category: 'Microsoft .NET',
        values: [
          'Dot Net Core',
          'Asp.net 4.5',
          'MVC 2.0/3.0/4.0',
          '.Net 6',
          'Entity Framework',
          'C#',
          'LINQ',
          'WEB API',
          'Signal-R',
        ],
      },
      {
        category: 'Cloud / Messaging',
        values: [
          'AWS Lambda',
          'API Gateways',
          'SQS',
          'SES',
          'SNS',
          'Step Functions',
          'Pinpoint',
          'Event Bridge',
          'Topics',
          'S3',
          'DynamoDB',
          'CloudFormation',
        ],
      },
      {
        category: 'Platforms / Services',
        values: [
          'Notification Hub',
          'Service Bus',
          'Blob storage',
          'Firebase Notification',
          'Payment Gateways',
          'Sage Intact',
          'Hover 3D Model',
          'Morpho Bio-Metric',
          'NIPR',
          'Auth0',
          'SQL Server',
          'Micro services',
          'Azure App service',
          'Angular 14',
        ],
      },
    ],
  },
  {
    _id: 'resume-certifications',
    type: 'certifications',
    title: 'Certifications',
    items: [
      'MongoDB Certified Developer',
      'AWS Certified Cloud Practitioner',
      'React Developer Professional Certification',
    ],
  },
]

const posts = [
  {
    _id: 'post-1',
    title: 'Designing a Interview Tracker Backend',
    slug: 'interview-tracker-backend',
    summary: 'A deep dive into building a backend to manage interview notes and Q&A content.',
    content:
      'This article explains how to model interview questions, manage company interview summaries, and build a secure admin panel with Express and MongoDB.',
    category: 'Backend',
    tags: ['MongoDB', 'Express', 'API'],
    publishedDate: '2026-04-18',
    status: 'published',
    author: 'Ashwani',
    updatedAt: '2026-04-18',
  },
  {
    _id: 'post-2',
    title: 'Writing a Digital Resume with React',
    slug: 'digital-resume-react',
    summary: 'How to structure and render a modern digital resume app with React and Vite.',
    content:
      'The frontend uses reusable sections, dynamic routing, and a mobile-friendly layout to share career highlights and interview stories.',
    category: 'Frontend',
    tags: ['React', 'Vite', 'UI'],
    publishedDate: '2026-04-18',
    status: 'published',
    author: 'Ashwani',
    updatedAt: '2026-04-18',
  },
]

const interviews = [
  {
    _id: 'interview-1',
    companyName: 'TechLaunch',
    role: 'Frontend Developer',
    date: '2025-09-20',
    location: 'Remote',
    stageDetails: ['Phone screen', 'Coding exercise', 'Final panel interview'],
    outcome: 'Offer received',
    learnings: 'Prepare for component design and state management questions.',
    notes: 'Focus on real-time updates and performance for UI-heavy systems.',
  },
  {
    _id: 'interview-2',
    companyName: 'DataFlow Labs',
    role: 'Backend Engineer',
    date: '2025-12-05',
    location: 'Onsite',
    stageDetails: ['Technical screen', 'System design', 'Culture fit'],
    outcome: 'Interview declined',
    learnings: 'Structure answers clearly when describing API contracts and database schemas.',
    notes: 'Use examples from prior projects when explaining tradeoffs.',
  },
]

const questions = [
  {
    _id: 'question-1',
    question: 'How do you design a scalable interview management API?',
    answer:
      'By modeling interview sessions, candidates, companies, and questions as separate resources and using RESTful routes with pagination and filtering.',
    companyName: 'Internal Panel',
    topic: 'System Design',
    difficulty: 'Medium',
    dateAdded: '2026-04-18',
    published: true,
  },
  {
    _id: 'question-2',
    question: 'What are the benefits of using MongoDB for resume content?',
    answer:
      'MongoDB stores flexible JSON-like documents, making it easy to model resume sections, interview notes, and question/answer sets without rigid SQL schemas.',
    companyName: 'Internal Panel',
    topic: 'Database',
    difficulty: 'Easy',
    dateAdded: '2026-04-18',
    published: true,
  },
]

export default {
  resume,
  posts,
  interviews,
  questions,
}
