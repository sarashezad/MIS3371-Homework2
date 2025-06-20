
document.addEventListener("DOMContentLoaded", function () {
    // Date validation for DOB
    const dob = document.getElementById("dob");
    const today = new Date();
    const maxDate = today.toISOString().split("T")[0];
    const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate()).toISOString().split("T")[0];
    dob.max = maxDate;
    dob.min = minDate;

    // Password validation
    document.getElementById("profileForm").addEventListener("submit", function (e) {
        const pwd = document.getElementById("password").value;
        const cpwd = document.getElementById("confirmpass").value;
        const uid = document.getElementById("userid").value.toLowerCase();
        document.getElementById("userid").value = uid;

        const errorBox = document.getElementById("errorPassword");
        errorBox.textContent = "";

        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,30}$/;

        if (!pwdRegex.test(pwd)) {
            errorBox.textContent = "Password must include uppercase, lowercase, number, special character (8–30 chars).";
            e.preventDefault();
        } else if (pwd !== cpwd) {
            errorBox.textContent = "Passwords do not match.";
            e.preventDefault();
        } else if (pwd.toLowerCase().includes(uid)) {
            errorBox.textContent = "Password cannot include the User ID.";
            e.preventDefault();
        }
    });
});

function reviewForm() {
    const form = document.getElementById('profileForm');
    let output = "<h3>PLEASE REVIEW THIS INFORMATION</h3><ul>";

    const formData = new FormData(form);
    const seen = new Set();

    for (let [key, value] of formData.entries()) {
        if (seen.has(key)) continue;
        const values = formData.getAll(key);
        output += `<li><strong>${key}:</strong> ${values.join(", ")}</li>`;
        seen.add(key);
    }

    const salary = document.getElementById("salaryRange").value;
    output += `<li><strong>Salary:</strong> $${parseInt(salary).toLocaleString()}</li>`;
    document.getElementById("reviewBox").innerHTML = output + "</ul>";
}
