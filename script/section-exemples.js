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

const divFlexWrap = document.getElementById("div-flex-wrap");
const spanFlexWrap = document.getElementById("span-flex-wrap");
const flexWrapOptions = ["nowrap", "wrap", "wrap-reverse"];

flexWrapOptions.forEach(wrap => {
    document.getElementById(`flex-wrap-${wrap}`).addEventListener("click", () => {
        divFlexWrap.style.flexWrap = wrap;
        spanFlexWrap.textContent = wrap;
    })
});

const boxSelfAlign = document.getElementById("box-align-self");
const spanSelfAlign = document.getElementById("span-align-self");
const selfAlignOptions = ["auto", "flex-start", "flex-end", "center", "stretch"];

selfAlignOptions.forEach(align => {
    document.getElementById(`align-self-${align}`).addEventListener("click", () => {
        boxSelfAlign.style.alignSelf = align;
        if (align === "stretch") {
            boxSelfAlign.style.aspectRatio = "unset";
        } else {
            boxSelfAlign.style.aspectRatio = "1 / 1"
        };
        spanSelfAlign.textContent = align;
    })
})

const spanOrderBlue = document.getElementById("span-order-blue");
const spanOrderRed = document.getElementById("span-order-red");
const spanOrderGreen = document.getElementById("span-order-green");
const boxBlueOrder = document.getElementById("box-blue-order");
const boxRedOrder = document.getElementById("box-red-order");
const boxGreenOrder = document.getElementById("box-green-order");

const orders = {
    html: ["0", "0", "0"],
    blue: ["0", "1", "1"],
    red: ["1", "0", "1"],
    green: ["1", "1", "0"]
};

const updateOrder = (values) => {
    const [blue, red, green] = values;
    spanOrderBlue.textContent = blue;
    spanOrderRed.textContent = red;
    spanOrderGreen.textContent = green;
    boxBlueOrder.style.order = blue;
    boxRedOrder.style.order = red;
    boxGreenOrder.style.order = green;
};

["html", "blue", "red", "green"].forEach(order => {
    const button = document.getElementById(`order-${order}`);
    if (button) {
        button.addEventListener("click", () => {
            const values = orders[order];
            if (values) updateOrder(values);
        });
    }
});

const boxFlexGrow = document.getElementById("box-flex-grow");
const spanFlexGrow = document.getElementById("span-flex-grow");
const flexGrowOptions = ["1", "2", "3"];

flexGrowOptions.forEach(grow => {
    document.getElementById(`flex-grow-${grow}`).addEventListener("click", () => {
        boxFlexGrow.style.flexGrow = grow;
        spanFlexGrow.textContent = grow;
    });
});

const boxFlexShrink = document.getElementById("box-flex-shrink");
const spanFlexShrink = document.getElementById("span-flex-shrink");
const flexShrinkOptions = ["0", "1"];

flexShrinkOptions.forEach(shrink => {
    document.getElementById(`flex-shrink-${shrink}`).addEventListener("click", () => {
        boxFlexShrink.style.flexShrink = shrink;
        spanFlexShrink.textContent = shrink;
    });
});

const boxFlexBasis = document.getElementById("box-flex-basis");
const spanFlexBasis = document.getElementById("span-flex-basis");
const flexBasisOptions = ["25%", "50%", "75%"];

flexBasisOptions.forEach(basis => {
    document.getElementById(`flex-basis-${basis}`).addEventListener("click", () => {
        boxFlexBasis.style.flexBasis = basis;
        spanFlexBasis.textContent = basis;
    });
});
