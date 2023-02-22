
// Blauwdruk met objecten

class ColorCard{
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    // Word uitgevoerd als er iets nieuws word aangemaakt

    constructor(newId, newColor, addToList) {
        /*Properties voor het vakje */

        // Veranderd het id naar het id dat hij mee krijgt.
        this.id = newId;
         // Veranderd de color naar de kleur die hij mee krijgt.
        this.color = newColor;
         // zorgt ervoor dat hij in de nieuwe ul komt.
        this.addToList = addToList;

        // HTMLElement renderen van JS naar html

        // maakt een li tag aan in de ul
        this.htmlElement = document.createElement("li");
        // voegt de class colors__color toe aan de li
        this.htmlElement.classList = "colors__color";

        // maakt een figure aan
        this.circle = document.createElement("figure");
        // voegt een class toe
        this.circle.classList = "colors__circle";
        // veranderd de background color naar de nieuwe binnen gekregen kleur
        this.circle.style.background = this.color;

        // maakt een p tagg aan
        this.text = document.createElement("p");
        // veranderd de text naar copied in de p
        this.text.innerText = "Copied";
        // voegt een class toe aan de p tag
        this.text.classList = "colors__text";
        
        // wanneer je klikt op een kaartje speelt hij de functie af
        this.htmlElement.onclick = this.onHTMLElementClicked;

        // Render word uitgevoerd
        this.render();

    }

    // Fucntie voor wanneer er op het kaartje geklikt word op een gare manier omdat this. anders niet werkt
    onHTMLElementClicked = () => {
        // voegt de colors__circle--selected class figure toe
        this.circle.classList.add("colors__circle--selected");
        // veranderd de title van het venster naar de current gekopieerde kleur
        document.title = this.color;
        // kopieerd de current geklikte kleur naar ctrl c
        window.navigator.clipboard.writeText(this.color);
    }

    // Render word uitgevoerd

    render() {
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        this.addToList.appendChild(this.htmlElement);
    }
}

// Blauwdruk met objecten


class ColorList{
    id;
    htmlElement;

    // Word uitgevoerd als er iets nieuws word aangemaakt

    constructor(newId) {
        // Veranderd het id naar het id dat hij mee krijgt.
        this.id = newId;
        // maakt een ul aan in het htmlElement
        this.htmlElement = document.createElement("ul");
        // vernaderd het htmlElement id naar het nieuwe id
        this.htmlElement.id = this.id;
        // voegt class colors toe
        this.htmlElement.classList.add("colors");

    // Render word uitgevoerd

        this.render();
    }

    // Render word uitgevoerd

    render(){
        document.querySelector("body").appendChild(this.htmlElement);
    }
    
}
// Maakt een variable aan waar hij alles in js--colors zet
const colorList = new ColorList("js--colors");

// Blauwdruk met objecten

class HSLGenerator{
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;

    // Word uitgevoerd als er iets nieuws word aangemaakt

    constructor(){
        this.generateHSL();
    }
    
    generateHue = function () {
        // genereerd een randomhue kleur
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    generateSaturation = function () {
        //genereerd een randomSaturation 
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    }

    generateLightness = function () {
        
//        genereerd een randomLightness kleur
        this.randomLightness = Math.floor( Math.random() * (100 - 1) + 11) + "%";
    }

    // maakt functie voor de generateHSL
    generateHSL = function () {
        // voert generateHue function uit
        this.generateHue();
        // voert generateSaturation function uit
        this.generateSaturation();
        // voert generateLightness function uit
        this.generateLightness();
        // vult de hsl in met de random generate nummers
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`
    }
}

// Blauwdruk met objecten

class App{
    id;
    colorList;
    hslGenerator;

    // Word uitgevoerd als er iets nieuws word aangemaakt

    constructor(newId) {
        // Veranderd het id naar het id dat hij mee krijgt.
        this.id = newId;
        // Veranderd de lege colorlist naar de colorlist met zijn id
        this.colorList = new ColorList(this.id);
        // Pakt de functie van this.hslGeneratoren zet die in zijn this.hslGenerator
        this.hslGenerator = new HSLGenerator();
        // roept de functie generateColorCards aan
        this.generateColorCards();
    } 

    //Dit is een functie op een aparte manier want anders werkt de this. niet
    generateColorCards = () => {
        // een loop die tot de 100 gaat
        for(let i = 1; i <= 100; i++){
            // voerd de functie generatehsl uit
            this.hslGenerator.generateHSL();
            // zet de random generated kleuren bij de juiste kaartjes
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}

// variable waarmee je alles aanroept en dus ook meerdere 100 kaartjes kan doen door de herbruikbare code
const app = new App("js--app");