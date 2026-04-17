const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) {
            throw new Error(`Usuário não encontrado. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Erro ao buscar o usuário: ${error.message}`);
    }
}
