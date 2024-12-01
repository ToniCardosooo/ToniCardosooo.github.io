document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Months are zero-indexed
    const currentYear = today.getFullYear(); // Months are zero-indexed

    // const currentDay = 5;
    // const currentMonth = 12; // Months are zero-indexed
    // const currentYear = 2024; // Months are zero-indexed

    for (let i = 1; i <= 24; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        if (currentYear >= 2025 || (currentYear == 2024 && currentMonth == 12 && currentDay >= i)) {
            box.addEventListener("click", () => {
                window.location.href = `days/day${i}.html`;
            });
        }
        else {
            box.classList.add("locked");
        }

        box.innerText = i;
        calendar.appendChild(box);
    }
});
