import React from "react";
import { IconType } from "react-icons";

interface SidebarProps {
  icon: IconType;
  label: string;
}

const SidebarItems: React.FC<SidebarProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-row gap-x-2  items-center">
      <div className="bg-[#262626] p-[6px] rounded-md hover:bg-white hover:text-black">
        <Icon size={"1.2rem"}  />
      </div>{" "}
      <span>{label}</span>
    </div>
  );
};

export default SidebarItems;
