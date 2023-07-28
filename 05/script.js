const boxContainer = document.getElementById('container');
const lista_amigos = document.getElementById('amigos');
const forms = document.getElementById('form');
const cadastrar = document.getElementById('button');
const user_name = document.getElementById('nome');
const user_last_name = document.getElementById('sobrenome');
const user_number = document.getElementById('numero');


if (lista_amigos.innerText === '') {
    lista_amigos.innerHTML = '<p id="semAmigo">Nenhum amigo</p>';
    let sem_amigo = document.getElementById('semAmigo');
}

cadastrar.addEventListener('click', () => {
    if ((user_name.value != '') && (user_last_name.value != '') && (user_number.value != '')) {

        let sem_amigo = document.getElementById('semAmigo');
        sem_amigo.style.display = 'none';
        lista_amigos.style.backdropFilter = 'blur(3px)';

        let new_name = user_name.value;
        let first = new_name[0];
        let new_last_name = user_last_name.value;
        let new_number = user_number.value;

        user_name.value = '';
        user_last_name.value = '';
        user_number.value = '';

        lista_amigos.innerHTML = lista_amigos.innerHTML + `<div class="card_amigo">
    <div class="foto">
        <h1>${first}</h1>
    </div>
    <div class="dados">
        <p><strong>Nome:</strong> ${new_name}</p>
        <p><strong>Sobrenome:</strong> ${new_last_name}</p>
        <p><strong>Contato:</strong> ${new_number}</p>
    </div>
</div>`;
    }
})