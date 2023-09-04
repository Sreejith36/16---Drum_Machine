
// SOUND PLAY FUNCTION *******************************************************

function playSoundq() {
    var audio = new Audio('./sounds/Closed_HH.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Closed HH";
}

function playSoundw() {
    var audio = new Audio('./sounds/Heater-1.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Heater-1";
}
function playSounde() {
    var audio = new Audio('./sounds/Heater-2.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Heater-2";
}

function playSounda() {
    var audio = new Audio('./sounds/Heater-3.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Heater-3";
}
function playSounds() {
    var audio = new Audio('./sounds/Heater-4.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Heater-4";
}
function playSoundd() {
    var audio = new Audio('./sounds/Heater-6.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Heater-6";
}

function playSoundz() {
    var audio = new Audio('./sounds/Kick_n_Hat.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Kick N Hat";
}
function playSoundx() {
    var audio = new Audio('./sounds/Open_HH.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "Open HH";
}
function playSoundc() {
    var audio = new Audio('./sounds/RP4_KICK_1.mp3'); 
    audio.play();
    document.getElementById('songName').innerHTML = "RP4 Kick";
}
// SOUND PLAY FUNCTION *******************************************************

// Event listener for mouse click on the button **************************
document.getElementById('Q').addEventListener('click', playSoundq);
document.getElementById('W').addEventListener('click', playSoundw);
document.getElementById('E').addEventListener('click', playSounde);

document.getElementById('A').addEventListener('click', playSounda);
document.getElementById('S').addEventListener('click', playSounds);
document.getElementById('D').addEventListener('click', playSoundd);

document.getElementById('Z').addEventListener('click', playSoundz);
document.getElementById('X').addEventListener('click', playSoundx);
document.getElementById('C').addEventListener('click', playSoundc);
// Event listener for mouse click on the button ****************************

// Event listener for keydown event on the entire document +++++++++++++++++++
document.addEventListener('keydown', function(event) {

    // Check if the pressed key is 'Q' (case insensitive)
    if (event.key === "q" || event.key === "Q") {
        Q.classList.add("pressed");
        playSoundq(); // Call the playSound function when 'Q' key is pressed
        

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
            Q.classList.remove("pressed");
        }, 100);
    }

    
    // Check if the pressed key is 'W' (case insensitive)
    if (event.key === "w" || event.key === "W") {
        W.classList.add("pressed");
        playSoundw(); // Call the playSound function when 'W' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
            W.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'E' (case insensitive)
    if (event.key === "e" || event.key === "E") {
        E.classList.add("pressed");
        playSounde(); // Call the playSound function when 'E' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
           E.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'A' (case insensitive)
    if (event.key === "a" || event.key === "A") {
        A.classList.add("pressed");
        playSounda(); // Call the playSound function when 'A' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
           A.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'S' (case insensitive)
    if (event.key === "s" || event.key === "S") {
        S.classList.add("pressed");
        playSounds(); // Call the playSound function when 'S' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
           S.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'D' (case insensitive)
    if (event.key === "d" || event.key === "D") {
        D.classList.add("pressed");
        playSoundd(); // Call the playSound function when 'D' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
           D.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'Z' (case insensitive)
    if (event.key === "z" || event.key === "Z") {
        Z.classList.add("pressed");
        playSoundz(); // Call the playSound function when 'Z' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
            Z.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'X' (case insensitive)
    if (event.key === "x" || event.key === "X") {
        X.classList.add("pressed");
        playSoundx(); // Call the playSound function when 'X' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
            X.classList.remove("pressed");
        }, 100);
    }

    // Check if the pressed key is 'C' (case insensitive)
    if (event.key === "c" || event.key === "C") {
        C.classList.add("pressed");
        playSoundc(); // Call the playSound function when 'C' key is pressed

        // Remove the "pressed" class after a short delay to reset the animation
        setTimeout(() => {
            C.classList.remove("pressed");
        }, 100);
    }

   
});

