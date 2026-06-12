export async function fetchGithubUser(userName){
    const baseUrl = 'https://api.github.com';
    const response = await fetch(`${baseUrl}/users/${userName}`)

            if (!response.ok) {
                throw new Error('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
            }
            return await response.json();
}