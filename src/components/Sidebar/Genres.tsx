import React from "react";

interface genresProps {
  label: string;
  src:string,
  alt:string
}

const Genres: React.FC<genresProps> = ({ label, src,alt }) => {
  return (
    <div className="flex flex-row gap-x-1 items-center">
      <div className="p-[6px] rounded-md">
        <img src={src} alt={alt} className="w-[32px] h-[32px]" />
      </div>{" "}
      <span>{label}</span>
    </div>
  );
};

export default Genres;
