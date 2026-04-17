const profileResults = document.querySelector('.profile-results');

export function renderUserProfile(userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Nenhuma bio disponível 😢.'}</p> 
            </div>
        </div>
        
        <div class="profile-counters">
            <div class="followers">
                <h4>👥Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function clearResults() {
    profileResults.innerHTML = '';
}

export function showError(message) {
    alert(message);
    clearResults();
}

export function getSearchElements() {
    return {
        inputSearch: document.getElementById('input-search'),
        btnSearch: document.getElementById('btn-search')
    };
}
