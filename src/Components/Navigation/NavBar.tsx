import NavItem from "./NavItem";
import "./NavBar.css";

interface navitem {
  text: string;
  link: null | string;
  dropdownlist: null | Array<{ text: string; link: string }>;
}

export default function NavBar() {
  const navigation: Array<navitem> = [
    {
      text: "About me",
      link: "/",
      dropdownlist: null,
    },
    {
      text: "Resume",
      link: "/resume",
      dropdownlist: null,
    },
    {
      text: "Projects",
      link: null,
      dropdownlist: [
        {
          text: "mini Projects",
          link: "/mini-projects",
        },
        {
          text: "full projects",
          link: "/full-projects",
        },
      ],
    },
    {
      text: "Contacts",
      link: null,
      dropdownlist: [
        {
          text: "facebook",
          link: "https//:",
        },
        {
          text: "LinkedIn",
          link: "https//:",
        },
        {
          text: "WhatsApp",
          link: "https//:",
        },
      ],
    },
  ];
  return (
    <div className="nav-bar">
      <div className="nav-logo">SA.</div>
      <div className="nav-list">
        {navigation.map((navitem, idx) => {
          return <NavItem key={idx} navitem={navitem} />;
        })}
      </div>
    </div>
  );
}
