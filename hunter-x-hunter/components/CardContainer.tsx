import CharacterBlock from "./CharacterBlock";
import Characters from "../Characters.json";

// alternative for images
// https://comicvine.gamespot.com/a/uploads/square_small/11131/111318082/5813446-screenshot_2017-04-07-22-00-31.jpg
//

const CardContainer = ({ name, image, subHeader }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-20 md:flex-row md:justify-center md:gap-20 md:items-start">
      <CharacterBlock
        name={Characters[0].name}
        image={
          "https://cdnb.artstation.com/p/assets/images/images/037/933/141/large/th-vinh-ph-m-ecb57810-3d4e-41ce-8562-3f0f077a8ac5.jpg?1621706022"
        }
        subHeader={
          "Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he runs away from home and becomes a Rookie Hunter."
        }
      />
      <CharacterBlock
        name="Gon Freecs"
        image={"https://i1.sndcdn.com/avatars-000321357720-5b93a6-t500x500.jpg"}
        subHeader={
          "Gon Freecs is a Rookie Hunter and the son of Ging Freecs. Finding his father is Gon's motivation in becoming a Hunter."
        }
      />
    </div>
  );
};

export default CardContainer;
