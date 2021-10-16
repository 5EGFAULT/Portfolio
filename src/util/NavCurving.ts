
let height = window.innerHeight,
    x = 0, y = height / 2,
    curveX = 10,
    curveY = 0,
    targetX = 0,
    xitteration = 0,
    yitteration = 0;

function easeOutExpo(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
    return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
}

let hoverZone = 150;
let expandAmount = 20;

export function svgCurve(x: number, y: number, menuExpanded: boolean) {
    if ((curveX > x - 1) && (curveX < x + 1)) {
        xitteration = 0;
    } else {
        if (menuExpanded) {
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

    if ((curveY > y - 1) && (curveY < y + 1)) {
        yitteration = 0;
    } else {
        yitteration = 0;
        yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + (curveY) + ",60," + (curveY + (anchorDistance * 2)) + "V" + height + "z";

    // blobPath.attr('d', newCurve2);

    // blob.width(curveX + 60);

    // hamburger.css('transform', 'translate(' + curveX + 'px, ' + curveY + 'px)');

    return { curve: newCurve2, blobwidth: String(curveX + 60) + 'px', hambergtransform: "translate(" + (curveX + 10) + "px, " + (curveY) + "px)" };
}
