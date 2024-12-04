// document.addEventListener("DOMContentLoaded", function () {
//     const serviceTitles = document.querySelectorAll(".service-title");

//     serviceTitles.forEach((title) => {
//         title.addEventListener("click", function () {
//             const details = this.nextElementSibling;
//             if (details && details.classList.contains("service-details")) {
//                 details.style.display = details.style.display === "block" ? "none" : "block";
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const serviceTitles = document.querySelectorAll(".service-title");

    serviceTitles.forEach((title) => {
        title.addEventListener("click", function () {
            const details = this.nextElementSibling;

            if (details && details.classList.contains("service-details")) {
                details.classList.toggle("open");
            }
        });
    });
});
