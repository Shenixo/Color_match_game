import Game_sound from "../../assets/game_theme_sound.mp4";

let game_theme = new Audio(Game_sound);
game_theme.loop = true;
const GameTheme = () => {
  if (game_theme.paused) {
    game_theme.play();
  } else {
    game_theme.pause();
    game_theme.currentTime = 0; 
  }
};


const TapClick = () => {
  
}
export { GameTheme };


