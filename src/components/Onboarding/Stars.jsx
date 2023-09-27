import starImage from "../../img/star.png";

export const Stars = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const numberOfStars = 10;

  const stars = [];
  // for (let i = 0; i < numberOfStars; i++) {
  //   Math.floor(Math.random() * max);
  // }

  return (
    <div>
      <h2>Width: {width}</h2>

      <h2>Height: {height}</h2>
    </div>
  );
};
