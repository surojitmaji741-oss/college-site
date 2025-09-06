const popup = document.querySelector(".popup");
const x = document.querySelector(".title h5");
window.addEventListener("load", () => {
  popup.classList.add("showpopup");
  popup.childNodes[1].classList.add("showpopup");
  // loadDepartments();
});
x.addEventListener("click", () => {
  popup.classList.remove("showpopup");
  popup.childNodes[1].classList.remove("showpopup");
});
function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
function getcourse(deptcode) {
  let coursedd = document.forms["deptform"].course;
  if (deptcode.trim() === "") {
    coursedd.disabled = true;
    coursedd.selectedIndex = 0;
    return false;
  }
  fetch(`course.php?deptcode=${deptcode}`)
    .then((response) => response.json())
    .then(function (course) {
      let out = "";
      out += '<option value="">Choose a course</option>';
      for (let cours of course) {
        out += `<option value="${cours.course_name}">${cours.course_name}</option>`;
      }
      coursedd.innerHTML = out;
      coursedd.disabled = false;
    })
    .catch((error) => console.error("Error:", error));
}
// function loadDepartments() {
//   fetch("getdepartments.php")
//     .then((response) => response.json())
//     .then((departments) => {
//       let deptDropdown = document.getElementById("dept-select");
//       let out = '<option value="">Choose a department</option>';
//       for (let dept of departments) {
//         out += `<option value="${dept.deptcode}">${dept.dept_name}</option>`;
//       }
//       deptDropdown.innerHTML = out;
//     })
//     .catch((error) => console.error("Error loading departments:", error));
// }
