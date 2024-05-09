import { Platform } from "../lib/types";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiGogdotcom, SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiEpicgames } from "react-icons/si";
import { GrAppleAppStore } from "react-icons/gr";
import { FaGooglePlay, FaSteam } from "react-icons/fa6";

type PlatformsIconProps = {
  platforms: Platform[] | undefined;
};

const PlatformsIconList = ({ platforms }: PlatformsIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    "playstation-store": FaPlaystation,
    "epic-games": SiEpicgames,
    "apple-appstore": GrAppleAppStore,
    "google-play": FaGooglePlay,
    xbox360: FaXbox,
    "xbox-store": FaXbox,
    gog: SiGogdotcom,
    steam: FaSteam,
  };

  return (
    <div className="space-x-1">
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
          className="text-lg"
        />
      ))}
    </div>
  );
};

export default PlatformsIconList;
