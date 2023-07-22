const textdiv = document.getElementById("info");
const buttonmod = document.getElementById("button");

textdiv.innerHTML = "<p>Ernando da Silva Alves Matias</p><p>17 anos</p><p>88997244032</p>"

buttonmod.addEventListener('click', () => {
    if (textdiv.innerHTML === "<p>Ernando da Silva Alves Matias</p><p>17 anos</p><p>88997244032</p>") {
        oldDiv = "";
    } else {
        oldDiv = "<p>Ernando da Silva Alves Matias</p><p>17 anos</p><p>88997244032</p>";
    }

    return textdiv.innerHTML = oldDiv;
});

buttonmod.addEventListener('click', () => {
    const oldText = buttonmod.innerText;
    return button.innerText = oldText === "ESCONDER"? "MOSTRAR" : "ESCONDER"; 
});