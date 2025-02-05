
import Game_sound from "../../assets/game_theme_sound.mp4"
const playSound = () => {
    const game_theme = new Audio(Game_sound)
    game_theme.play()
}

export { playSound }
