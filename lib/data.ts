import React from "react";
import microsoft from "@/public/CertificationsImage/microsoft.png";
import hashicorp from "@/public/CertificationsImage/hashicorp_logo.jpg";
import amazon from "@/public/CertificationsImage/amazon_logo.jpg";
import comptia_logo from "@/public/CertificationsImage/comptia_logo.jpg";
import google from "@/public/CertificationsImage/google.jpg";
import cloud_native from "@/public/CertificationsImage/cloud_native_computing_foundation_logo.jpg";
import aws_logo from "@/public/CertificationsImage/aws_logo.jpg";
import hardvdx_logo from "@/public/CertificationsImage/harvardx_logo.jpg";

import {
  FaUserGroup,
  FaUsers,
  FaUsersGear,
  FaUsersLine,
} from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export const education = [
  {
    degree: "Masters in Computer Applications (2001 - 2004)",
    university: "Andhra University, Visakhapatnam, India.",
    location: "Detroit, MI",
    logo: "/wayne_state_university_logo.jpeg",
  },
  {
    degree: "Bachelors in Computer Science (1998 - 2001)",
    university: "Andhra University, Visakhapatnam, India.",
    location: "Kommadi, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048",
    logo: "/SriChaitanyaEngineeringCollege.avif",
  },
];

export const articles = [
  {
    image: "/khaleej-times.svg",
    conferenceName: "IEEE Power and Energy Society (PES)",
    shortName: "ICISAS 2025",
    publisher: "IEEE",
    date: "September 12, 2024",
    link: "https://nyweekly.com/tech/rahul-vadisetty-and-anand-polamarasetti-smart-city-development/",
    mediaLink:
      "https://www.khaleejtimes.com/kt-network/icisas-2025-dubai-conference-explores-advancements-in-ai-cloud-security-and-ethical-technology",
  },
  {
    image: "/freePress.avif",
    conferenceName:
      "Information and Communication Technology in Business, Industry and Government (ICTBIG-2024)",
    shortName: "ICEC 2025",
    publisher: "IEEE",
    date: "December 13-14, 2024",
    link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
    mediaLink:
      " https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference",
  },
  {
    image: "/hans_india.png",
    conferenceName:
      "International Institute of Computer Science Professional Association (IICSPA)",
    shortName: "OCIT 2025",
    publisher: "IICSPA",
    date: "September 13, 2024",
    link: "http://iicspa.org",
    mediaLink:
      "https://londoninsider.co.uk/iicspa-announces-fourteen-fellows-for-2024/",
  },
  {
    image: "/logon24.webp",
    conferenceName:
      "Marquis Top Science, Technology and Engineering Professionals",
    shortName: "DACS 2025",
    publisher: "Marquis",
    date: "May 29, 2024",
    link: "https://marquistopengineers.com/",
    mediaLink:
      "https://marquistopengineers.com/2024/05/29/anand-polamarasetti/",
  },
  {
    image: "/logon24.webp",
    shortName: "Ayushman Hospital",
    conferenceName: "ICDACS 2024",
    publisher: "Taylor and Francis",
    date: "December 20-22, 2024",
    link: "https://icdacs.github.io/",
    mediaLink:
      "https://news24online.com/information/ai-innovation-in-healthcare-vadisetty-polamarasetti-win-best-paper-award-at-springer-dacs-2024/502405/",
  },
  {
    image: "/India-header-logo.svg",
    conferenceName: "ICEC 2024",
    shortName: "ICTBIG",
    publisher: "IEEE",
    date: "November 23–25, 2024",
    link: "https://icecconf.org/icec_2024-2/",
    mediaLink:
      "https://www.india.com/business/anand-polamarasetti-ai-ml-and-cybersecurity-visionary-wins-best-paper-award-at-ieee-icec-2024-conference-7590538/",
  },
];

export const memberships = [
  {
    title: "Soft Computing",
    role: "Distinguished Fellow Membership of the Soft Computing.",
    icon: FaUsers,
    link: "https://scrs.in/",
  },
  {
    title: "Institute of Electrical and Electronics Engineers",
    role: "Senior Professional Membership.",
    icon: LuUsers,
    link: "https://www.ieee.org/",
  },
  {
    title: "IICSPA",
    role: "Sr fellow membership IICSPA.",
    icon: FaUsersLine,
    link: "https://www.iicspa.org/",
  },
];

