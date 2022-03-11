const $ = (id) => document.querySelector(id);
const $_ = (id) => document.querySelectorAll(id);

let blogList = [""];

$_(".save-btn").forEach((el) => {
  el.addEventListener("click", () => {
    blogList[0] = $("#editbox").value;
  });
});

// function save() {
//   el.addEventListener("click", () => {
//     console.log($("#editbox").value);
//     blogList[0] = $("#editbox").value;
//     console.log(blogList);
//   });
// }

$_(".cancel-btn").forEach((el) => {
  el.addEventListener("click", () => {
    $("#editbox").value = blogList[0];
  });
});

// function cancel() {
//   el.addEventListener("click", () => {
//     $("#editbox").value = blogList[0];
//   });
// }
