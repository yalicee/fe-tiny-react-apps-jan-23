import { useState } from "react";

interface ListProps {
  list: string[];
  setList: Function;
}

const Input = ({ list, setList }: ListProps) => {
  const [shoppingInput, setShoppingInput] = useState("");
  const handleChange = (e) => {
    setShoppingInput(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    addToShoppingList(shoppingInput);
    console.log(shoppingInput);
  };

  const addToShoppingList = (shoppingItem: string) => {
    let copyList = [...list];
    copyList = [...copyList, shoppingItem];
    setList(copyList);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={shoppingInput}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Add to shopping list</button>
      </form>
    </div>
  );
};

export default Input;
