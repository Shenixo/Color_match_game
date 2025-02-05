import Game_sound from "../../assets/game_theme_sound.mp4";
import Tab_sound from "../../assets/button_clicks.wav";

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


let tab_clicks = new Audio(Tab_sound);
let isSoundPlaying = false;

const TabClick = () => {
  if (!isSoundPlaying) {
    tab_clicks.play();
    isSoundPlaying = true;
  }
};

const StopTabClick = () => {
  if (isSoundPlaying) {
    tab_clicks.pause();
    tab_clicks.currentTime = 0; // Reset the sound
    isSoundPlaying = false;
  }
};
export { GameTheme, TabClick };