export const experiences = [
  {
    role: "Senior Computer Systems Architect (Cloud/DevOps)",
    company: "Booz Allen Hamilton · Contract (via Relis LLC)",
    duration: "Sep 2020 - Present · 4 yrs 7 months",
  },
  {
    role: "Cloud Architect/Engineer",
    company: "I-9 Technologies · Full-time",
    duration: "Jul 2014 - Aug 2020 · 6 yrs 2 months",
  },
  {
    role: "Automation Analyst",
    company: "Thomson Reuters · Full-time",
    duration: "May 2010 - Jan 2014 · 3 yrs 9 months",
  },
  {
    role: "Technology Consultant",
    company: "Thomson Reuters · Contract (via Shiksha Planet)",
    duration: "Sep 2009 - Apr 2010 · 8 months",
  },
  {
    role: "Sr Software Engineer",
    company: "Pragmatic IT Solutions · Full-time",
    duration: "May 2008 - Aug 2009 · 1 yr 4 months",
  },
  {
    role: "Software Engineer",
    company: "Cyient · Full-time",
    duration: "Jan 2006 - Apr 2008 · 2 yrs 4 months",
  },
];

export const certifications = [
  {
    image: hardvdx_logo,
    title: "CS50AI: CS50's Introduction to Artificial Intelligence with Python",
    altText: " Introduction to Artificial Intelligence with Python",
    credentialLink:
      "https://courses.edx.org/certificates/373b180148df412189c862f391e350b5?_gl=1*1sxovli*_ga*ODI4MjIxNDkuMTY3OTI1NDcyMw..*_ga_D3KS4KMDT0*MTcwNDM0OTI2My44NC4wLjE3MDQzNDkyNjMuNjAuMC4w",
  },
  {
    image: aws_logo,
    title: "AWS Certified DevOps Engineer - Professional",
    altText: "AWS",
    credentialLink:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/",
  },
  {
    image: aws_logo,
    title: "AWS Certified Solutions Architect - Professional",
    altText: "AWS",
    credentialLink:
      "https://www.credly.com/badges/b36d2453-9e62-4d68-b922-748094ccd756",
  },
  {
    image: microsoft,
    title: "Microsoft Certified: Azure Fundamentals",
    altText: "Microsoft",
    credentialLink: "#",
  },
];

export const awards = [
  // {
  //   conferenceName: "ICISAS 2025",
  //   awardName: "Best Presentation Award",
  //   image: "/best_ppt.jpg",
  //   date: "February 22-23,2025",
  //   publisher: "Taylor and Francis",
  //   link: "https://conference.curtindubai.ac.ae/icisas-2025/",
  //   mediaLink:
  //     "https://www.khaleejtimes.com/kt-network/icisas-2025-dubai-conference-explores-advancements-in-ai-cloud-security-and-ethical-technology",
  // },
  {
    conferenceName: "ICEC 2024",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "November 23–25, 2024",
    publisher: "Taylor and Francis",
    link: "https://icecconf.org/icec_2024-2/",
    mediaLink:
      " https://www.india.com/business/anand-polamarasetti-ai-ml-and-cybersecurity-visionary-wins-best-paper-award-at-ieee-icec-2024-conference-7590538/",
  },
  // {
  //   conferenceName: "OCIT 2024",
  //   awardName: "Best Paper Award",
  //   image: "/best_paper.jpg",
  //   date: "December 12-14, 2024",
  //   publisher: "Taylor and Francis",
  //   link: "https://www.oits-icit.org/oits-archieve/OCIT_2024_Website/",
  //   mediaLink:
  //     "https://www.thehansindia.com/business/rahul-vadisetty-harnessing-ai-to-revolutionize-predictive-healthcare-932304",
  // },
  {
    conferenceName: "ICDACS 2024",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "December 20-22, 2024",
    publisher: "Taylor and Francis",
    link: "https://icdacs.github.io/",
    mediaLink:
      "https://news24online.com/information/ai-innovation-in-healthcare-vadisetty-polamarasetti-win-best-paper-award-at-springer-dacs-2024/502405/",
  },
  {
    image: "/best_paper.jpg",
    conferenceName:
      "International Conference On ICTBIG (IEEE Computer Society Chapter & IEEE Madhya Pradesh Section.)",
    awardName: "Best Paper Award",
    date: "December 12-14, 2024",
    link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
    mediaLink:
      "https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference/",
  },
  {
    image: "/iaia-big.png",
    conferenceName: "IAIA Award",
    awardName: "IAIA AI Award",
    date: "2023",
    publisher: "Taylor and Francis",
    link: "https://www.iaiawards.com/",
    mediaLink: " https://www.iaiawards.com/team-1/anand-polamarasetti",
  },
];

