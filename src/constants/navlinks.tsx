import {
  IconArticle,
  IconBolt,
  IconBriefcase,
  IconBriefcase2,
  IconFileText,
  IconHome,
  IconMail,
  IconMessage2,
  IconUser,
} from "@tabler/icons-react";

export const navigationItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconBriefcase className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "https://siyaratechin.com/#contact",
    icon: <IconMail className="h-4 w-4" />,
  },
]

