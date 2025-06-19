/*advanced editing for first name*/
document.addEventListener("DOMContentLoaded", function () {
   let firstnameInput = document.getElementById("firstname");
   let errorMessage = document.getElementById("errorFirstname");

   if (!firstnameInput || !errorMessage) {
       console.error("Error: firstname or errorFirstname not found in the document.");
       return;
   }

   firstnameInput.addEventListener("input", function () {
       let validPattern = /^[a-zA-Z'-]+$/;
       if (firstnameInput.value !== "" && !validPattern.test(firstnameInput.value)) {
           errorMessage.textContent = "Only letters, apostrophes, and dashes are allowed!";
           errorMessage.style.display = "block";
           firstnameInput.value = firstnameInput.value.replace(/[^a-zA-Z'-]/g, '');
       } else {
           errorMessage.textContent = "";
           errorMessage.style.display = "none";
       }
   });
});
// More advanced JS continues here...
