function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeStyle() {
    let text = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    let textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();

    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();
        if (sentences[i] !== "") {
            sentences[i] += "-Moo";
        }
    }
    textArea.value = sentences.join(". ");
}
