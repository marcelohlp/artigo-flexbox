const divFlexDirection = document.getElementById("div-flex-direction");
const spanFlexDirection = document.getElementById("span-flex-direction");
const row = document.getElementById("flex-direction-row");
const rowReverse = document.getElementById("flex-direction-row-reverse");
const column = document.getElementById("flex-direction-column");
const columnReverse = document.getElementById("flex-direction-column-reverse");

row.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "row";
    spanFlexDirection.textContent = "row";
});

rowReverse.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "row-reverse";
    spanFlexDirection.textContent = "row-reverse";
});

column.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "column";
    spanFlexDirection.textContent = "column";
});

columnReverse.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "column-reverse";
    spanFlexDirection.textContent = "column-reverse";
});