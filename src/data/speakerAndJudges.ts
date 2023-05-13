import { SpeakerOrJudgeInfo } from '../types';
import eCellLogo from '../../public/Images/ecelllogo.png';
import taranjotSignImage from "../../public/Images/speakers/Taranjot.png";
import agamjotSinghImage from "../../public/Images/speakers/agamjot.jpg";
import anshSinghImage from "../../public/Images/speakers/ansh_sharma.jpg";
import yashikaImage from "../../public/Images/speakers/yashika.png";

const speakersAndJudges: SpeakerOrJudgeInfo[]=[
  {
    name: 'Taranjot Singh',
    about:
      `10K+ @LinkedIn | SIH 2022 Winner 🏆 | Full Stack Web Developer @Placewit 🧑‍💻 | Hack BVICAM 4.0, HackHound'23, Vihaan 6.0, CodeForGood, Smart Tank Winner 🏆 | Content Team Lead @GDSC-GTBIT ✨ | Startup Enthusiast 🚀`,
    image: taranjotSignImage,
    industry: 'Tech, Community Building, and Startups.',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/taranjotsingh23',
    }
  },
  {
    name: 'Ansh Sharma',
    about:
      `ML Researcher MITACS GRI'22 @UbiLab University of Waterloo | Ex-Intern @University Malaya @IIT Delhi @IIT Bombay @bitgrit | Fmr founder @GitHub Community SRM | Hackathon Judge & Mentor | HackCBS 3.0 & HackThisFall Winner`,
    image: anshSinghImage,
    industry: 'ML, NLP, CV, and System Design.',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/anshsharma09/',
    }
  },
  {
    name: 'Agamjot Singh',
    about:
      `Tech Intern @Newton School | Hackathons Mentor(x15) | Community Builder @LumosLabs, @Apli | FRT Intern @Microsoft | Former DevRel @Keployio | Building @CodeSetGo`,
    image: agamjotSinghImage,
    industry: 'MERN(frontend)',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/agamjot-singh/',
    }
  },
  {
    name: 'Yashika Chugh',
    about:
      'Experienced marketer and partnerships expert in Web3, affiliated with Trace Network Labs and leading The Phoenix Guild Delhi Chapter. Award-winning entrepreneur from School of Future with skills in IT software solutions for businesses. Ideal for any Web3-focused hackathon.',
    image: yashikaImage,
    industry: 'Web 3.0',
    socials: {
      twitter: 'https://twitter.com/YashikaChugh4',
    }
  },
]

export default speakersAndJudges;