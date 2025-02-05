import { useState } from "react";
import Game_sound from "../../assets/game_theme_sound.mp4";

const game_theme = new Audio(Game_sound);
const GameTheme = () => {
  const [soundState, setSoundState] = useState()
  if (!soundState.paused) {
    game_theme.currentTime = 0
  }
  game_theme.play();
};

export { GameTheme };
