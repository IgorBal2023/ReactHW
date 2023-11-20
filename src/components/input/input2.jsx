import { useMemo, useState } from "react";
import "./input.css";

const Input2 = () => {
  const [userInput2, setUserInput2] = useState("");
  const userChange = (event) => {
    setUserInput2(event.target.value);
  };

  console.log(`Not memo: ${userInput2}`);
  return (
    <form action="">
      <input
        type="text"
        placeholder="Enter your text two..."
        value={userInput2}
        onChange={userChange}
        className="userInput2"
      />
    </form>
  );
};

export default Input2;
