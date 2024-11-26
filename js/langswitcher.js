const translations = {
    pl: {
        "home-link": "Strona główna",
        "about-link": "O nas",
        "services-link": "Usługi",
        "contact-link": "Kontakt",
        "home-title": "PodOS - gabinet podologiczny Oleny Stepaniuk",
        "home-description": "Serdecznie zapraszamy na konsultację, podczas której szczegółowo zidentyfikujemy Twój problem, opracujemy plan leczenia i dobierzemy odpowiedni harmonogram zabiegów.",
        "home-description-2": "W gabinecie podologicznym „PodOS” wszystkie Twoje „czarne” problemy staną się „białym” rozwiązaniem!",
        "about-title": "O nas",
        "about-description": "Specjalizujemy się w podologii od wielu lat, oferując usługi takie jak leczenie odcisków, leczenie wrastających paznokci, pedicure medyczny, pielęgnację paznokci oraz inne problemów ze stopami. Korzystamy z nowoczesnych technologii i profesionalnego uządzenia, zapewniając indywidualne podejście do każdego klienta. Specjaliści naszego gabinetu podologicznego „PodOS” ukończyli edukację w zakresie podologii oraz certyfikację w swojej specjalności.",
        "about-description-2": "Pracujemy wyłącznie zgodnie z normami sanitarno-epidemiologicznymi (wszystkie narzędzia używane podczas zabiegów po każdym zabiegu poddawane są obowiązkowej sterylizacji termicznej; po każdym zabiegu wszystkie środki higieny osobistej wymieniane są na nowe, dezynfekowane profesjonalnymi środkami, także po każdym zabiegu, wszystkie produkty jednorazowe (takie jak: rękawiczki jednorazowe, ręczniki i serwetki itp.) użyte podczas zabiegów podlegają utylizacji) i zgodnie z obowiązującymi przepisami BHP. Dzięki temu nasi klienci mogą czuć się bezpiecznie.",
        "services-title": "Nasze usługi",
        "service-1-title": "Leczenie odcisków",
        "service-1-description": "Szybkie i skuteczne leczenie odcisków oraz nagniotków.",
        "service-2-title": "Korekcja paznokci",
        "service-2-description": "Profesjonalna pielęgnacja wrastających paznokci.",
        "service-3-title": "Pielęgnacja stóp",
        "service-3-description": "Profilaktyka infekcji grzybiczych i nawilżanie stóp.",
        "contact-title": "Kontakt",
        "contact-description": "Skontaktuj się z nami, aby umówić wizytę lub dowiedzieć się więcej o naszych usługach.",
        "name-label": "Imię i nazwisko:",
        "phone-label": "Numer telefonu:",
        "email-label": "Adres e-mail:",
        "message-label": "Wiadomość:",
        "submit-btn": "Wyślij",
        "footer-kontakt-text": "Adres:",
        "footer-kontakt-text-1": "53-680 Wrocław, ul. Braniborska 61/13",
        "footer-kontakt-text-2": "(budynek Legnicka Residence, 2 piętro, Gabinet przy studii 'Pracownia fryzur').",
        "footer-text": "© 2024 PodOS. Wszystkie prawa zastrzeżone.",
        "footer-social-1": "Śledź nas:",
        
    },
    uk: {
        "home-link": "Головна",
        "about-link": "Про нас",
        "services-link": "Послуги",
        "contact-link": "Контакт",
        "home-title": "PodOS - Кабінет подології Олени Степанюк",
        "home-description": "Запрошуємо Вас на консультацію, під час якої ми детально визначимо Вашу проблему, складемо схему лікування та підберемо відповідний графік відвідування процедур.",
        "home-description-2": "У кабінеті подології «PodOS» всі Ваші «чорні» проблеми стануть «білими» рішеннями!",
        "about-title": "Про нас",
        "about-description": "Протягом багатьох років ми спеціалізуємося на подології, пропонуючи такі послуги, як лікування мозолів, лікування врослого нігтя, медичний педикюр, догляд за нігтями та інші проблеми зі стопами. Ми використовуємо сучасні технології та професійне обладнання, забезпечуючи індивідуальний підхід до кожного клієнта. Фахівці нашого подологічного кабінету «PodOS» пройшли навчання з подології та отримали сертифікати за фахом.",
        "about-description-2": "Ми працюємо виключно відповідно до санітарно-епідеміологічних норм (усі інструменти, які використовуються під час обробок, підлягають обов'язковій термічній стерилізації після кожної обробки; після кожної процедури всі засоби особистої гігієни замінюються на нові, дезінфікуються професійними засобами, також після кожної обробки, всі одноразові продукти (такі як: одноразові рукавички, рушники та серветки тощо), які використовувалися під час лікування, утилізуються) відповідно до застосовних правил охорони здоров’я та безпеки. Завдяки цьому наші клієнти можуть почуватися в безпеці.",
        "services-title": "Наші послуги",
        "service-1-title": "Лікування мозолів",
        "service-1-description": "Швидке та ефективне лікування мозолів та натоптишів.",
        "service-2-title": "Корекція нігтів",
        "service-2-description": "Професійний догляд за вростаючими нігтями.",
        "service-3-title": "Догляд за ногами",
        "service-3-description": "Профілактика грибкових інфекцій та зволоження ніг.",
        "contact-title": "Контакт",
        "contact-description": "Зв'яжіться з нами, щоб записатися на прийом або дізнатися більше про наші послуги.",
        "name-label": "Ім'я та прізвище:",
        "phone-label": "Номер телефону:",
        "email-label": "Електронна пошта:",
        "message-label": "Повідомлення:",
        "submit-btn": "Відправити",
        "footer-text": "© 2024 PodOS. Всі права захищено."
    }
};

// Функція для перемикання мови
function switchLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
        if (!translations[language]) {
            console.error(`Translation for language "${language}" not found.`);
            return;
        }
    });

    // Зберігаємо вибір мови
    localStorage.setItem('language', language);

    // Змінюємо активний стан кнопки
    updateActiveLanguageButton(language);
}

// Функція для оновлення активного стану кнопок
function updateActiveLanguageButton(selectedLanguage) {
    const languageButtons = document.querySelectorAll('.language-switcher button');
    languageButtons.forEach(button => {
        if (button.dataset.value === selectedLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Ініціалізація мови при завантаженні сторінки
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'pl'; // За замовченням pl
    switchLanguage(savedLanguage);
}

// Викликаємо ініціалізацію мови при завантаженні
let theme = 'dark';
window.addEventListener('DOMContentLoaded', initializeLanguage);
if (typeof localStorage !== "undefined") {
    localStorage.setItem('theme', theme);
} else {
    console.warn("localStorage is not available.");
}

