import Game_sound from "../../assets/game_theme_sound.mp4";
import Tab_sound from "../../assets/button_clicks.wav";

let game_theme = new Audio(Game_sound);
game_theme.loop = false;
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
export { GameTheme, TabClick };


