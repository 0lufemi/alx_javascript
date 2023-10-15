function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const body = document.body;

    const para = document.createElement("p");
    para.textContent = "Welcome Holberton!";
    body.appendChild(para);

    const btnSpooky = document.createElement("button");
    btnSpooky.textContent = "Spooky";
    btnSpooky.onclick = spooky;
    body.appendChild(btnSpooky);

    const btnDarkMode = document.createElement("button");
    btnDarkMode.textContent = "Dark mode";
    btnDarkMode.onclick = darkMode;
    body.appendChild(btnDarkMode);

    const btnScreamMode = document.createElement("button");
    btnScreamMode.textContent = "Scream mode";
    btnScreamMode.onclick = screamMode;
    body.appendChild(btnScreamMode);
}
main();
