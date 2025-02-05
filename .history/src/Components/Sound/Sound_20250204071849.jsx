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


let tabClicksAudio = null;
let isPlaying = false; // Track the playing state

const TabClick = () => {
  if (isPlaying) {
    tabClicksAudio.pause();
    tabClicksAudio.currentTime = 0;
    isPlaying = false;
  } else {
    tabClicksAudio = new Audio(Tab_sound);
    tabClicksAudio.play();
    isPlaying = true;
  }

  return isPlaying; 

export { GameTheme, TabClick };



