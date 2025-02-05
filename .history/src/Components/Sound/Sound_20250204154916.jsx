import Game_sound from "../../assets/game_theme_sound.mp4";
import Tab_sound from "../../assets/button_clicks.wav";
import celebration from "../../assets/celebration.mp3"
import { useNavigate } from "react-router-dom";

let game_theme = new Audio(Game_sound);
game_theme.loop = true;
useNavigate
const GameTheme = () => {
  if (game_theme.paused) {
    game_theme.play();
  } else {
    game_theme.pause();
    game_theme.currentTime = 0; 
  }
};


const TabClick = () => {
  const tab_clicks = new Audio(Tab_sound)
  tab_clicks.play()
}

/*
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
    tab_clicks.currentTime = 0; 
    isSoundPlaying = false;
  }
}; */

let celebrationTheme = new Audio(celebration);
celebrationTheme.loop = true;
const CelebrationSound = () => {
  if (celebrationTheme.paused) {
    celebrationTheme.play();
  }
};

const StopCelebrationSound = () => {
  celebrationTheme.pause();
  celebrationTheme.currentTime = 0; 
};
export { GameTheme, TabClick, CelebrationSound, StopCelebrationSound };


