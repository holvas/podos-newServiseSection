const translations = {
    pl: {
        "home-link": "Strona główna",
        "about-link": "O nas",
        "services-link": "Usługi",
        "contact-link": "Kontakt",
        "home-title": "Witamy w Olena's StepSoft Studio",
        "home-description": "Profesjonalna pielęgnacja stóp. Twoje zdrowie to nasza troska.",
        "about-title": "O nas",
        "about-description": "Nasze studio specjalizuje się w podologii, oferując usługi takie jak leczenie odcisków, pielęgnację paznokci oraz problemów ze stopami. Korzystamy z nowoczesnych technologii, zapewniając indywidualne podejście do każdego klienta.",
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
        "footer-text": "© 2024 Olena's StepSoft Studio. Wszystkie prawa zastrzeżone."
    },
    uk: {
        "home-link": "Головна",
        "about-link": "Про нас",
        "services-link": "Послуги",
        "contact-link": "Контакт",
        "home-title": "Ласкаво просимо до Olena's StepSoft Studio",
        "home-description": "Професійний догляд за ногами. Ваше здоров'я – наша турбота.",
        "about-title": "Про нас",
        "about-description": "Наша студія спеціалізується на подології, пропонуючи послуги, такі як лікування мозолів, догляд за нігтями та проблемами з ногами. Ми використовуємо сучасні технології, забезпечуючи індивідуальний підхід до кожного клієнта.",
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
        "footer-text": "© 2024 Olena's StepSoft Studio. Всі права захищено."
    }
};

function switchLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
        const key = element.id;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Change the page language attribute
    document.documentElement.lang = language;
}

// Set default language to Polish
switchLanguage('pl');
