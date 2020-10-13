# GSAP Split Text Tool

### Basic Usage
```javascript
	import { SplitText } from "./assets/splitText.js"

	const text = document.querySelector("h1.test")
	const splittedText = new SplitText(text, ["words", "chars"]) 
```

### And Animating with GSAP

```javascript
	import { gsap, TimelineLite } from "./assets/gsap/all.js"
	import { SplitText } from "./assets/splitText.js"

	const text = document.querySelector("h1.test")
	const splittedText = new SplitText(text, ["words", "chars"]) 

	const textTimeline = new TimelineLite()

	textTimeline.staggerFromTo(splittedText.chars, 0.5, 
	// From
	{
	rotateZ:360,
	opacity:0
	},
	// To
	{
	rotateZ:0,
	opacity:1
	},
	0.02)
    
```
