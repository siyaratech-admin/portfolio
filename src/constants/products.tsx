import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/coursevidhya.png";
import sidefolioAceternity3 from "public/images/coursevidhya_2.png";

import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn-2.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://techdivehub.siyaratechin.com",
    title: "TechDiveHub",
    description:
      "Transforming Learning into an Engaging Journey",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        Coursevidhya is an innovative educational platform designed to revolutionize the learning experience by making complex concepts accessible and enjoyable. By seamlessly blending real-life examples with an engaging teaching approach, the platform breaks down educational barriers and transforms traditional learning into an interactive, fun-filled adventure. Students and learners are empowered to grasp challenging subjects through conversational, relatable explanations that simplify intricate topics and make knowledge acquisition both effortless and exciting.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/siyaratech-admin/ecommerce-management",
    title: "E-commerce Platform",
    description:
      "Comprehensive Digital Marketplace Management",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["React", "Tailwindcss","Express"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        A robust e-commerce solution that provides a seamless online shopping experience with a powerful admin dashboard for comprehensive business management. The platform enables merchants to efficiently control product listings, track sales, manage inventory, process orders, and gain real-time insights through intuitive analytics and reporting tools, creating a streamlined and intelligent digital retail environment.
        </p>
        
      </div>
    ),
  },
  {
    href: "https://github.com/siyaratech-admin/interviewai",
    title: "AI Interview Simulator",
    description:
      "Revolutionizing Career Preparation and Interview Skills",
    thumbnail: sidefolioMoonbeam2,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        An advanced AI-powered platform that provides realistic, interactive interview simulations designed to help job seekers build confidence, refine communication skills, and prepare comprehensively for professional interviews. Using sophisticated artificial intelligence, the simulator generates contextual questions, provides real-time feedback, analyzes verbal and non-verbal communication, and offers personalized insights to help users master interview techniques across various industries and job roles.
        </p>
      </div>
    ),
  },
  {
    href: "https://whiteboard-theta-beige.vercel.app/",
    title: "Free Sketch Whiteboard",
    description:
      "Unleashing Creativity through Digital Collaboration",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
        A dynamic digital canvas that empowers users to brainstorm, sketch, and visualize ideas with complete freedom and intuitive design. This collaborative whiteboard platform provides a seamless, user-friendly interface where individuals and teams can draw, annotate, create mind maps, and share creative concepts in real-time, breaking down barriers between imagination and expression across personal, educational, and professional contexts.
        </p>
      </div>
    ),
  },
];
