import Card from "./Card";

interface cardItems {
  name: string;
  image: string;
  subHeader: string;
}

const CharacterBlock = ({ name, image, subHeader }: cardItems) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Card name={name} image={image} subHeader={subHeader} />
      <span className="p-3 text-[30px]">{name}</span>
    </div>
  );
};

export default CharacterBlock;
