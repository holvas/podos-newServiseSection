function toggleMenu() {
    const menu = document.getElementById('dropdownMenu'); // Знаходимо меню за ID
    if (!menu) {
        console.error('Елемент з ID "dropdownMenu" не знайдено.');
        return;
    }
    menu.classList.toggle('show'); // Додаємо або забираємо клас "show"
}
