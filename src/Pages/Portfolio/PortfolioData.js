import ScraWebsiteThumbnail from "../../Media/Images/ScraWebsiteThumbnail.jpg"
import FinalProject from "../../Media/Images/FinalProject.jpg"
import PortfolioWebsite from "../../Media/Images/PortfolioWebsite.jpg"
import LocationScorer from "../../Media/Images/LocationScorerDiagram.jpg"
import RpiPlantWateringSystemDiagram from "../../Media/Images/RpiPlantWateringSystemDiagram.jpg"
import HadoopArchitecture from "../../Media/Images/HadoopArchitecture.jpg"
import DurhamPropertyConsultants from "../../Media/Images/DurhamPropertyConsultants.jpg"
import StringSearchAlgorithm from "../../Media/Images/StringSearchAlgorithm.jpg"
import QuizAlarmApp from "../../Media/Images/QuizAlarmApp.jpg"
import PalCompiler from "../../Media/Images/PalCompiler.jpg"
import InstantMessagingApp from "../../Media/Images/InstantMessagingApp.jpg"

export default function GetPortfolioData() {
    return [
        {
            tags: ["React", "JavaScript", "NextJS", "CSS", "Firebase", "Sanity.io", "Stripe"],
            image: ScraWebsiteThumbnail,
            imageAlt: "Scra Website main page",
            githubLink: "",
            infoLink: "",
            title: "Scottish Rangers Association Website",
            description:
                "Rebuilt an existing WordPress website into a NextJS application that uses a React frontend which utilises Material-Ui, Sanity.io and Firebase.",
        },
        {
            tags: ["Android", "Java", "Firebase", "University", "Dissertation"],
            image: FinalProject,
            imageAlt: "Android application screenshot of activities",
            githubLink: "https://github.com/Jsheriff20/cognitiveSupportForElderlyApplication",
            infoLink: "",
            title: "Application To Prevent Cognitive Decline In The Elderly",
            description:
                'Developed an Android application with a UI design build for elderly users, the application used social media and cognitively challenging games to answer the question: "Can the use of technology prevent cognitive decline and loneliness in the elderly" as part of my university dissertation.',
        },
        {
            tags: ["C++", "University"],
            image: StringSearchAlgorithm,
            imageAlt: "Boyer Moore Algorithm Code Snippet",
            githubLink: "https://github.com/Jsheriff20/Multi-threadedStringSearchAlgorithmsApplication",
            infoLink: "",
            title: "Multi Threaded String Search Algorithms",
            description:
                "Created a C++ application with two different string search algorithms, then used benchmarking tools to compare the performance of the two algorithms. Developed knowledge of concurrent programming, efficient algorithms and how to benchmark and improve code.",
        },
        {
            tags: ["C#", "University"],
            image: PalCompiler,
            imageAlt: "Compiler code snippet",
            githubLink: "https://github.com/Jsheriff20/PALLanguageCompiler",
            infoLink: "",
            title: "PAL Language Compiler",
            description:
                "During this project I understood the core concepts and low level of how a programming language works and is compiled.",
        },
        {
            tags: ["React", "JavaScript", "NextJS", "CSS"],
            image: PortfolioWebsite,
            imageAlt: "Portfolio Website's page Header",
            githubLink: "https://github.com/Jsheriff20/PortfolioWebsite",
            infoLink: "",
            title: "Portfolio Website",
            description:
                "Developed a simple React website to showcase my achievements, career and projects which has contributed to my exposure of a wide range of languages, frameworks, and technologies. This is a project that will continue to be refactored with the implementation of different features as it will be treated as a playground for new technologies.",
        },
        {
            // tags: ["HTML", "CSS", "Bootstrap"],
            tags: ["HTML", "CSS"],
            image: DurhamPropertyConsultants,
            imageAlt: "Durham Property Consultants Website Header",
            githubLink: "https://github.com/Jsheriff20/Android-Quiz-Alarm",
            infoLink: "",
            title: "Durham Property Consultants' Website",
            description:
                "During the 2019 Christmas break I worked with a client to develop a static website for their planned property business. The website was built using HTML, CSS and Bootstrap. This project was my first time working with a client and creating a production website.",
        },
        {
            tags: ["C#", "University"],
            image: InstantMessagingApp,
            imageAlt: "Secure Instant Messaging App Class Diagram",
            githubLink: "https://github.com/Jsheriff20/SecureWindowsInstantMessagingApplication",
            infoLink: "",
            title: "Secure Windows Instant Messaging Application",
            description:
                "This project introduced  me to the SCRUM Agile Methodology and how to successfully implement it into a project. The project also provided an opportunity to implement my knowledge of building secure systems and exposed me to communication via sockets.",
        },
        {
            tags: ["Android", "Java", "University"],
            image: QuizAlarmApp,
            imageAlt: "Android Alarm Clock application",
            githubLink: "https://github.com/Jsheriff20/Android-Quiz-Alarm",
            infoLink: "",
            title: "Android Quiz Alarm",
            description:
                "First project in Android development where an alarm that required a selected quiz to be completed before turning off to be developed. This project showed me how to best optimise applications and understand the Android activity lifecycle.",
        },
        {
            tags: ["Python", "Tensorflow", "Artificial Intelligence", "University"],
            image: "null",
            imageAlt: "Face showing emotion and AI detected emotion result",
            githubLink: "https://github.com/Jsheriff20/EmotionRecognitionDeepNeuralNetwork-",
            infoLink: "",
            title: "Expression Recognition Using Artificial Intelligence",
            description:
                "Developed a Deep Neural Network in Python using Tensorflow that was trained using thousands of low quality images of people's faces showing different emotions using supervised learning. The finished result achieved an average of 84.63%.",
        },
        {
            tags: ["Artificial Intelligence", "C#", "Firebase", "University"],
            image: LocationScorer,
            imageAlt: "Results from AI scored postcode",
            githubLink: "https://github.com/Jsheriff20/Artificial-Intelligence/tree/master/AI_house_location_scorer",
            infoLink: "",
            title: "Postcode Scorer Using Fuzzy Logic",
            description:
                "Using user inputted postcode and preferences the application used data gathered from APIs to determine a score for the user's selected location/ postcode. Fuzzy logic was used to allow for the imprecise input and API outputs to return a score that could be calculated.",
        },
        {
            tags: ["Raspberry Pi", "Python", "AWS", "C", "HTML", "CSS", "PHP", "Linux", "University"],
            image: RpiPlantWateringSystemDiagram,
            imageAlt: "Plant watering system architecture diagram",
            githubLink: "https://github.com/Jsheriff20/RPiAutoWateringSystem",
            infoLink: "",
            title: "Raspberry Pi Based Automatic Plant Watering System",
            description:
                "Using RPI, hardware such as pumps, breadboards and moisture sensors a setup was made to water the plants when the soil was dry. The system stored data in AWS containers and used subscriptions with a website to display the data and allow for manual altering of thresholds.",
        },
        {
            tags: ["Hadoop", "Spark", "University"],
            image: HadoopArchitecture,
            imageAlt: "Hadoop Cluster architecture",
            githubLink: "",
            infoLink: "",
            title: "Setup Of Hadoop Cluster",
            description:
                "Built a Hadoop cluster using Spark and Hadoop which allowed for an elastic network to support a large scale storage and processing organisation.",
        },
    ]
}
