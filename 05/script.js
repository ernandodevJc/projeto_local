const lista_amigos = document.getElementById('amigos');
const add_amigo = document.getElementById('add-amigo');

if (lista_amigos.innerText === '') {
    lista_amigos.innerHTML = '<p id="semAmigo">Nenhum amigo</p>';
    let sem_amigo = document.getElementById('semAmigo');
}

add_amigo.addEventListener('click', () => {
    let sem_amigo = document.getElementById('semAmigo');
    sem_amigo.style.display = 'none';

    lista_amigos.innerHTML = lista_amigos.innerHTML + `<div class="card_amigo">
    <div class="foto">
        <img src="img/default-amigo.jpg" alt="foto">
    </div>
    <div class="dados">
        <p><strong>Nome:</strong> name</p>
        <p><strong>Sobrenome:</strong> last_name</p>
        <p><strong>Contato:</strong> number</p>
    </div>
</div>`;
})