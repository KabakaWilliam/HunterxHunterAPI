interface characterDescription {
  subHeader: string;
}
const CardSubheader = ({ subHeader }: characterDescription) => {
  return (
    <div>
      <span className="text-[20px] text-white font-light text-ellipsis overflow-hidden max-w-[13ch]">
        {subHeader}
      </span>
    </div>
  );
};

export default CardSubheader;
