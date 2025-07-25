import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/coursevidhya.png";
import sidefolioAceternity3 from "public/images/coursevidhya_2.png";
import shopshere1 from "public/images/shopshere1.png";
import shopshere2 from "public/images/shopshere2.png";
import byteblog1 from "public/images/byteblog1.png";
import byteblog2 from "public/images/byteblog2.png";
import collabease1 from "public/images/collabease1.png";
import collabease2 from "public/images/collabease2.png";
import collabease3 from "public/images/collabease3.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn-2.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import IS_Admin_Dashboard from "public/images/IS_Admin_Dashboard.png";
import IS_Homepage from "public/images/IS_Homepage.png";
import IS_Cart from "public/images/IS_Cart.png";
import IS_Col_Prods  from "public/images/IS_Col_Prods.png";
import IS_Order_Details from "public/images/IS_Order_Details.png"
import IS_Order from "public/images/IS_Order.png";
import IS_ProductDetails from "public/images/IS_ProductDetails.png";
import IS_Search from "public/images/IS_Search.png";
import IS_Wishlist from "public/images/IS_Wishlist.png";

export const products = [
  {
    href: "https://siyaratechin.com/case-studies/influencer-driven-ecommerce-platform",
    title: "Influencer Driven Ecommerce Platform",
    description:
      "Transform traditional online shopping into a social-first discovery experience powered by influencers.",
    thumbnail: IS_Admin_Dashboard,
    images: [IS_Homepage,IS_Admin_Dashboard,IS_Cart,IS_Col_Prods,IS_Order_Details,IS_Order,IS_ProductDetails,IS_Search,IS_Wishlist],
    stack: ["React", "Java Springboot", "Firebase"],
    slug: "influencer",
    content: (
      <div className="flex-col space-y-4">
        <video
          src="/videos/Admin_Video.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full rounded-lg shadow-lg "
        />

        <p>
          <span className="bg-black text-black">---*-*-*-*---</span> [Hidden due to confidentiality] is a next-generation social commerce platform that empowers influencers to become digital entrepreneurs by seamlessly blending authentic content with powerful storefronts. Designed to revolutionize how creators connect with audiences and monetize their reach, the platform transforms traditional shopping into a dynamic, trust-driven experience. With personalized profiles, curated product collections, and transparent earnings, InfluenceSphere enables creators to build mini-brands while offering followers a more engaging, socially-inspired way to shop and discover trends.        </p>

      </div>
    ),
  },
  {
    href: "https://techdivehub.siyaratechin.com",
    title: "TechDiveHub",
    description:
      "Transforming Learning into an Engaging Journey",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "techdiveshub",
    content: (
      <div>
        <p>
          TechDiveHub is an innovative educational platform designed to revolutionize the learning experience by making complex concepts accessible and enjoyable. By seamlessly blending real-life examples with an engaging teaching approach, the platform breaks down educational barriers and transforms traditional learning into an interactive, fun-filled adventure. Students and learners are empowered to grasp challenging subjects through conversational, relatable explanations that simplify intricate topics and make knowledge acquisition both effortless and exciting.
        </p>
      </div>
    ),
  },
  {
    href: "https://ecommerce-webapp-sigma.vercel.app/",
    title: "Shopshere",
    description:
      "E-Commerce Platform",
    thumbnail: shopshere1,
    images: [shopshere1, shopshere2],
    stack: ["React", "NodeJS", "Tailwindcss"],
    slug: "shopsphere",
    content: (
      <div>
        <p>
          ShopSphere is a comprehensive e-commerce platform designed to enhance online shopping experiences for both businesses and consumers. It offers a wide array of features, including personalized product recommendations, secure payment options, and fast, reliable delivery services. The platform boasts an intuitive user interface, making navigation and product discovery seamless for users. Additionally, ShopSphere provides robust tools for vendors, such as inventory management, sales tracking, and order fulfillment capabilities, empowering businesses to manage their online presence effectively.     </p>
      </div>
    ),
  },
  {
    href: "https://blog-app-xi-puce.vercel.app/",
    title: "Byteblog",
    description:
      "Tech blogs",
    thumbnail: byteblog1,
    images: [byteblog1, byteblog2],
    stack: ["React", "NodeJS", "Tailwindcss"],
    slug: "byteblog",
    content: (
      <div>
        <p>
          ByteBlog is a modern blogging platform designed to facilitate the sharing of stories and creative ideas. It offers a user-friendly interface that allows users to explore various categories, such as &quot;Tech News,&quot; and discover new content effortlessly. The platform&#39;s clean design and intuitive navigation enhance the reading experience, making it easy for users to engage with diverse topics.      </p>
      </div>
    ),
  },
  {
    href: "https://collabease-nine.vercel.app/",
    title: "CollabEase",
    description:
      "Task Management Application",
    thumbnail: collabease1,
    images: [collabease1, collabease2],
    stack: ["React", "NodeJS", "Tailwindcss"],
    slug: "collabease",
    content: (
      <div>
        <p>
          CollabEase is a task management application designed to streamline team collaboration and enhance productivity. It offers features such as swift task delegation, customizable digital forms and checklists, task automation, and dedicated communication channels for each task. These functionalities ensure clear delegation, efficient workflow automation, and focused communication, enabling teams to operate seamlessly and achieve their goals effectively.</p>
      </div>
    ),
  },
  {
    href: "https://github.com/siyaratech-admin/ecommerce-management",
    title: "E-commerce Dashboard",
    description:
      "Comprehensive Digital Marketplace Management",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["React", "Tailwindcss", "Express"],
    slug: "eccomercedashboard",
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
    slug: "interviewai",
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
    slug: "sketchwhiteboard",
    content: (
      <div>
        <p>
          A dynamic digital canvas that empowers users to brainstorm, sketch, and visualize ideas with complete freedom and intuitive design. This collaborative whiteboard platform provides a seamless, user-friendly interface where individuals and teams can draw, annotate, create mind maps, and share creative concepts in real-time, breaking down barriers between imagination and expression across personal, educational, and professional contexts.
        </p>
      </div>
    ),
  },
];
