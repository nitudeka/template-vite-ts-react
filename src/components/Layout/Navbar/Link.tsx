import { NavLink, ThemeIcon } from "@mantine/core";
import { Link } from "react-router-dom";

interface INavbarLink {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  active?: boolean;
}

const NavbarLink: React.FC<INavbarLink> = (props) => {
  return (
    <div>
      <Link to={props.path} className="no-underline">
        <NavLink
          label={props.label}
          active={props.active}
          icon={
            <ThemeIcon color={props.color} variant="light">
              {props.icon}
            </ThemeIcon>
          }
        />
      </Link>
    </div>
  );
};

export default NavbarLink;
