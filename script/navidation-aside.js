const sections = document.querySelectorAll("section[id]");
const anchors = document.querySelectorAll(".aside-menu-list .aside-li");

window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        if (window.scrollY >= sectionTop) {
            currentId = section.id;
        }
    });

    anchors.forEach((li) => {
        const anchor = li.querySelector(".aside-anchor");
        li.classList.remove("active");
        if (anchor.getAttribute("href") === `#${currentId}`) {
            li.classList.add("active");
        }
    });
});
