const lista_amigos = document.getElementById('amigos');
const add_amigo = document.getElementById('add-amigo');
const forms = document.getElementById('form');
const cadastrar = document.getElementById('button');
const user_name = document.getElementById('nome');
const user_last_name = document.getElementById('sobrenome');
const user_number = document.getElementById('numero');


if (lista_amigos.innerText === '') {
    lista_amigos.innerHTML = '<p id="semAmigo">Nenhum amigo</p>';
    let sem_amigo = document.getElementById('semAmigo');
}

add_amigo.addEventListener('click', () => {
    let sem_amigo = document.getElementById('semAmigo');
    sem_amigo.style.display = 'none';
    forms.style.display = 'flex';

    //     lista_amigos.innerHTML = lista_amigos.innerHTML + `<div class="card_amigo">
    //     <div class="foto">
    //         <img src="img/default-amigo.jpg" alt="foto">
    //     </div>
    //     <div class="dados">
    //         <p><strong>Nome:</strong> name</p>
    //         <p><strong>Sobrenome:</strong> last_name</p>
    //         <p><strong>Contato:</strong> number</p>
    //     </div>
    // </div>`;


});

cadastrar.addEventListener('click', () => {
    if ((user_name.value != '') && (user_last_name.value != '') && (user_number.value != '')) {
        let new_name = user_name.value;
        let new_last_name = user_last_name.value;
        let new_number = user_number.value;

        user_name.value = ''; 
        user_last_name.value = ''; 
        user_number.value = ''; 

        forms.style.display = 'none';
        lista_amigos.innerHTML = lista_amigos.innerHTML + `<div class="card_amigo">
    <div class="foto">
        <img src="img/default-amigo.jpg" alt="foto">
    </div>
    <div class="dados">
        <p><strong>Nome:</strong> ${new_name}</p>
        <p><strong>Sobrenome:</strong> ${new_last_name}</p>
        <p><strong>Contato:</strong> ${new_number}</p>
    </div>
</div>`;
    }
})