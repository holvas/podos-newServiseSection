// Функція для перемикання теми
function toggleTheme(theme) {
    const body = document.body;

    // Видаляємо обидві теми перед застосуванням нової
    body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'light') {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // зберігаємо вибір користувача
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // зберігаємо вибір користувача
    }
}

// Перевіряємо вибір теми при завантаженні сторінки
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme'); // Додаємо світлу тему за замовчуванням
    }
};
