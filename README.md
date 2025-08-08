### Important! Thanks to Webflow, Gsap is free to use now with it's plugins like `SplitText`
Its good to see and know how it works under the hood plugins like this but its better to use original `SplitText` plugin

see: https://gsap.com/pricing/

# GSAP Split Text Tool

### Basic Usage
```javascript
	import { SplitText } from "./assets/splitText.js"

	const text = document.querySelector("h1.test")
	const splittedText = new SplitText(text) // or new SplitText("h1.test")
```

### And Animating with GSAP

```javascript
	import { gsap, TimelineLite } from "./assets/gsap/all.js"
	import { SplitText } from "./assets/splitText.js"

	const text = document.querySelector("h1.test")
	const splittedText = new SplitText(text) // or new SplitText("h1.test")

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
