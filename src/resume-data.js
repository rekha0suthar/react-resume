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
            primaryWorkBrief: 'Reactjs Projects used HTML5, CSS, JS.',
            impact1: 'Used CSS SASS preprocessor and created various mixins, variables, custom fonts and directives.',
            // impact2: 'Used Bootstrap 4 to style the web pages and make the application responsive',
            isVisible: true,
        },
        {
            company: 'NEVRLESS Technology',
            city: 'Noida',
            state: 'Delhi',
            position: 'Front-end Developer Interns',
            primaryWorkBrief: 'Built Web pages that are more user-interactive using HTML5, CSS3, JavaScript, jQuery and NodeJS.',
            impact1: 'For the data communication between various components used Input, output, directives and shared services.',
            impact2: 'Used Bootstrap 4 to style the web pages and make the application responsive.',
            // impact3: 'Used CSS SASS preprocessor and created various mixins, variables, custom fonts and directives.',
            isVisible: true,
        },
        {
            company: 'NEVRLESS Technology',
            city: 'Noida',
            state: 'Delhi',
            position: 'Front-end Developer',
            primaryWorkBrief: 'Expertise in developing web pages using HTML5, CSS3, MVC, SASS, LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML. Good understanding of Document Object Model (DOM) and DOM Functions.',
            impact1: 'Created React JS for reusable components (multi-field form elements), background file uploads.',
            impact2: 'Evaluate demo and select new Javascript technologies and development patterns to be leveraged across the team.',
            impact3: 'Extensive usage of Javascript, React JS, Node JS, Bootstrap, JSON, HTML4/5, CSS2/3.',
            isVisible: true,
        },
    ],
    education: [
        {
            site: '10th Standard',
            studyDegree: 'Percentage:- 94.83%',
            isVisible: true,
        },
         {
            site: '12th Standard',
            studyDegree: 'Stream:- Mathematics, Percentage:- 87.80%',
            isVisible: true,
        },
         {
            site: 'Indian Institute of Technology Madras',
            studyDegree: 'B.Sc. in Data Science',
            isVisible: true,
        },
    ],
    certification: [
        {
            issuedBy: 'Front-end Library',
            isVisible: true,
        },
        {
            issuedBy: 'Js Algorithms and Data Structure',
            isVisible: true,
        },
        {
            issuedBy: 'Responsive Web Design',
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
                // { name: 'JWT', level: 3 },
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
                "In Search bar we can search any movie and get similiar movies.",
                "We can click on any movie and see all details of movie i.g ( Rating, Poster of Movie, About, Name, etc)."
            ],
            isVisible: true
        },
        // {
        //     name: "Mern Skeleton",
        //     link: "https://github.com/rekha0suthar/Mern-Skeleton",
        //     details: [
        //         "Users can sign-in & sign-out and edit own profile.",
        //         "Users can see other signin users list."
        //     ],
        //     isVisible: true
        // },
        {
            name: "BMI Calculator",
            link: "https://bmi-calculator-rekha.herokuapp.com",
            details: [
                "In this project, we have to give input values of weight and height.",
                "After that we get value of BMI calculation in card with input values and date in bottom of the page.",
                "Along with output value we get graph for relative BMI calculation."
            ],
            isVisible: true
        },
        {
            name: "MERN Social Media Plateform",
            link: "https://github.com/rekha0suthar/MERN-Social-Media-Plateform",
            details: [
                "Users can follow other users and see their posts comment or like their posts.",
                "Users can also upload photoes and delete it."
            ],
            isVisible: true
        },
        {
            name: "online-classroom-mern",
            link: "https://github.com/rekha0suthar/online-classroom-mern",
            details: [
                "In this project, first we check that the user is teacher or a student.",
                "Teachers can create courses and add lessons in it after complete course they can publish it.",
                "Teachers can see how many students enroll in their each course.",
                "Students after sign-in can enroll in courses and can check their progresses and mark courses completed after complete courses."
            ],
            isVisible: true
        }
    ],
};

export default Resume;
