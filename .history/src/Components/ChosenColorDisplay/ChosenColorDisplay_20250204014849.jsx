import { useState, useEffect } from "react";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
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
    <span></span>
  );
};

export default ChosenColorDisplay;
