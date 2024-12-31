'use strict';

// Scroll library: https://github.com/darkroomengineering/lenis -->

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
    duration: 0.8,
    wheelMultiplier:1,
    touchMultiplier:1.5
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
    console.log(e);
    });


let links = document.querySelectorAll(".project-link");

try{
    links.forEach((element) => {
      let video = element.querySelector("video");
    
      element.addEventListener("mouseenter", function () {
        video.classList.add("opaque");
        video.play();
      });
    
      element.addEventListener("mouseleave", function () {
        video.pause();
        video.classList.remove("opaque");
      });
    });

}catch (e) {
    console.log("didn't work")
}


// Mouse follow 

if (window.innerWidth > 850) {
    const containers = document.querySelectorAll(".about-photo");
    const circle = document.querySelector(".circle");

    // Add text content for each image
    const imageTexts = {
        "me": "me in a plant store :)",
        "celeste": "Celeste, my favourite game I played in 2024",
        "powder": "my favourite show, Arcane!",
        "nurture": "been listening to a lot of Porter Robinson lately",
        "comedy2": "Janice Bannister's 'Give Yourself Permission to Laugh'",
        "feather": "Sumaiya Tufail's 'Poetry is Resistance'",
        "adhd": "Hayley Honeyman's 'Unmask ADHD'",
        "careernorms2": "Chris Wilson's 'Life Beyond The Dead Man's Curve'",
        "cloth": "black cloth from the end scene",
        "comedy": "Jannice Bannister's 'Give Yourself Permission to Laugh'",
        "careernorms": "Chris Wilson's 'Life Beyond The Dead Man's Curve'",
        "adhd2": "Hayley Honeyman's 'Unmask ADHD'",
        "centre": "venue photography from event day!",
        "mirror_video": "mirrors mimicking the back wall",
        "lobby": "the hallways lead to the individual scenes!",
        "jazzdorposter": "three colourways; I liked the black & white ones for their stark contrasts",
        "jazzdor_test1": "I wanted this website to scroll horizontally to make it feel more like the user was moving through a story",
        "jazzdor_test2": "I wanted this website to scroll horizontally to make it feel more like the user was moving through a story",
        "jazzdor_test3": "I wanted this website to scroll horizontally to make it feel more like the user was moving through a story",
        "ball": "easing practice!",
        "chapter": "practicing how to use different brushes in Procreate",
        "creationsovercoffee": "event post for a design club I helped out with :)",
        "daynight": "idea I had bouncing off of light mode/dark mode",
        "overcompensate": "lyric poster for a favourite band",
        "cherryblossom": "animated show of cherry blossom photos I took this April"
    };

    gsap.set(circle, {scale: 0.5, xPercent: -50, yPercent: -50});

    // Update event listeners to work with all containers
    containers.forEach(container => {
        container.addEventListener("pointerenter", function(e) {
            gsap.to(circle, 0.2, { scale: 1, opacity: 1 });
            // Update circle text based on image
            circle.textContent = imageTexts[this.id] || "";
            positionCircle(e);
            container.classList.add("hide-cursor");
        });

        container.addEventListener("pointerleave", function(e) {
            gsap.to(circle, 0.2, { scale: 0.5, opacity: 0 });
            positionCircle(e);
            container.classList.remove("hide-cursor");
        });

        container.addEventListener("pointermove", function(e) {
            positionCircle(e);
        });
    });

    function positionCircle(e) {
      const circle = document.querySelector(".circle");
      const circleWidth = circle.offsetWidth;
      const windowWidth = window.innerWidth;
      const offset = 50; // Small buffer to prevent scroll

      const mouseX = e.clientX;

      // Add offset to bounds
      const minX = circleWidth / 2 + offset;
      const maxX = windowWidth - (circleWidth / 2) - offset;

      const boundedX = Math.min(Math.max(mouseX, minX), maxX);

      gsap.to(circle, 0.3, { 
        x: boundedX, 
        y: e.pageY,
        ease: "power1.out"
      });
    }
}


