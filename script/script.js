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
    });
});

const divAlignItems = document.getElementById("div-align-items");
const spanAlignItems = document.getElementById("span-align-items");
const alignItemsOptions = ["stretch", "flex-start", "flex-end", "center", "baseline"]

alignItemsOptions.forEach(align => {
    document.getElementById(`align-items-${align}`).addEventListener("click", () => {
        divAlignItems.style.alignItems = align;
        spanAlignItems.textContent = align;
    });
});

const divAlignContent = document.getElementById("div-align-content");
const spanAlignContent = document.getElementById("span-align-content");
const alignContentOptions = ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around"];

alignContentOptions.forEach(align => {
    document.getElementById(`align-content-${align}`).addEventListener("click", () => {
        divAlignContent.style.alignContent = align;
        spanAlignContent.textContent = align;
    });
});