export const patents = [
  {
    year: "2025",
    category: "Canada Copyright",
    items: [
      {
        name: "Artificial Intelligence and Machine Learning System for Risk Assessment and Early Prediction of Lung and Heart Cancer",
      },
    ],
  },
  {
    category: "UK Patents",
    year: "2024",
    items: [
      {
        name: "AI-based Firewall device for Network Security",
      },
      {
        name: "AI-Based Ransomware Detection device",
      },
      {
        name: "AI-Driven Predictive Maintenance Device for Machinery",
      },
      {
        name: "AI-Powered Autonomous Drone for Surveillance",
      },
    ],
  },
  // {
  //   category: "Indian Patent",
  //   year: "2024",
  //   items: [
  //     {
  //       name: "ARTIFICIAL INTELLIGENCE (AI) BASED CLOUD SECURITY DETECTING DEVICE",
  //     },
  //     { name: "AI BASED CYBER SECURITY DATA ANALYTIC DEVICE" },
  //   ],
  // },
  // {
  //   category: "Canada Copyright",
  //   year: "2024",
  //   items: [
  //     { name: "AI-DRIVEN NETWORK OPTIMIZATION FOR 6G WIRELESS SYSTEMS" },
  //     { name: "REAL-TIME CYBER ATTACK MITIGATION USING ML ALGORITHMS" },
  //   ],
  // },
  // {
  //   category: "UK Patent",
  //   year: "2024",
  //   items: [
  //     { name: "AI based Intrusion Alert device" },
  //     {
  //       name: "AI based comprehensive data encryption and decryption device",
  //     },
  //   ],
  // },
];

export const books = [
  {
    title: "Amazon Book",
    publisher: "Amazon",
    link: "https://www.amazon.com/dp/B0DKB684GM/ref=sr_1_1?crid=S8FSNNA0ZHX3&dib=eyJ2IjoiMSJ9.JxKLN7gbovVI2LNeKc-B_Q.qrN7ZGNgzrCH1BjFcWESu9Lj4Kv5ttJtDIiZKe17sns&dib_tag=se&keywords=ASIN%3A+B0DKB684GM&qid=1729353415&sprefix=asin+b0dkb684gm%2Caps%2C90&sr=8-1",
  },
  {
    title: "AI for CHAT GPT TOOLS for Teaching and Learning Process",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789173080859/",
  },
  {
    title: "CHATGPT FOR LESSON PLANNING - Book Chapter",
    publisher: "Redshine Publications Sweden",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&authuser=1&citation_for_view=zLRrw_wAAAAJ:M7yex6snE4oC",
  },
  {
    title: "CHATGPT FOR STUDENT SUPPORT SYSTEMS - Book Chapter",
    publisher: "Redshine Publications Sweden",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&authuser=1&citation_for_view=zLRrw_wAAAAJ:kz9GbA2Ns4gC",
  },
  {
    title:
      "Contemporary Issues in Science, Computer Science, Engineering and Technology - Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789173080927/?srsltid=AfmBOoqalvWzLZrAugTwD3mfY5wT4Rb9xEiKs5vrc9TvmRJebbjg6fcL",
  },
  {
    title:
      "Introduction and Importance of Artificial Intelligence (AI) - Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789141001053/?srsltid=AfmBOorinvMMuN7auUMFoc2cdKJ2FKN9fy6SprA2RQF_EEVp55ElUskT",
  },
  {
    title:
      "Artificial Intelligence in Education: Innovations and Applications - Associate Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789141001138/?srsltid=AfmBOorWZpF69TY95lB9uFWfJK9MyEdDEyl3zjH0NglA-q0_mTFo7t18",
  },
];

