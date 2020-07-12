import './styles.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded',async () => {
   const ui = new UI();
   await ui.renderSentence();
});

