const dropdownsnav = document.querySelectorAll('.navbar-nav .dropdown');

dropdownsnav.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.querySelector('.dropdown-menu').classList.add('show');
    });
    element.addEventListener('mouseleave', () => {
        element.querySelector('.dropdown-menu').classList.remove('show');
    })
});


function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll(".logo path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
setTextAnimation(0.1, 3.3, 2, 'ease-in-out', '#4cab8b', true);
// setTextAnimation(0.1, 3.3, 2, 'ease-in-out', '#525f7f', true);



function rubberletters(classname, delay) {
    let letters = document.querySelectorAll(".titleletter");
    letters.forEach(
        (letter) => {
            letter.addEventListener('mouseenter', () => {
                letter.classList.add(classname);
                setTimeout(function () {
                    letter.classList.remove(classname);
                }, delay * 1000);
            })
        }
    );
}
rubberletters('rubberletter', 1);




function OnloadingTitle() {
    let container = document.querySelector("body");
    container.onload = () => {
        OnloadrubberlettersPop('rubberletter', 1);
    }
}

OnloadingTitle();

function OnloadrubberlettersPop(classname, delay) {
    let letters = document.querySelectorAll(".titleletter");
    let timer = 0;
    letters.forEach(
        (letter) => {
            setTimeout(function () {

                letter.style.opacity = '100%';
                letter.classList.add(classname);
                setTimeout(function () {
                    letter.classList.remove(classname);
                }, delay * 1000);
            }, timer);
            timer += 100;
        }
    );
}


console.log(`if you are lokking here 
thats mean you know whats going on
 if you want to test me or chalenge me feel free to contact me
  `);