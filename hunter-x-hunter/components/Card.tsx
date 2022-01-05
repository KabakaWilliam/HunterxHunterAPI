interface cardItems {
  name: string;
  image: string;
  subHeader: string;
}

const Card = ({ name, image, subHeader }: cardItems) => {
  return (
    <div className="flex w-[500px] h-[500px] border border-gray-300  rounded-[20px] hoverAnimation relative ">
      <img
        src={image}
        alt="Gon Freecs"
        className="object-cover object-bottom w-full h-full rounded-[19px] inset-0  z-50 hover:z-0 "
        onClick={(e) => {
          console.log("clicked");
        }}
      />
      <section className="absolute top-[70%] w-full h-[30%] p-5 flex items-center justify-start flex-col">
        <span className="text-[40px] text-white w-full  ">{name}</span>
        <span className="text-[20px] text-white font-light">{subHeader}</span>
      </section>
    </div>
  );
};

export default Card;
