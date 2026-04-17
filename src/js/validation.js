export function validateUserInput(userName) {
    if (!userName || userName.trim() === '') {
        throw new Error('Por favor, digite um nome de usuário do Github.');
    }

    return userName.trim();
}