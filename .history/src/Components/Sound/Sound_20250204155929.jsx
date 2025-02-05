import Game_sound from "../../assets/game_theme_sound.mp4";
import Tab_sound from "../../assets/button_clicks.wav";
import celebration from "../../assets/celebration.mp3";

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

// ✅ Function to check if game theme is playing
const IsGameThemePlaying = () => {
  return !game_theme.paused;
};

// ✅ Function to stop game theme
const StopGameThemeSound = () => {
  game_theme.pause();
  game_theme.currentTime = 0;
};

const TabClick = () => {
  const tab_clicks = new Audio(Tab_sound);
  tab_clicks.play();
};

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

export { 
  GameTheme, 
  StopGameThemeSound, 
  IsGameThemePlaying, 
  TabClick, 
  CelebrationSound, 
  StopCelebrationSound 
};
