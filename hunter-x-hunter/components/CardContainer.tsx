import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="h-screen w-screen flex justify-center gap-20">
      <Card
        name="Killua Zoldyck"
        image={
          "https://cdnb.artstation.com/p/assets/images/images/037/933/141/large/th-vinh-ph-m-ecb57810-3d4e-41ce-8562-3f0f077a8ac5.jpg?1621706022"
        }
        subHeader={
          "Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he runs away from home and becomes a Rookie Hunter."
        }
      />
      <Card
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

// <SidebarLink text="Home" Icon={HomeIcon} active />
