const section = document.querySelector("section"),
    hireBtn = section.querySelector("#hireBtn"),
    closeBtn = section.querySelectorAll("#close");

hireBtn.addEventListener("click", () => {
    section.classList.add("show");
});

closeBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () => {
        section.classList.remove("show");
    });
});