import NavItem from "./NavItem";
import "./NavBar.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

var height = window.innerHeight,
  x = 0,
  y = height / 2,
  curveX = 10,
  curveY = 0,
  targetX = 0,
  xitteration = 0,
  yitteration = 0;
var hoverZone = 150;
// var hoverZone = 200;
var expandAmount = 25;

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
export default function NavBar() {
  const blobref = useRef<SVGSVGElement>(null);
  const blobpathref = useRef<SVGPathElement>(null);
  const hambergerref = useRef<HTMLDivElement>(null);

  // const hambergerref = useRef<HTMLButtonElement>(null);
  // const [mousepos, setmousepos] = useState({})
  const [open, setopen] = useState(false);

  const svgCurve = () => {
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
    if (!open) {
      console.log("test");
    } else {
      if (!open) {
        console.log(open);
      }
    }
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
    if (blobpathref && blobpathref.current)
      blobpathref.current.setAttribute("d", newCurve2);

    if (blobref && blobref.current)
      blobref.current.setAttribute("width", String(curveX + 60) + "px");
    if (hambergerref && hambergerref.current)
      hambergerref.current.style.transform =
        "translate(" + (curveX + 10) + "px, " + (curveY - 10) + "px)";

    window.requestAnimationFrame(svgCurve);
  };
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      x = e.pageX;

      y = e.pageY;
      // console.log(x);
    });
    // return () => {
    //   cleanup
    // }
  });
  useEffect(() => {
    window.requestAnimationFrame(svgCurve);
  }, [open]);
  return (
    <>
      <motion.div
        className={open ? "nav-bar expanded" : "nav-bar"}
        onMouseLeave={() => {
          setopen(false);
        }}
      >
        <div
          ref={hambergerref}
          className={open ? "nav-toggle open" : "nav-toggle"}
          onClick={() => {
            setopen(!open);
          }}
          onMouseEnter={() => {
            // setopen(true);
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="nav-logo">SA.</div>
        <div className="nav-list">
          <NavItem link="/" text="About me" />
          <NavItem link="/resume" text="Resume" />
          <NavItem link="/projects" text="Projects" />
        </div>
        <div className="nav-contact">f w l</div>
        <svg
          ref={blobref}
          version="1.1"
          id="blob"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            ref={blobpathref}
            id="blob-path"
            d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z"
          />
        </svg>
      </motion.div>
    </>
  );
}
