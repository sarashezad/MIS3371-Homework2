// script.js
function reviewForm() {
    const form = document.getElementById('registrationForm');
    let output = "<h2>PLEASE REVIEW THIS INFORMATION</h2><ul>";
    for (let element of form.elements) {
        if (element.type !== "button" && element.type !== "submit" && element.type !== "reset") {
            output += `<li><strong>${element.name}:</strong> ${element.value}</li>`;
        }
    }
    output += "</ul>";
    document.getElementById("reviewSection").innerHTML = output;
}
