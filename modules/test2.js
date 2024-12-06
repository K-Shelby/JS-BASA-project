export function UserNamme() {
    addName.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('addName', name);
        }
    });
    
    
    document.addEventListener('DOMContentLoaded', function() {
        const savedName = localStorage.getItem('addName');
        if (savedName) {
            nameInput.value = savedName;
        }
    });
}
UserNamme();