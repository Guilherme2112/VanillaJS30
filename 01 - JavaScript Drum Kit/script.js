function tocar(e) {
    //tag de audio [CRASES-WHY....Mas é assim mesmo.]
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //tecla<div>
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //para a função se não houver audio associado a tecla
    if (!audio) return;
    //zera (reinicia) o audio 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); //style.css/.playing{}
}

function removeTransition(e) {
    //ignora o que não for transform 
    if (e.name !== 'transform') return;
    e.classList.remove('playing');
    console.log(e.propertyName);
    //para fins de teste
}

//todos os elementos da classe .key
const keys = document.querySelectorAll('.key');

//para cada key,executa a função removeTransition (não funciona)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//cria um listener que aguarda uma tecla ser apertaddaa
window.addEventListener('keydown', tocar);