type GenresProps = {
  label: string;
  src: string;
  alt: string;
};

const Genres = ({ label, src, alt }: GenresProps) => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <div className="p-[6px] rounded-md">
        <img src={src} alt={alt} className="w-[32px] h-[32px]" />
      </div>{" "}
      <span>{label}</span>
    </div>
  );
};

export default Genres;
