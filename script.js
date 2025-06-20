
function reviewForm() {
    const form = document.getElementById('profileForm');
    let output = "<h3>Review Your Information</h3><ul>";

    const formData = new FormData(form);
    const seen = new Set();

    for (let [key, value] of formData.entries()) {
        if (seen.has(key)) continue;
        const values = formData.getAll(key);
        output += `<li><strong>${key}:</strong> ${values.join(", ")}</li>`;
        seen.add(key);
    }

    const painLevel = document.getElementById("painlevel").value;
    output += `<li><strong>Pain Level:</strong> ${painLevel}</li>`;

    document.getElementById("reviewBox").innerHTML = output + "</ul>";
}
