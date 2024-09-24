document.getElementById("toggleButton").onclick = function() {
    var textElement = document.getElementById("textElement");
    textElement.textContent = textElement.textContent === "This is the original text" ? "This is the changed text" : "This is the original text";
    this.textContent = this.textContent === "Change" ? "Show Original" : "Change";
};
