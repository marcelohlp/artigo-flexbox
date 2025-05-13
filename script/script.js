const divFlexDirection = document.getElementById("div-flex-direction");
const row = document.getElementById("flex-direction-row");
const rowReverse = document.getElementById("flex-direction-row-reverse");
const column = document.getElementById("flex-direction-column");
const columnReverse = document.getElementById("flex-direction-column-reverse");

row.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "row";
});

rowReverse.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "row-reverse";
});

column.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "column";
});

columnReverse.addEventListener("click", () => {
    divFlexDirection.style.flexDirection = "column-reverse";
});