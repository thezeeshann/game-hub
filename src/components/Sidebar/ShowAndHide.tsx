import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
};

const ShowAndHide = ({ icon: Icon, label }: Props) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <div className="bg-[#262626] p-[6px] rounded-md text-gray-500">
        <Icon size={"1.2rem"} />
      </div>{" "}
      <span className="text-gray-500">{label}</span>
    </div>
  );
};

export default ShowAndHide;
