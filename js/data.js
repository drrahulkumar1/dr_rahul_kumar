const portfolioData = {
    personalInfo: {
        name: "Dr. Rahul Kumar",
        title: "Associate Professor (Computer Science & Engineering)",
        tagline: "Researcher in Machine Learning, Federated Learning & Data Systems",
        location: "Udaipur, Rajasthan, India",
        emails: ["rahulkumar1680@gmail.com", "rahul.cse397@gmail.com"],
        phones: ["+91-9887855482", "+91-8209088109"],
        detailedInfo: {
            "Father's Name": "Ram Naresh Singh",
            "Mother's Name": "Phool Badan Devi",
            "Permanent Address": "At. Post: - Ghataro, Tq:-Lalganj, Dist.: - Vaishali, Bihar, Pin-844119",
            "Date of Birth": "10th-December-1990",
            "Marital Status": "Married",
            "Nationality": "Indian",
            "Language Known": "English, Hindi"
        },
        about: "Accomplished academician and active researcher with over 11 years of teaching experience, seeking to contribute through high-impact teaching, curriculum innovation, and meaningful research while fostering a dynamic, student-centered learning environment.",
        profiles: [
            { name: "ORCID", url: "https://orcid.org/0009-0006-9020-9095", icon: "fab fa-orcid" },
            { name: "Google Scholar", url: "https://scholar.google.com/citations?user=W_TENYIAAAAJ&hl=en", icon: "fas fa-graduation-cap" },
            { name: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=58541009000", icon: "fas fa-book-open" },
            { name: "Web of Science", url: "https://www.webofscience.com/wos/author/record/LKK-7522-2024", icon: "fas fa-globe" },
            { name: "Vidwan", url: "https://vidwan.inflibnet.ac.in/profile/573311", icon: "fas fa-id-card" },
            { name: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Rahul-Kumar/2275941219", icon: "fas fa-brain" },
            { name: "ResearchGate", url: "https://www.researchgate.net/profile/Rahul-Kumar-859?ev=hdr_xprf", icon: "fab fa-researchgate" }
        ]
    },
    education: [
        {
            degree: "Post-Doctoral Fellowship",
            field: "Computer Science & Engineering",
            institution: "National Kaohsiung University of Science and Technology (Taiwan)",
            topic: "Privacy-Preserving Feature Selection and Extraction for Federated Machine Learning in Real-World Applications",
            duration: "Expected Feb 2026"
        },
        {
            degree: "Ph.D.",
            field: "Computer Science & Engineering",
            institution: "Dr. K.N. Modi University",
            topic: "Optimizing Fuzzy Rough Feature Selection Using Threshold Values",
            duration: "2019 – 2022"
        },
        {
            degree: "M.Tech",
            field: "Computer Science & Engineering",
            institution: "Suresh Gyan Vihar University",
            score: "82.3%",
            duration: "2012 – 2014"
        },
        {
            degree: "B.Tech",
            field: "Computer Science & Engineering",
            institution: "ICFAI University",
            score: "70.07%",
            duration: "2008 – 2012"
        }
    ],
    experience: [
        {
            role: "Associate Professor",
            institution: "Sir Padampat Singhania University",
            department: "Faculty of Computing and Informatics",
            duration: "06 June 2025 - Present"
        },
        {
            role: "Associate Professor",
            institution: "Amity University",
            department: "Department of Computer Science and Engineering",
            duration: "04 December 2023 - 04 June 2025"
        },
        {
            role: "Assistant Professor",
            institution: "Koneru Lakshmaiah Education Foundation (KL University)",
            department: "Department of Computer Science and Engineering",
            duration: "09 May 2023 - 02 December 2023"
        },
        {
            role: "Assistant Professor & Deputy Controller of Examinations",
            institution: "Dr. K.N. Modi University",
            department: "Department of Computer Science and Engineering",
            duration: "26 December 2018 - 03 May 2023"
        },
        {
            role: "Assistant Professor",
            institution: "NGF College of Engineering and Technology",
            department: "Department of Computer Science and Engineering",
            duration: "05 August 2017 - 25 December 2018"
        },
        {
            role: "Assistant Professor",
            institution: "Shekhawati Institute of Engineering and Technology",
            department: "Department of Computer Science and Engineering",
            duration: "05 July 2014 - 03 August 2017"
        }
    ],
    skills: ["Python", "Machine Learning", "Federated Learning", "DBMS (Oracle, MySQL)", "Computer Networks", "Operating Systems"],
    roles: [
        "Deputy Controller of Examinations",
        "Ph.D. Co-Coordinator",
        "External Examiner / Reviewer",
        "IEEE Reviewer",
        "Project Coordinator"
    ],
    patents: [
        { 
            title: "An Apparatus for Device-Based Skin Lesion Analysis Using Ensemble Learning", 
            details: "Patent Application, Application No.: 202511133315 A, filed on 30 December 2025 and published on 06 February 2026 in the Patent Office Journal, India.",
            year: "2026",
            type: "Patent"
        },
        { 
            title: "Object Classification for Remotely Sensed Images Using Enhanced CNN Model", 
            details: "Patent Office Journal, India, Application No.: 202411041144, published on 07 June 2024.",
            year: "2024",
            type: "Patent"
        },
        { 
            title: "An Integrated Solution for Smart Agriculture Monitoring System", 
            details: "Patent Office Journal, India, Application No.: 202411053627, published on 26 July 2024.",
            year: "2024",
            type: "Patent"
        },
        { 
            title: "Instrument Used for Detection of Diabetic Neuropathy", 
            details: "UK Design Registration, Design No.: 6306542, granted on 08 September 2023.",
            year: "2023",
            type: "Patent"
        },
        { 
            title: "Combating Greenwashing with AI: Algorithmic Detection of Unsustainable Marketing Practices in Augmented Reality and Virtual Reality", 
            details: "Application No.: 21236/2024-CO/L, filed/published on 04 July 2024.",
            year: "2024",
            type: "Copyright"
        }
    ],
    achievements: [
        "Successfully completed NPTEL Online Certification in Blockchain Architecture, Design, and Use Cases conducted by Indian Institute of Technology Kharagpur in November 2018.",
        "Successfully completed NPTEL Online Certification in Database Management Systems conducted by Indian Institute of Technology Kharagpur on 02 May 2018.",
        "Published an article titled \"Real-Time Toll Rate Determination Using Image Processing and Network Database\" in a leading daily newspaper on 12 May 2014.",
        "Organizing Committee Member for IEEE Student Chapter at Amity University"
    ],
    publications: [
        {
            type: "journal",
            title: "Federated Learning for Privacy-Preserving Healthcare Analytics: A Framework for Multi-Hospital Collaboration",
            authors: "Rahul Kumar, J. K. Chaudhary, Mahadev, R. Sinha, and A. Kumar",
            venue: "International Journal of Intelligent Systems and Applications (IJISA)",
            year: "2026 (Accepted)",
            highlight: false,
            indexing: "Scopus Indexed"
        },
        {
            type: "journal",
            title: "Lightweight Federated NLP: A TF-IDF and FedProx Powered Model for Privacy-First Text Classification",
            authors: "R. Sinha, Rahul Kumar, A. Kumar, J. K. Chaudhary, and Mahadev",
            venue: "International Journal of Modern Education and Computer Science (IJMECS)",
            year: "2026 (Accepted)",
            highlight: false,
            indexing: "Scopus Indexed"
        },
        {
            type: "conference",
            title: "Optimizing Deep Learning Models for Real-Time Edge Computing Applications",
            authors: "M. Dev, A. Kumar, Rahul Kumar, A. Kumar, and J. Chaudhary",
            venue: "Proceedings of the International Conference on Intelligent and Innovative Practices in Engineering & Management (ICIIPEM)",
            year: "2025 (Accepted)",
            highlight: false,
            indexing: "IEEE Conference"
        },
        {
            type: "conference",
            title: "Intelligent Optimization of Deep Learning Models for Real-Time Decision Systems",
            authors: "A. Kumar, Rahul Kumar, A. Kumar, J. K. Chaudhary, and M. Mahadev",
            venue: "Proceedings of the International Conference on Intelligent and Innovative Practices in Engineering & Management (ICIIPEM)",
            year: "2025 (Accepted)",
            highlight: false,
            indexing: "IEEE Conference"
        },
        {
            type: "conference",
            title: "Optimizing Battery Energy Arbitrage: A Deep Reinforcement Learning Approach with Hybrid CNN-LSTM Price Forecasting",
            authors: "Rahul Kumar, A. Kumar, J. Moolchandani, A. Sen, R. Sinha, and C. Goswami",
            venue: "Proceedings of the International Conference on Computational Intelligence and Autonomous Systems (ICIAS)",
            year: "2025 (Accepted)",
            highlight: false,
            indexing: "Taylor & Francis Conference"
        },
        {
            type: "journal",
            title: "A Lightweight Attention-Driven Deep Learning Framework for Text-Based Psychological Stress Detection",
            authors: "A. Kumar, R. Sinha, J. K. Chaudhary, Mahadev, and R. Kumar",
            venue: "International Journal of Information Engineering and Electronic Business (IJIEEB)",
            year: "2026 (Under Review)",
            highlight: false,
            indexing: "Scopus Indexed"
        },
        {
            type: "journal",
            title: "A Multi-Domain Federated Learning Architecture with Secure Feature Optimization",
            authors: "R. Kumar, C.-S. Shieh, and P. Chakrabarti",
            venue: "International Journal of Intelligent Systems and Applications (IJISA)",
            year: "2026 (Under Review)",
            highlight: false,
            indexing: "Scopus Indexed"
        },
        {
            type: "journal",
            title: "A Hybrid Attention-Based CNN-BiLSTM and Random Forest Ensemble for Highly Accurate Ovarian Cancer Detection Using Serum Biomarkers",
            authors: "M. Mahadev, A. Kumar, R. Sinha, R. Kumar, and J. K. Chaudhary",
            venue: "Pattern Recognition and Image Analysis: Advances in Mathematical Theory and Applications",
            year: "Under Review",
            highlight: false,
            indexing: "Scopus Indexed"
        },
        {
            type: "journal",
            title: "Hybrid Approach of Cotton Disease Detection for Enhanced Crop Health and Yield",
            authors: "Kumar, Rahul, et al.",
            venue: "IEEE Access",
            year: "2024",
            highlight: true,
            indexing: "SCI-Q1"
        },
        {
            type: "journal",
            title: "An Intelligent Human-Centric System to Diagnose Breast Cancer Using Machine Learning and Optimized Feature Selection Techniques",
            authors: "Kumar, Ashok, et al. and Rahul Kumar",
            venue: "Transactions on Emerging Telecommunications Technologies",
            year: "2024",
            highlight: true,
            indexing: "SCI-Q2"
        },
        {
            type: "journal",
            title: "Distance-Based Unsupervised Local Outlier Detection: Based Values Analysis to Improve Outlier Detection Using Machine Learning",
            authors: "Gupta, Atul Kumar, Rahul Kumar, et al.",
            venue: "IET Communications",
            year: "2025",
            highlight: true,
            indexing: "SCI-Q2"
        },
        {
            type: "journal",
            title: "Prediction and Segmentation of Heart Disease Using Boosting-Based Machine Learning Algorithms",
            authors: "Kumar, A., et al., Kumar, R.",
            venue: "Journal of Neonatal Surgery",
            year: "2025",
            highlight: false,
            indexing: "Scopus-Q4"
        },
        {
            type: "journal",
            title: "An Optimal Filter Selection on Grey Scale Image for De-Noising Using Fuzzy Technique",
            authors: "Kumar, S., et al., Kumar, R.",
            venue: "International Journal of Intelligent Systems and Applications in Engineering",
            year: "2024",
            highlight: false,
            indexing: "Scopus-Q4"
        },
        {
            type: "journal",
            title: "MHID: Malware Detection Using Hybrid Honeypot and Intrusion Detection System",
            authors: "Singh, Vinay Kumar, et al., Rahul Kumar",
            venue: "Communications on Applied Nonlinear Analysis",
            year: "2024",
            highlight: false,
            indexing: "Scopus-Q4"
        },
        {
            type: "conference",
            title: "Privacy-Preserving Federated Learning in Healthcare, E-Commerce, and Finance: A Taxonomy of Security Threats and Mitigation Strategies",
            authors: "Rahul Kumar, et al.",
            venue: "ICETSF-2025, Amravati",
            year: "2025",
            highlight: false,
            indexing: "Scopus"
        },
        {
            type: "conference",
            title: "AI-Assisted Resource Allocation in 5G/6G Networks",
            authors: "Rahul Kumar, et al.",
            venue: "OPTIMA 2025, Tashkent",
            year: "2025",
            highlight: false,
            indexing: "IEEE"
        },
        {
            type: "conference",
            title: "Photonic-Enhanced Fiber-Optic Sensor Networks for Large-Scale IoT Deployments",
            authors: "J. K. Chaudhary, et al., Rahul Kumar",
            venue: "OPTIMA 2025, Tashkent",
            year: "2025",
            highlight: false,
            indexing: "IEEE"
        },
        {
            type: "conference",
            title: "Machine Learning-Based Prediction of Gold Prices Using Economic Indicators",
            authors: "Rahul Kumar, et al.",
            venue: "SMART 2024, IEEE",
            year: "2024",
            highlight: false,
            indexing: "Scopus"
        },
        {
            type: "journal",
            title: "Real-Time Toll Rate Determination Using Image Processing and Network Database",
            authors: "Kumar, Rahul, et al.",
            venue: "International Journal of Digital Applications and Contemporary Research",
            year: "2014",
            highlight: false,
            indexing: "UGC"
        },
         {
            type: "journal",
            title: "Optimizing Fuzzy Rough Feature Selection Using Threshold Values",
            authors: "Kumar, R., et al.",
            venue: "Journal of the Asiatic Society of Mumbai",
            year: "2022",
            highlight: false,
            indexing: "UGC CARE"
        }
    ]
};
