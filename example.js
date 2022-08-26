import { gsap, TimelineLite } from "./otherLibs/gsap/all.js";
import { SplitText } from "./src/splitText.js";

const timeline = new TimelineLite()

const text = new SplitText(".header");
console.log(text);

gsap.set(text.chars, {
    perspective: "500",
    transformOrigin: "50% 1em",
    transformStyle: 'preserve-3d',
})

timeline.staggerFromTo(
    text.chars,
    0.5,
    {
        opacity:0,
        rotateY: 45,
        rotateZ: 360
    },
    {
        opacity:1,
        rotateY: 0,
        rotateZ: 0
    },
    0.01
)