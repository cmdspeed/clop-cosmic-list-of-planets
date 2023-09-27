import earth from "../../img/earth.png";
import venus from "../../img/venus.png";
import uranus2 from "../../img/uranus2.png";
import mars2 from "../../img/mars2.png";
import mars from "../../img/mars.png";

export const Planet = () => {
  return (
    <>
      <div className="relative min-h-screen ">
        <div className="absolute top-0 right-0 w-[184px]">
          <img src={venus} alt="venus" className="absolute right-0" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[485px]">
          <img src={earth} alt="earth" />
        </div>

        <div className="absolute bottom-0 flex justify-between w-full">
          <div className="w-[142px]">
            <img src={uranus2} alt="uranus" />
          </div>

          <div className="w-[186px] xl:hidden">
            <img src={mars2} alt="mars" />
          </div>
          <div className="w-[186px] hidden xl:block">
            <img src={mars} alt="marsLarge" />
          </div>
        </div>
      </div>
    </>
  );
};
