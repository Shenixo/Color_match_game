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

  return (
    <div>
      <h2>Chosen Color:</h2>
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
