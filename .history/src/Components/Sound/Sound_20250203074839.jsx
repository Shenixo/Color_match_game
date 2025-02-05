import { useState } from "react";
import Game_sound from "../../assets/game_theme_sound.mp4";
import Sound from "../../Pages/Sound/Sound";

const game_theme = new Audio(Game_sound);
const GameTheme = () => {
  const [soundState, setSoundState] = useState()
  if (!soundState.paused) {
    Sound.
  }
  game_theme.play();
};

export { GameTheme };
