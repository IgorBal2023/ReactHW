import { useMemo } from "react";
import "./input.css";

function Input({ defaultValue, onChange }) {
  const memoizedInput = useMemo(() => {
    console.log("memo in work...");
    return (
      <input
        type="text"
        placeholder="Use useMemo..."
        value={defaultValue}
        onChange={onChange}
        className="userInput"
      />
    );
  }, [defaultValue, onChange]);
  console.log(`defaultValue: ${defaultValue}`);
  return memoizedInput;
}

export default Input;
