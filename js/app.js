
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
        // console.log(key);
        //  console.log(audio);
    key.classList.add('playing');

});
    
        const keys = document.querySelectorAll('.key');

        function removeTransition(e) {
            
        if (e.propertyName !=="transform") return;
        this.classList.remove('playing');
    }

    keys.forEach( (key) => key.addEventListener('transitionend', removeTransition));
