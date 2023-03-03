import { ChangeEvent, FormEvent, useState } from "react";

interface ListProps {
  list: string[];
  setList: Function;
}

const Input = ({ list, setList }: ListProps) => {
  const [shoppingInput, setShoppingInput] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShoppingInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToShoppingList(shoppingInput);
  };

  const addToShoppingList = (shoppingItem: string) => {
    let copyList = [...list];
    copyList = [...copyList, shoppingItem];
    setList(copyList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={shoppingInput}
          onChange={handleChange}
        ></input>
        <button>Add to shopping list</button>
      </form>
    </div>
  );
};

export default Input;
