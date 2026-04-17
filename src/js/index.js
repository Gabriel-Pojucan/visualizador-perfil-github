import { fetchGitHubUser, fetchGithubUserRepos } from './api.js';
import { validateUserInput } from './validation.js';
import { getSearchElements, renderUserProfile, showError } from './ui.js';

const { inputSearch, btnSearch } = getSearchElements();

btnSearch.addEventListener('click', async () => {
    try {
        const userName = validateUserInput(inputSearch.value);
        const userRepos = await fetchGithubUserRepos(userName);
        const userData = await fetchGitHubUser(userName);
        console.log(userRepos);

        renderUserProfile(userData, userRepos, renderUserProfile);
    } catch (error) {
        console.error('Erro:', error);
        showError(error.message);
    }
});
