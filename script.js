var i = 0,
    text;
text = "JavaScript Exercises...";

function yaz() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(yaz, 100);
    }
}
yaz();