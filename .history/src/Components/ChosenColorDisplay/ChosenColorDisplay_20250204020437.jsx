import { useState, useEffect } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

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
    <span>
      <EmojiObjectsIcon
        style={{
          color: chosenColor || "#ccc",
          fontSize: 30,
          marginLeft: "-20px",
          filter: chosenColor
            ? `drop-shadow(0px -30px 15px ${chosenColor})`
            : "none",
          transition: "filter 0.3s ease-in-out",
        }}
      />
    </span>
  );
};

export default ChosenColorDisplay;
