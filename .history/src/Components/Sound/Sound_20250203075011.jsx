import { useState } from "react";
import Game_sound from "../../assets/game_theme_sound.mp4";

let game_theme = new Audio();
const GameTheme = () => {
  const [soundState, setSoundState] = useState()
  if (!game_theme.paused) {
    game_theme.currentTime = 0
  }
  game_theme = new Audio.play(Game_sound);
};

export { GameTheme };
