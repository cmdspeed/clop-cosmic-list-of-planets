import { NavLink } from "react-router-dom";
import { Planet } from "./Planets.jsx";
import { Stars } from "./Stars.jsx";

export const Onboarding = () => {
  return (
    <>
      <section className="max-w-7xl pt-20 mx-auto">
        <div className="px-6">
          <h1 className="text-5xl font-bold">Explore the Universe</h1>
          <p className="text-lg text-secondColor pt-7">
            Journey through the cosmos with our space app
          </p>
          <div className="mt-7">
            <NavLink
              to={"/planet"}
              className="py-3.5 px-11 bg-white text-black rounded-xl"
            >
              <b>Get Started</b>
            </NavLink>
          </div>
        </div>
        <Stars />
        <Planet />
      </section>
    </>
  );
};
