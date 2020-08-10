import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.jpg';
import PortfolioImage3 from '../../assets/image/portfolio/riftlogo.png';
import nodejs from '../../assets/image/portfolio/nodejs.png';
import gcp from '../../assets/image/portfolio/gcplogo.png';
import aws from '../../assets/image/portfolio/aws.jpg';
import fb from '../../assets/image/portfolio/fb.png';
import npm from '../../assets/image/portfolio/npm.png';
import logo from '../../assets/image/portfolio/logo.png';

import pecus from '../../assets/image/portfolio/pecus.svg';


import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: '#',
  },
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialDribbbleOutline,
    url: '#',
  },
  {
    icon: socialGithub,
    url: '#',
  },
  {
    icon: socialGoogleplusOutline,
    url: '#',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECT',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'My Stack',
    path: '#awards_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: nodejs,
    awardName: 'NodeJS',
    awardDetails: 'IYKYK thats all.',
    awardeeName: 'Awardee',
    date: 'Using Since 2017',
    awardeeLogo: pecus,
  },
  {
    awardLogo: gcp,
    awardName: 'Google Cloud Platform',
    awardDetails: 'Best Cloud Platform',
    awardeeLogo: "AwardImage3",
    awardeeLogo: pecus,
    awardeeName: 'Since When',
    date: 'Using Since 2017',
  },
  {
    awardLogo: aws,
    awardName: 'Amazon Web Services',
    awardDetails: 'Right up there with GCP as a cloud provider',
    awardeeLogo: pecus,
    awardeeName: 'Since When',
    date: 'Using Since 2016',
  },
  {
    awardLogo: npm,
    awardName: 'NPM',
    awardDetails: 'NPM, Yarn whatever your choicem NPM is my go to manager',
    awardeeLogo: pecus,
    awardeeName: 'Since When',
    date: 'Using since 2019',
  },
  {
    awardLogo: fb,
    awardName: 'Facebook Prophet',
    awardDetails: 'Was not able to use AWS forecast so next best',
    awardeeLogo: pecus,
    awardeeName: 'Since When',
    date: 'Using Since 2020',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'RiftPay (Social Banking)',
    portfolioItem: [
      {
        title: 'Building Social Banking',
        description:
          "I am a founder at RiftPay, Inc where we are building the worlds first social banking platform. It started off as a simple payment app before we ended up deciding to build a larger than life payment platform",
        image: PortfolioImage3,
        link: '#',
        featuredIn: 'PitchDrive',
        featuredLink: 'Pitch Drive',
        //view: '4.5K',
        //love: '1.5K',
        //feedback: '1.2K',
        buildWith: [
          {
            content: 'What is social banking?',
          },
          {
            content: 'How to build your own fintech platform',
          },
          {
            content: 'IMO the future of fintech',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "I am a founder at RiftPay, Inc where we are building the worlds first social banking platform. It started off as a simple payment app before we ended up deciding to build a larger than life payment platform",
        image: PortfolioImage3,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'Abysii / Pecus',
    portfolioItem: [
      {
        title: 'Quant Robo-Advisor (Pecus)',
        description:
          "Understandably I still dont have a name for this beast, if it does end up being a public platform then pecus will be the name, but what im doing here is building a personal advisor robo investing quant. FWIW i think if everyone had the data and tools they needed, there wouldnt be any investment advisors, hedge funds and PE firms. The idea here is to do that exactly which is reducing the gap between traditional investors and normal investors like you and I",
        image: pecus,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'What is Robo-Advising?',
          },
          {
            content: 'Can you actually predict stocks?',
          },
          {
            content: 'My whitepaper on portfolio optimization',
          },
        ],
      },
      {
        title: 'Pecus',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'TinTuo',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Components',
          },
        ],
      },
      {
        title: 'RiftPay Social Banking',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'Pecus',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',

      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'DeepEX',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Deep Learning Technology',
    description:
      'Deep learning is my strongerst conversation on the future of technologyu',
  },
  {
    image: Step2,
    title: '2. Blockchain Technology',
    description:
      'No one wants to create an actual public blockchain but when it does happen...',
  },
  {
    image: Step3,
    title: '3. Future of finance & payments',
    description:
      'Check out what I think happens to the future of payments',
  },
];

export const SERVICE_LIST = [
  {
    title: 'UI/UX Design',
    listItems: [
      {
        content: 'Design Sprints',
      },
      {
        content: 'User Research',
      },
      {
        content: 'Visual Design',
      },
      {
        content: 'Mobile App Design',
      },
      {
        content: 'Tracking & Learning',
      },
      {
        content: 'Building Traction',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'AngularJS',
      },
      {
        content: 'ASP.NET MVC',
      },
      {
        content: 'WordPress',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'GO',
      },
    ],
  },
  {
    title: 'Mobile App Development',
    listItems: [
      {
        content: 'iOS',
      },
      {
        content: 'Android',
      },
      {
        content: 'React Native',
      },
      {
        content: 'Ionic & Apache Cordova',
      },
      {
        content: 'NodeJS',
      },
      {
        content: '3D & VR',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Backend Development',
    description:
      'NodeJS & Python are my to go for backend development, I have recently been using cURL a lot more and have become fairly profficient in that area, but still looking to add to my arsenal',
    icon: SkillIcon1,
    successRate: '90',
  },
  {
    title: 'Payment Systems Architecture',
    description:
      'I cast a wide net with what I define as a payment systems architecture. I build the backend functionality at RiftPay which was my first dabble into payments',
    icon: SkillIcon2,
    successRate: '85',
  },
  {
    title: 'Web Development',
    description:
      'React & just a little bit of react-native.',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Blockchain Development',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jeny Doe',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
