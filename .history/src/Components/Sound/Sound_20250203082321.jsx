import Game_sound from "../../assets/game_theme_sound.mp4";

let game_theme = new Audio(Game_sound);

const GameTheme = () => {
  if (!game_theme.paused) {
    game_theme.currentTime = 0;
  }
  game_theme.play().catch((err) => console.error("Playback failed", err));
};

export { GameTheme };
