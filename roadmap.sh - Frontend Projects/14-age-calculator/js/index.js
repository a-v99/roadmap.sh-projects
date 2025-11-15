// Initialize datepicker
flatpickr("#birthdate", {
    dateFormat: "Y-m-d",
    maxDate: "today"
});

const { DateTime } = luxon;

document.getElementById("ageForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("birthdate").value;

    if (!input) {
        document.getElementById("result").textContent = "Please pick a date.";
        return;
    }

    const birth = DateTime.fromISO(input);

    if (!birth.isValid || birth > DateTime.now()) {
        document.getElementById("result").textContent = "Invalid date.";
        return;
    }

    const now = DateTime.now();
    const diff = now.diff(birth, ["years", "months", "days"]).toObject();

    document.getElementById("result").textContent =
        `You are ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days old.`;
});