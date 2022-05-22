
console.log("test");
// runs on root
if (localStorage.getItem("dark-mode") === "true") {
    document.documentElement.classList.toggle('dark-mode');

}