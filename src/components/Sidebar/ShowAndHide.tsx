import React from "react";
import { IconType } from "react-icons";

interface ShowAndHideProps {
  icon: IconType;
  label: string;
}

const ShowAndHide:React.FC<ShowAndHideProps> = ({icon:Icon,label}) => {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <div className="bg-[#262626] p-[6px] rounded-md text-gray-500">
        <Icon size={"1.2rem"}  />
      </div>{" "}
      <span className="text-gray-500">{label}</span>
    </div>
  );
};

export default ShowAndHide;
