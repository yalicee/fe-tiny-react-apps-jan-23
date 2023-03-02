import { useState } from "react";
import fortunes from "../../assets/fortunes.js";

export const FortuneTeller = () => {
  const [fortune, useFortune] = useState(fortunes[0]);

  const handleClick = () => {
    const randomNumber: number = Math.floor(Math.random() * fortunes.length);
    useFortune(fortunes[randomNumber]);
  };

  return (
    <div>
      <p>{fortune}</p>
      <button onClick={handleClick}>Click for fortune</button>
    </div>
  );
};
