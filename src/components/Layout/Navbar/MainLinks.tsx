import { FiUsers } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import NavbarLink from "./Link";

const data = [
  {
    icon: <FiUsers />,
    color: "blue",
    label: "Users",
    path: "/users",
  },
];

const MainLinks = () => {
  const location = useLocation();

  const links = data.map((link) => (
    <NavbarLink
      {...link}
      active={link.path === location.pathname}
      key={link.label}
    />
  ));
  return <div>{links}</div>;
};

export default MainLinks;
