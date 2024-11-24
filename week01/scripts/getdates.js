const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear();

let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastModified');


displayContent.textContent = `Last Modification: ${dateLastModified}`;