export const judgeData = [
  {
    conferenceName: "SN Computer Science (Springer Journal)",
    topicName:
      "An Insight into Multi-Criteria Decision Methods for the Selection of Robot: A Comprehensive Review",
    conferenceSortName: "SN Computer Science (Springer Journal)",
    event: "SN Computer Science (Springer Journal)",
    date: "Oct 12, 2024",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "SN Computer Science (Springer Journal)",
    topicName:
      "Enhancing Multicriteria Recommender Systems with Adaptive Attention Mechanisms for Improved User Preference Discovery",
    conferenceSortName: "SN Computer Science (Springer Journal)",
    event: "SN Computer Science (Springer Journal)",
    date: "July 26, 2024",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "SN Computer Science (Springer Journal)",
    topicName:
      "Innovative Machine Learning Algorithms for Early Detection of Health Anomalies in IoT Environments",
    conferenceSortName: "SN Computer Science (Springer Journal)",
    event: "SN Computer Science (Springer Journal)",
    date: "May 29, 2024",
    role: "Journal Peer Review",
  },
  // {
  //   conferenceName: "IEEE Transactions on Network and Service Management",
  //   topicName:
  //     "GT4MAGR: Leveraging Graph Transformer and Multi-Agent Deep Reinforcement Learning for Robust Routing in Software Defined Networks",
  //   conferenceSortName: "IEEE Transactions on Network and Service Management",
  //   event: "IEEE Transactions on Network and Service Management",
  //   date: "Jan 9, 2025",
  //   role: "Journal Peer Review",
  // },
  // {
  //   conferenceName: "IEEE Transactions on Big Data",
  //   topicName:
  //     "Traffic Flow Forecasting Based on Complex Gray Relational Degree Network and Multi-Period Exattention-GRU Model",
  //   conferenceSortName: "IEEE Transactions on Big Data",
  //   event: "IEEE Transactions on Big Data",
  //   date: "Jan 8, 2025",
  //   role: "Journal Peer Review",
  // },
  // {
  //   conferenceName: "IEEE Transactions on Big Data",
  //   topicName: "Sentences based Adversarial Attack on Generated Text Detectors",
  //   conferenceSortName: "IEEE Transactions on Big Data",
  //   event: "IEEE Transactions on Big Data",
  //   date: "Jan 8, 2025",
  //   role: "Journal Peer Review",
  // },
  // {
  //   conferenceName: "IEEE Transactions on Network and Service Management",
  //   topicName:
  //     "An Adaptive Contention Window Backoff Scheme Differentiating Network Conditions Based on Deep Q-Learning Network",
  //   conferenceSortName: "IEEE Transactions on Network and Service Management",
  //   event: "IEEE Transactions on Network and Service Management",
  //   date: "Nov 11, 2024",
  //   role: "Journal Peer Review",
  // },
  // {
  //   conferenceName: "IEEE Transactions on Network and Service Management",
  //   topicName:
  //     "A General Approach for Network Video Traffic Classification Using Improved Deep Learning",
  //   conferenceSortName: "IEEE Transactions on Network and Service Management",
  //   event: "IEEE Transactions on Network and Service Management",
  //   date: "Nov 11, 2024",
  //   role: "Journal Peer Review",
  // },
];

export const judgeConference = [
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Jenkins-The Leading Automation Server for Continuous Integration and Continuous Delivery",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName: "Artificial Intelligence in the Healthcare Sector",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName: "Simulation of Obstacle Avoidance Robots",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName: "Automatic Text Summarization Using Deep Learning",
    conferenceSortName: "ICICCS 2024",
    event: "ICICCS 2024",
    date: "2024",
    role: "Conference Peer Reviewss",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Network Automation Platforms: Improving Operational Efficiency in Data Centerss",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "YOL-SFV2: An Effective Deep Learning Technique to Detect and Classify the Human Face Action in Thermal Images",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024) ",
    conferenceTopicName:
      "AI-Driven Enhancements in it Incident Management: Improving Customer Experience through Automation and Streamlined Processes",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review | ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Comparative Study of Neural Network Architectures in Deep Reinforcement Learning",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Real-Time Adaptation: Change Data Capture in Modern Computer Architecture",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024s",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Securing the Edge: A Comprehensive Review of Adaptive Video Streaming Security Mechanisms in Decentralized Environments",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "AI-Driven Business Intelligence: Unlocking the Future of Decision-Making",
    conferenceSortName: "ICICCS 2024",
    event: "ICICCS 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Advancing Signature Verification with Machine Learning and AI: A Proactive Cybersecurity Approach",
    conferenceSortName: "ICICCS- 2024",
    event: "ICICCS- 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing ",
    conferenceTopicName:
      "A Systematic Review of Artificial Intelligence and Cyber Security in Higher Education Space",
    conferenceSortName: "ICICCS 2024",
    event: "ICICCS 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Generative Adversarial Networks: A Novel Approach to Generative Modeling",
    conferenceSortName: "ICICCS 2024",
    event: "ICICCS 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JETA & International Conference on Intelligent Computing And Cyber Security (ICICCS- 2024)",
    conferenceTopicName:
      "Building Robust AI Systems in Finance: The Indispensable Role of Data Engineering and Data Quality",
    conferenceSortName: "ICICCS 2024",
    event: "ICICCS 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  // {
  //   conferenceName:
  //     "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
  //   conferenceTopicName:
  //     "Advanced Path Planning Algorithms on NVIDIA Jetson TX2 for Assistive Technologies",
  //   conferenceSortName: "ICADAC 2025",
  //   event: "ICADAC 2025",
  //   date: "2025",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
  //   conferenceTopicName:
  //     "A Detailed Survey of Security Threats in Wireless Sensor Network",
  //   conferenceSortName: "ICADAC 2025",
  //   event: "ICADAC 2025",
  //   date: "2025",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Survey on Information Security and Quantum Cryptography",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Integrating Al for Enhanced Battery Lifespan and Efficiency in Electric Vehicles",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "The Role of Artificial Intelligence and Machine Learning in Autonomous Vehicle Diagnostics and Control",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Data Science and Regulatory Affairs: Navigating the Complex Landscape of Drug Approval Processes",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Smart Semiconductor Wafer Inspection Systems Integrating Al for Increased Efficiency",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Global Parts Management through Data and AI Leveraging Structured and Unstructured Data",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Jenkins-The Leading Automation Server for Continuous Integration and Continuous Delivery",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName: "Simulation of Obstacle Avoidance Robots",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "The Future of Al in Big Data: Cloud Platforms are Evolving to Support Machine Learning and Analytics",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Real-Time Adaptation: Change Data Capture in Modern Computer Architecture",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "YOL-SFV2: An Effective Deep Learning Technique to Detect and Classify the Human Face Action in Thermal Images",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Securing the Edge: A Comprehensive Review of Adaptive Video Streaming Security Mechanisms in Decentralized Environments",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Al-Driven Business Intelligence: Unlocking the Future of Decision-Making",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "A Systematic Review of Artificial Intelligence and Cyber Security in Higher Education Space",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
  //   conferenceTopicName:
  //     "Building Robust Al Systems in Finance: The Indispensable Role of Data Engineering and Data Quality",
  //   conferenceSortName: "ESP-JETA 2024",
  //   event: "ESP-JETA 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
  // {
  //   conferenceName:
  //     "Global Conference on Information Technologies and Communications",
  //   conferenceTopicName:
  //     "Revolutionizing Covid-19 Pneumonia Detection With Convolutional Neural Networks",
  //   conferenceSortName: "GCITC 2024",
  //   event: "GCITC 2024",
  //   date: "2024",
  //   role: "Conference Peer Review",
  // },
];

