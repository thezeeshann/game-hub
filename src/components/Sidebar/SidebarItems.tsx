import React from "react";
import { IconType } from "react-icons";
import { Link,NavLink } from "react-router-dom";

interface SidebarProps {
  icon: IconType;
  label: string;
  to: string;
}

const SidebarItems: React.FC<SidebarProps> = ({ icon: Icon, label, to }) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <NavLink to={"#"} className="bg-[#262626] p-[6px] rounded-md hover:bg-white hover:text-black">
        <Icon size={"1.2rem"} />
      </NavLink>{" "}
      <Link to={to} >
        <span>{label}</span>
      </Link>
    </div>
  );
};

export default SidebarItems;
