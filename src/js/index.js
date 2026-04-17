const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {

        try {
            // aqui você pode adicionar a lógica para usar o valor do input
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                profileResults.innerHTML = ''; // Limpa os resultados anteriores
                return;
            }

            const userData = await response.json();

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Nenhuma bio disponível 😢.'}</p> 
                    <p>Seguidores: ${userData.followers}</p>
                    <p>Seguindo: ${userData.following}</p>
                </div>
            </div>`;

        } catch (error) {
            console.error('Erro ao buscar o usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = ''; // Limpa os resultados anteriores
        }

    } else {
        alert('Por favor, digite um nome de usuário do Github.')
    }
});
