const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName){

        profileResults.innerHTML = `<p class ="loading">Carregando...</p>`;
        try{
        const response = await fetch(`${baseUrl}/users/${userName}`)

        if(!response.ok){
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
            profileResults.innerHTML ="";
            return;
        }
        const userData = await response.json();
        console.log(userData)
        profileResults.innerHTML = `<div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio || 'Não possui biografia cadastrada😥.'}</p>
            <div>
            
            <div>`

        }catch (error){
            console.error('Erro ao buscar o usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML ="";
        }
}else{
    alert('Por favor, digite um nome de usuário do GitHub para pesquisar.');}
})