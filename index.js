window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads > div")

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; //sets the current time to zero for enabling multiple clicks
            sounds[index].play();
        });
    });

// console.log(sounds);

});
