import { useState } from "react";
import dogHatImgs from "../../assets/dog-hat";

export const DogImages = () => {
  const [dogHat, useDogHat] = useState(dogHatImgs[1]);
  const handleClick = () => {
    useDogHat(dogHat === dogHatImgs[0] ? dogHatImgs[1] : dogHatImgs[0]);
  };
  return (
    <div>
      <img src={dogHat}></img>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
