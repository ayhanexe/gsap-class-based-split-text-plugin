// coded: Ayhanexe with <3
// I do not care about money
// This code is fully free
// use it as you want ;)

// This plugin is not supporting line wrap..... yet ;)


// Code Starting


// Export The Class
export class SplitText {
    constructor(element, modes) {
        // Options
        this.options = {
            WORDS: 'words',
            CHARS: 'chars'
        }

        // Properties
        this.words = []
        this.chars = []

        // Get given element with jQuery
        this.elements = $(element)

        // Modes like ['words', 'chars']
        this.modes = modes

        // Init Wrap Functions
        this.init()
    }

    // Word Split Function
    splitWords(element) {
        let nodes = []
        const exported_nodes = []

        // Get the text nodes of given `element`
        const textNodes = this.searchTextNode(element)

        // Empty element's content
        $(element).empty()

        // Filter Each Text Nodes
        $(textNodes).each((index, node) => {
            // Split Text to words
            const splittedWords = node.textContent.split(" ")

            // Add Splitted Words Array WhiteSpace
            $(splittedWords.join(" @AYHAN_SPLITTED@").split("@AYHAN_SPLITTED@")).each((index, word) => {
                let new_word = ""
                if(word.slice(-1) == " ") {
                    new_word = word.trim()
                    nodes.push(new_word)
                    nodes.push(" ")
                }
                else {
                    nodes.push(word.trim())
                }
            })
        })

        // Node Loop
        $(nodes).each((index, node) => {
            // If Node's last character is whitespace
            if (node.slice(-1) == " ") {
                $(element).append(" ")
            }

            // Else
            else {
                // Create div
                const div = document.createElement('div')

                // Create text node
                const text = document.createTextNode(node)

                // Change Div's Style
                $(div).css({
                    'position':'relative',
                    'display': 'inline-block'
                })
                // Append text to div
                .append(text)

                // Append Div To Given Element
                $(element).append(div)
            
                // Add Div to exported_nodes variable
                exported_nodes.push(div)
            }
        })
        
        // Return exported_nodes Variable
        return exported_nodes

    }

    // Split Chars Function
    splitChars(element) {
        // Nodes Array Variable
        let nodes = []
        // Get Text Nodes Of Given Element
        const textNodes = this.searchTextNode(element)

        // Kill what's inside the element
        $(element).empty()

        // Paster - Puldan Baha => Listen it, good music ;)

        // Filter Each Nodes With "each" Loop
        $(textNodes).each((index, node) => {
            // Split node's text into characters
            const splittedChars = node.textContent.split("")

            // Each Loop
            $(splittedChars).each((splittedIndex, splittedChar) => {
                // Create Div Element
                let div = document.createElement('div')

                // Create TextNode Of Div Element
                const text = document.createTextNode(splittedChar)
                // Same things as before
                $(div).css({
                    'position': 'relative',
                    'display': 'inline-block'
                })
                    .append(text)

                nodes.push(div)
            })
        })

        // Same things as before
        $(nodes).each((index, node) => {

            if (node.textContent.slice(-1) == " ") {
                $(element).append(" ")

                nodes.splice(index, 0)
            } else {
                $(element).append(node)
            }
        })

        return nodes
    }

    // Text Node Search Thing
    searchTextNode(element) {
        // Text Nodes Array
        let textNodes = []

        // Loop Element's children
        $(element).contents().each((index, node) => {
            // If element is text node
            if (node.nodeName == "#text") {
                // if text node isn't whitespace push node to textNodes Array or Who Cares?!
                node.textContent != " " ? textNodes.push(node) : null
            }
            // Else if there is other node
            else {
                // Search other node for text nodes again
                textNodes = textNodes.concat(this.searchTextNode(node))
            }
        })
        // And return all textNodes
        return textNodes
    }

    // Init Function
    init() {
        // Elements each loop
        $(this.elements).each((index, element) => {
            // If Mode option given the this.options.WORDS
            if (this.modes.includes(this.options.WORDS)) {
                // push the returned value of this.splitWords function to this.words property
                this.words.push(...this.splitWords(element))
            }
            // If Mode option given the this.options.CHARS
            if (this.modes.includes(this.options.CHARS)) {
                // If there is this.words
                if (this.words.length > 0) {
                    // Loop the words
                    // Because words are wrapped
                    // And Chars must be wrapped word's child
                    $(this.words).each((index, word) => {
                        this.chars.push(...this.splitChars(word))
                    })
                }
                // Else run default split char function
                else {
                    this.chars.push(...this.splitChars(element))
                }
            }
        })
    }
}