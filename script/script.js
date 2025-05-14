const divFlexDirection = document.getElementById("div-flex-direction");
const spanFlexDirection = document.getElementById("span-flex-direction");
const flexDirectionOptions = ["row", "row-reverse", "column", "column-reverse"]

flexDirectionOptions.forEach(direction => {
    document.getElementById(`flex-direction-${direction}`).addEventListener("click", () => {
        divFlexDirection.style.flexDirection = direction;
        spanFlexDirection.textContent = direction;
    });
});

const divJustifyContent = document.getElementById("div-justify-content");
const spanJustifyContent = document.getElementById("span-justify-content");
const justifyContentOptions = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]

justifyContentOptions.forEach(justify => {
    document.getElementById(`justify-content-${justify}`).addEventListener("click", () => {
        divJustifyContent.style.justifyContent = justify;
        spanJustifyContent.textContent = justify;
    })
})
