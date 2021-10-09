function easeOutExpo(
    currentIteration: any,
    startValue: any,
    changeInValue: any,
    totalIterations: any
) {
    return (
        changeInValue *
        (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
        startValue
    );
}

// let x = 0, y = window.innerHeight / 2;
// export const docmousemove = () => {
//     document.addEventListener("mousemove", (e) => {
//         x = e.pageX;

//         y = e.pageY;
//         // console.log(x, y);

//     });
// }
export const svgCurve = (x: number, y: number,
    open: boolean,
) => {

    let curveX = 10;
    let curveY = 0;
    let targetX = 0;
    let xitteration = 0;
    let yitteration = 0;
    let hoverZone = 150;
    let expandAmount = 20;
    let height = window.innerHeight;
    if (curveX > x - 1 && curveX < x + 1) {
        xitteration = 0;
    } else {
        if (open) {
            targetX = 0;
        } else {
            xitteration = 0;
            if (x > hoverZone) {
                targetX = 0;
            } else {
                targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
            }
        }
        xitteration++;
    }

    if (curveY > y - 1 && curveY < y + 1) {
        yitteration = 0;
    } else {
        yitteration = 0;
        yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 =
        "M60," +
        height +
        "H0V0h60v" +
        (curveY - anchorDistance) +
        "c0," +
        curviness +
        "," +
        curveX +
        "," +
        curviness +
        "," +
        curveX +
        "," +
        anchorDistance +
        "S60," +
        curveY +
        ",60," +
        (curveY + anchorDistance * 2) +
        "V" +
        height +
        "z";
    return { newCurve2, widthblob: String(curveX + 60) + "px", transformhamberger: "translate(" + curveX + "px, " + curveY + "px)" };
    // if (blobpathref && blobpathref.current) {
    //     blobpathref.current.setAttribute("d", newCurve2);
    //     // setpathDstate(newCurve2);
    //     // console.log(blobpathref.current.getAttribute("d"));
    // }
    // if (blobref && blobref.current)
    //     blobref.current.setAttribute("width", String(curveX + 60) + "px");
    // if (hambergerref && hambergerref.current)
    //     hambergerref.current.style.transform =
    //         "translate(" + curveX + "px, " + curveY + "px)";

    // window.requestAnimationFrame(() => {

    //     svgCurve(
    //         open,
    //         blobpathref,
    //         blobref,
    //         hambergerref,
    //         setpathDstate
    //     )
    // });
};