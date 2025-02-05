import { useState } from "react";
import Game_sound from "../../assets/game_theme_sound.mp4";

const GameTheme = () => {
  const [soundState, setSoundState] = useState()
  const game_theme = new Audio(Game_sound);
  game_theme.play();
};

export { GameTheme };
