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

const TabClick = () => {
  if (tabClicksAudio) {
    tabClicksAudio.pause(); // Stop any currently playing sound
    tabClicksAudio.currentTime = 0; // Reset sound to start
  }

  tabClicksAudio = new Audio(Tab_sound);
  tabClicksAudio.play();
};

const StopTabClick = () => {
  if (tabClicksAudio) {
    tabClicksAudio.pause(); // Stop the sound
    tabClicksAudio.currentTime = 0; // Reset sound position
  }
};

export { GameTheme, TabClick, StopTabClick };



