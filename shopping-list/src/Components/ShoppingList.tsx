import Input from "./Input";
import { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <>
      <Input list={list} setList={setList} />
      <div>
        {list.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default ShoppingList;
