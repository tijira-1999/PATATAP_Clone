window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads > div");
    const visual = document.querySelector("visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; //sets the current time to zero for enabling multiple clicks
            sounds[index].play();

            createBubbles(index);
        });
    });

// console.log(sounds);

// function for poping colors

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
    }

});
