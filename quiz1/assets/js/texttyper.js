const TextWriter = function (element, words) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = 1000
    this.type();
}

TextWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];

    this.txt = fulltxt.substring(0, this.txt.length + 1);

    this.element.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 30;

    if (this.txt === fulltxt) {
        typeSpeed = this.wait;
        this.txt = ""
        this.wordIndex++;
    }

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const element = document.querySelector('.randomizer');
    const words = ["Tired of work?", "Need refreshing?", "But don't know where to go?", "Balikpapan is the answer!"]
    new TextWriter(element, words);
}