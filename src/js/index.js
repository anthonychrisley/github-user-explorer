import { fetchGithubUser } from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub para pesquisar.');
        profileResults.innerHTML = "";
        return;
    }

    profileResults.innerHTML = `<p class ="loading">Carregando...</p>`;
        try {
            const userData = await fetchGithubUser(userName);
            renderProfile(userData, profileResults);

        } catch (error) {
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = "";
        }
})