import NavItem from "./NavItem";
import "./NavBar.css";
import { useEffect, useRef, useState } from "react";
import { svgCurve } from "../../util/NavCurving";

export default function NavBar() {
  const blobref = useRef<SVGSVGElement>(null);
  const blobpathref = useRef<SVGPathElement>(null);
  const hambergerref = useRef<HTMLDivElement>(null);
  const cord = useRef({ x: 0, y: window.innerHeight / 2 });
  // let x = 2,
  //   y = window.innerHeight / 2;
  // const hambergerref = useRef<HTMLButtonElement>(null);
  // const [mousepos, setmousepos] = useState({})
  const [open, setopen] = useState(false);
  const animatecurve = () => {
    let values = svgCurve(cord.current.x, cord.current.y, open);

    if (blobpathref && blobpathref.current)
      blobpathref.current.setAttribute("d", values.curve);

    if (blobref && blobref.current)
      blobref.current.setAttribute("width", values.blobwidth);
    if (hambergerref && hambergerref.current)
      hambergerref.current.style.transform = values.hambergtransform;

    // window.requestAnimationFrame(animatecurve);
  };
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cord.current.x = e.pageX;
      cord.current.y = e.pageY;
      // window.requestAnimationFrame(animatecurve);
      animatecurve();
    });
    // animatecurve();
    // return () => {
    //   cleanup;
    // };
  });
  // useEffect(() => {
  //   window.requestAnimationFrame(() => {
  //     let values = svgCurve(cord.current.x, cord.current.y, open);

  //     if (blobpathref && blobpathref.current)
  //       blobpathref.current.setAttribute("d", values.curve);

  //     if (blobref && blobref.current)
  //       blobref.current.setAttribute("width", values.blobwidth);
  //     if (hambergerref && hambergerref.current)
  //       hambergerref.current.style.transform = values.hambergtransform;

  //     window.requestAnimationFrame(animatecurve);
  //   });
  // }, [open]);
  return (
    <div id="menu" className={open ? "expanded" : ""}>
      <div
        className="hamburger"
        ref={hambergerref}
        onClick={() => {
          console.log(open);

          setopen(!open);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu-inner">
        <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
        </ul>
      </div>

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
          d="M60,983H0V0h60v-76.5837121932024c0,160,0.29969056167817326,160,0.29969056167817326,200S60,123.4162878067976,60,523.4162878067976V983z"
        />
      </svg>
    </div>
  );
}
