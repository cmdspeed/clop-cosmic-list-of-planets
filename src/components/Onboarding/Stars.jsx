import starImage from "../../img/star.png";

export const Stars = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const numberOfStars = 10;

  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    stars.push({ x, y });
  }

  return (
    <div className="w-screen h-screen absolute">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-2 h-2"
          style={{
            backgroundImage: `url(${starImage})`,
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        ></div>
      ))}
    </div>
  );
};