export const judgeSessionChair = [
  {
    conferenceName:
      "INTERNATIONAL CONFERENCE ON ADVANCED DATA ANALYTICS AND COMPUTING",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Session Chair",
  },
  {
    conferenceName: "HUMANIZE AI TEXT",
    conferenceSortName: "HACKATHON 2024",
    event: "HACKATHON 2024",
    date: "2024",
    role: "HACKATHON JUDGE",
  },
];

export const judgeGithub = [
  {
    repoName: "Data_Science_Projects",
    issue: "Update Telecom_Customer_Churn.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update heart_disease_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update real_state.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update iris_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update axis_bank_stock_price_prediction.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update weather.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update linear_regression.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update house_price.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update asia_cup.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update yt.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update virtual_mouse.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update speech_recognition.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CODE_OF_CONDUCT.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update README.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Video Classification Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/38",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/38/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/38/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Chatbot Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/36",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/36/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/36/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Captioning Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/35",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/35/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/35/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Language Translation Model Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/34",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/34/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/34/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Handwritten Digit Recognition Model Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/33",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/33/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/33/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Sentiment Analysis Model Using LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/32",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/32/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/32/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/31",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/31/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/31/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classifier Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/30",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/30/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/30/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/29",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/29/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/29/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classification.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/28",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/28/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/28/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
];

export const badges = [
  {
    badgeName: "Early Bird Pegasaurus",
    fest: "",
    badgeDes: "Holopin",
    badgeUrl:
      "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDd0ZDhncDUwMTMyMDlrMHd1OHFlNHg5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
  },
  {
    badgeName: "Hacktoberfest 2024: Registered",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level0-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 1",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level1-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 2",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level2-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 3",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level3-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 4",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level4-sloth-code-0-0-0-0.webp",
  },
];

export const keyNoteData = [
  {
    image: "/ny-black.webp",
    conferenceName: "IEEE CN Smart Cities Austin Texas USA",
    publisher: "IEEE",
    shortName: "IEEE CN Smart Cities Austin Texas USA",
    date: "2024",
    link: "https://events.vtools.ieee.org/m/430011/",
    mediaLink:
      "https://nyweekly.com/tech/rahul-vadisetty-and-anand-polamarasetti-smart-city-development",
  },
  {
    image: "/esp.png",
    conferenceName: "ICICCS- 2024",
    publisher: "Eternal Scientific Publication",
    shortName: "Eternal Scientific Publication",
    date: "2024",
    link: "https://www.espjournals.org/",
    mediaLink:
      "https://www.espjournals.org/International_Conference_ICICCS.php",
  },
];
