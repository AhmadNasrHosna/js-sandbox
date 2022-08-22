import './styles.css'
import { handleInsertEmoji } from "./module";

const insetEmojiButton: HTMLElement | null = document.getElementById('insetEmojiButton')

if(insetEmojiButton) {
  insetEmojiButton.onclick = handleInsertEmoji
}

