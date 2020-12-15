const Resume = {
  header: {
    name: 'Rekha Suthar',
    email: 'rekha0suthar@gmail.com',
    phone: '8385916676',
    github: 'https://github.com/rekha0suthar',
    linkedin: 'https://www.linkedin.com/in/rekha0suthar/',
    website: 'https://rekha-portfolio-website.herokuapp.com/',
    city: 'Jodhpur',
    state: 'Rajasthan',
    country: 'India',
  },
  experience: [
    {
      company: 'IIT Madras',
      link: 'https://www.iitm.ac.in/',
      city: 'Chennai',
      state: 'Tamil Nadu',
      position: 'Reactjs developer',
      dateFrom: 'Jan/2020',
      dateTo: 'March/2020',
      primaryWorkBrief: 'Reactjs Projects used HTML5, CSS, JS.',
      impact1: 'Used CSS SASS preprocessor and created various mixins, variables, custom fonts and directives.',
      impact2: 'Used Bootstrap 4 to style the web pages and make the application responsive',
      isVisible: true,
    },
    {
      company: 'NEVRLESS Technology',
      city: 'Noida',
      state: 'Delhi',
      position: 'Front-end Developer',
      dateFrom: 'May/2020',
      dateTo: 'Sep/2020',
      primaryWorkBrief: 'Built Web pages that are more user-interactive using HTML5, CSS3, JavaScript, jQuery and NodeJS.',
      impact1: 'For the data communication between various components used Input, output, directives and shared services.',
      impact2: 'Used Bootstrap 4 to style the web pages and make the application responsive.',
      // impact3: 'Used CSS SASS preprocessor and created various mixins, variables, custom fonts and directives.',
      isVisible: true,
    },
  ],
  education: [
    {
      site: 'Indian Institute of Technology Madras',
      dateFrom: '2019',
      dateTo: '2022',
      studyDegree: 'B.Sc. in Data Science',
      isVisible: true,
    },
  ],
  certification: [
    {
      issuedBy: 'Front-end Library',
      // id: 'freeCodeCamp',
      dateFrom: 'Oct 1,2020',
      dateTo: '',
      isVisible: true,
    },
    {
      issuedBy: 'Js Algorithms and Data Structure',
      // id: 'freeCodeCamp',
      dateFrom: 'Oct 1,2020',
      dateTo: '',
      isVisible: true,
    },
    {
      issuedBy: 'Responsive Web Design',
      // id: 'freeCodeCamp',
      dateFrom: 'Oct 1,2020',
      dateTo: '',
      isVisible: true,
    },
  ],
  technicalSkills: [
    {
      category: 'Development Languages',
      keywords: [
        { name: 'JavaScript', level: 3 },
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 4 },
      ],
      isVisible: true,
    },
    {
      category: 'Technologies',
      keywords: [
        { name: 'MongoDB', level: 2 },
        { name: 'Bootstrap', level: 3 },
        { name: 'Sass', level: 2 },
        { name: 'Express', level: 2 },
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 4 },
        { name: 'JWT', level: 3 },
        { name: 'Redux', level: 2 },
        { name: 'Git', level: 4 },
        { name: 'GitHub', level: 4 },
      ],
      isVisible: true,
    },
  ],
  projects: [
    {
      name: "Movie Search Website",
      link: "http://movie-search-rekha.herokuapp.com/",
      details: [
        "In Search bar you can search any movie and then you can click on any movie and see all details of movie i.g ( Rating, About, Name, etc)"
      ],
      isVisible: true
    },
    {
      name: "Mern Skeleton",
      link: "https://github.com/rekha0suthar/Mern-Skeleton",
      details: [
        "User can sign-in & sign-out and edit own profile.",
        "Users can see other signin users list."
      ],
      isVisible: true
    },
    {
      name: "Team Website",
      link: "https://github.com/rekha0suthar/Team_App",
      details: [
        "Make a Account to signup and sign",
        "Create Project and Add Member",
        "Click on Go to Project",
        "Create Task of current project in which you are and assign to member then you set data of deadline of task"
      ],
      isVisible: true
    },
    {
      name: "MERN Social Media Plateform",
      link: "https://github.com/rekha0suthar/MERN-Social-Media-Plateform",
      details: [
        "User can follow other users and see their posts comment or like their posts.",
        "User can also upload photoes and delete it."
      ],
      isVisible: true
    },
    {
      name: "online-classroom-mern",
      link: "https://github.com/rekha0suthar/online-classroom-mern",
      details: [
        "Teachers can create courses and add lessons in it and publish it.",
        "Students after sign-in can enroll in courses and can check their progresses."
      ],
      isVisible: true
    }
  ],
};

export default Resume;
