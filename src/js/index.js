import { fetchGitHubUser } from './api.js';
import { validateUserInput } from './validation.js';
import { getSearchElements, renderUserProfile, showError } from './ui.js';

const { inputSearch, btnSearch } = getSearchElements();

btnSearch.addEventListener('click', async () => {
    try {
        const userName = validateUserInput(inputSearch.value);
        const userData = await fetchGitHubUser(userName);
        renderUserProfile(userData);
    } catch (error) {
        console.error('Erro:', error);
        showError(error.message);
    }
});
