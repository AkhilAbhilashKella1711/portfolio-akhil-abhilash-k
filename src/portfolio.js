/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akhil Abhilash Kella",
  title: "Hi, I'm Akhil Abhilash",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs  and some other cool libraries and frameworks, also Deep Learning application developer with good knowledge on python and packages such as numpy, pandas, scipy, mtplotlib, tensorflow, opencv, etc."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1c3AM9EAqfYtG8osIIJvjYUOfXbWdOtLu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AkhilAbhilashKella1711",
  linkedin: "https://www.linkedin.com/in/akhil-abhilash-kella-2a50561b4?original_referer=",
  gmail: "akhilabhilashkella@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Front End Developer and a AI-ML Enthusiast",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop a Machine learning and Deep learning application and deployment using flask"),
    emoji(
      "⚡ Knowledge on data structures and algorithms and in programming languages C, C++, Python"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // {
    //   skillName: "Artificial Intelligence",
    //   fontAwesomeClassname: "fab fa-microchip-ai"
    // }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GMR INSTITUTE OF TECHNOLOGY",
      logo: require("./assets/images/colege.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "May 2019 - April 2023",
      desc: "Performed research on crypto-mining attacks and cursor control system using eye and face gestures, Published 1 paper",
      descBullets: [
        "Completed projects on attendance system using face detection using YOLO/Facenet",
        "Completed Project Cursor control & Speech-to-text System for paralyzed people",
        "Attended Smart India Hackathon Finals held at IIT Kanpur on Overloaded vehicle checking project",
        "Stood Second in project design contest",
        "Participated in many college level project presentations and received appreciations on the project and delivery about the project"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI-ML-DL",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Structures",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Trainee",
      company: "revidd",
      companylogo: require("./assets/images/company.png"),
      date: "June 2020 – Present",
      desc: "developed an UI for a video calling application and functionalities such as video sharing, recording etc. integrated with a web application for video entertainment. Worked alongside in Devops and did server setup for redis, mongodb, elasticsearch,etc. and maintaining the servers",
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME THAT I HAVE CREATER OR CO-WORKED TO CREATE",
  projects: [
    {
      image: require("./assets/images/github.png"),
      projectName: "Smart Attendance System by face Detection using YOLO",
      projectDesc: "This application is used to generate attendance sheet using face detection of the person in the room. Marking of attendance containing 70- 80 students using a single photo through YOLO and generation of customized dataset for face detection",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AkhilAbhilashKella1711/Smart-Attendance-System-using-yolo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "A deep learning approach for cursor movement based on eye gaze and face gestures for paralyzed people",
      projectDesc: "An Open CV model to detect face movement, gestures and eye gaze to control cursor movement and clicking events for paralyzed people to use system.",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/AkhilAbhilashKella1711/cursor-control-paralyzed-people"
        }
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "Chess game using Python",
      projectDesc: "A chess game which follows the commands from user and follows all the chessrules. A chess game with 2 players which is played with a defined input format to be provided to make moves on board.",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/AkhilAbhilashKella1711/chess_game"
        }
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "Hospital Management System",
      projectDesc: "PL/SQL commands for maintaining and management of hospital database and perform all basic operations on tables",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/AkhilAbhilashKella1711/hospital-management-system"
        }
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "Flappy Bird",
      projectDesc: "A simple flappy bird game with random obstacles and works on user inputs",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/AkhilAbhilashKella1711/flappy-bird"
        }
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "A Simple Calculator ",
      projectDesc: "A simple calculator that performs basic operations using HTML,CSS and JS",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/AkhilAbhilashKella1711/basic-calculator"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure AI Engineer Associate",
      subtitle:
        "Completed the microsoft Azire AI Engineer Associate exam and recieved certification",
      image: require("./assets/images/azureeng.png"),
      imageAlt: "Azure AI Engineer Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12FRwkCBeDHgm8Nb8FL3EI8fZi-zikCf5/view?usp=share_link"
        },
      ]
    },
    {
      title: "AWS cloud Fundamentals",
      subtitle:
        "AWS Clound fundamentals certification",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Cloud Fundamentals",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://drive.google.com/file/d/12T2uwyHx3KMbQjTWO_q7M3fuUKjW5_fr/view?usp=share_link"
        }
      ]
    },
    {
      title: "NSE 1",
      subtitle:
        "NSE ! Certified Cyber security ",
      image: require("./assets/images/nse.png"),
      imageAlt: "NSE1",
      footerLink: [
      ]
    },
    {
      title: "Smart India Hackathon 2022 Finals",
      subtitle:
        "Appeared for Smart India Hackathon 2022 Finals",
      image: require("./assets/images/sih.png"),
      imageAlt: "SIH",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://drive.google.com/file/d/12_bcplT6HJI18I0-jD8D6oC5raPCW6SG/view?usp=share_link"
        }
      ]
    },
    {
      title: "Project Design Contest",
      subtitle:
        "Stood second at stepcone GMRIT, 2023",
      image: require("./assets/images/stepcone.png"),
      imageAlt: "Stepcone",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://drive.google.com/file/d/12_bcplT6HJI18I0-jD8D6oC5raPCW6SG/view?usp=share_link"
        }
      ]
    },
    {
      title: "Cisco Introduction to cyber security",
      subtitle:
        "Completed the Cisco Introduction to cyber security certification",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Introduction to cyber security",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12p73XBOjMiDv41tOAF1-FBNrh97yDKTU/view?usp=share_link"
        },
      ]
    },
    {
      title: "Cisco introduction to iot",
      subtitle:
        "Completed the Cisco introduction to iot certification",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco introduction to iot",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12rQZ1RRiVcddO4t9vqqeuEKDkL97xawX/view?usp=share_link"
        },
      ]
    },
    {
      title: "Wipro Nasscom introduction to Atrificial Intelligence",
      subtitle:
        "Completed the Wipro Nasscom introduction to Atrificial Intelligence certification",
      image: require("./assets/images/skillup.png"),
      imageAlt: "Wipro Nasscom introduction to Atrificial Intelligence",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12ft0s73KSjhIXJCIoWr44BvVUPymW8zq/view?usp=share_link"
        },
      ]
    },
    {
      title: "GDSC WoW",
      subtitle:
        "Participated GDSC WoW",
      image: require("./assets/images/gdsc.png"),
      imageAlt: "GDSC WoW",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/132ASl2Tt3mk5dseFozli7Pofu9pb4oDC/view?usp=share_link"
        },
      ]
    },
    {
      title: "Web Development Master Class",
      subtitle: "Completed udemy certification on web development",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Web Development Master Class",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/12_bcplT6HJI18I0-jD8D6oC5raPCW6SG/view?usp=share_link"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8247435669",
  email_address: "akhilabhilashkella@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
