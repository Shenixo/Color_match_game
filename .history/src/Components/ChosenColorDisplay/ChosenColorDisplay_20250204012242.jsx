import { useState, useEffect } from "react";

const ChosenColorDisplay = () => {
  const [chosenColor, setChosenColor] = useState(null);

  useEffect(() => {
    const handleColorChosen = (event) => {
      setChosenColor(event.detail);
    };
    document.addEventListener("colorChosen", handleColorChosen);

    return () => {
      document.removeEventListener("colorChosen", handleColorChosen);
    };
  }, []);
console.log("chosenColor", chosenColor)
  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: chosenColor,
          border: "1px solid black",
        }}
      />
    </div>
  );
};

export default ChosenColorDisplay;
