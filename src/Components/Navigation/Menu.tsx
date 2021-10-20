import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.62 430.23">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M368.54,154.88v-130s-7,36-28,16-35-46-99.92-40h-.08c-64-.95-122,66-97,146,14,36,59,55,99,56s68,1,85,10c0-10.54-59.7-24.51-84-27a37.62,37.62,0,0,1-5-1c-11.78-2.74-66-18.77-66-74,0-62,42-102,85-101s73,18,93,68c18,51,16,77,16,77Z"
              />
              <path
                className="cls-1"
                d="M507.62,318.62s-26,2-53.08-22.74c-25.84-23.61-175-273-175-273h-41s29,1,23,28c-3,7-59,108-59,108l16,11,52-99s2-3,3,0,57,94,57,94,4,17-12,13-53-6-56-3c0,5,66-5,103,44,33,52,52,83,52,83s7,14-13,18C422.54,319.88,507.62,318.62,507.62,318.62Z"
              />
              <path
                className="cls-1"
                d="M393.54,318.88c-1,11,0,49-35,81s-73,31-95,30c-19-.86-59.53-9.91-88.29-33.56a100.25,100.25,0,0,1-12.71-12.44c-3.29-3.88-6.44-7.64-9.51-11.27-8-9.44-15.33-17.94-22.95-25-14.36-13.28-29.63-21.35-51.54-20.77a154.78,154.78,0,0,0-26.64,2.61,98.59,98.59,0,0,0-39,16.08,35.44,35.44,0,0,1,6.22-7.24,97.77,97.77,0,0,1,31-16,132.78,132.78,0,0,1,30.3-4.45,101.57,101.57,0,0,1,15.72,1.25h.06c24.34,1.73,56,34.37,56.34,34.73,3.6,4.2,20.46,21.8,21.58,23.4.3.43,49.54,44.86,106.42,34.6,61-11,71-72,71-72s14-62-29-89c-22-16-30-18-55-22a243.76,243.76,0,0,0-38-3c-21,0-75-20-91-56-12-25-6-28-6-28s12,60,82,66,28-3,101,10S394.54,307.88,393.54,318.88Z"
              />
              <path
                className="cls-1"
                d="M296.84,353.08c-1.65.84-3.35,1.6-5.08,2.29A11.61,11.61,0,0,1,296.84,353.08Z"
              />
              <path
                className="cls-1"
                d="M340.54,318.38c0,42.56-34.82,77.5-79.24,81.17-2.56.22-5.14.33-7.76.33-2.86,0-5.7-.13-8.49-.39-11.35-1-21.86-2.89-31.51-7.61a108.41,108.41,0,0,1-10-5c-8.14-3.71-14.45-9.11-21.17-14a103.54,103.54,0,0,1-16.08-14.49c-.8-.89-1.57-1.79-2.33-2.7l-.14-.18c-3.64-4.43-.28-.6-10.28-13.6a96.63,96.63,0,0,0-73-33c-33.75,0-63.43,16.32-80.54,41,14.59-30.3,46.55-51.67,84-52.94,1.18-.05,2.36-.07,3.55-.07h12c19.63-1.78,37-12.36,46.26-28.51l.07-.14a92.73,92.73,0,0,0,6.67-13.35l1-2L169.82,222l4.1-7.09c.83.63,1.67,1.25,2.52,1.85a95.17,95.17,0,0,0,86.85,19.84l-1.12.66q-2.28,1.33-4.68,2.46a63.16,63.16,0,0,1-16.9,5.28,65.25,65.25,0,0,1-9.35.85H230a64.44,64.44,0,0,1-13.27-1.37h0a57,57,0,0,1-8.22-2.63s-3.92-1.54-5.78-2.06h0l-.17-.08,0,0a23.78,23.78,0,0,0-4.25-.77,20.93,20.93,0,0,0-2.25-.11c-.4,0-.79,0-1.18,0a24.38,24.38,0,0,0-16.14,7.16c-.35.34-.68.7-1,1.07l-.12.14-6.23,10.79-.25.44L170,260.44l-4.62,8.27L163,273a39.12,39.12,0,0,0-2.15,5.66c-3.85,13.08-1.7,29.49,5.89,45.76a106.22,106.22,0,0,0,12.8,20.69c.76,1,1.55,1.95,2.36,2.91,8.67,12.31,22.22,23.72,39.16,31.78a111.73,111.73,0,0,0,23.12,8.1c27.9,6.4,53.51.16,63.73-17a10.63,10.63,0,0,0,2.42-5,10.48,10.48,0,0,0,.18-1.95,10.8,10.8,0,0,0-4.18-8.48,11.69,11.69,0,0,0-7.32-2.52,12.25,12.25,0,0,0-2.2.2,11.61,11.61,0,0,0-5.08,2.29,63.89,63.89,0,0,1-8,2.59A64.69,64.69,0,0,1,268,359.88c-30.19,0-55.37-20.72-61.22-48.26,7.33,25.53,31.51,44.26,60.22,44.26a64.29,64.29,0,0,0,17.78-2.49,62.85,62.85,0,0,0,25-13.91,61.12,61.12,0,0,0,8.51-9.53,59,59,0,0,0,9.94-46.76.09.09,0,0,0,0-.05,59.57,59.57,0,0,0-4.11-12.38A77.77,77.77,0,0,1,340.54,318.38Z"
              />
            </g>
          </g>
        </svg>
        <div className="logo-name">
          <span className="code">{"<"}</span>
          <span className="name-letter">S</span>
          <span className="name-letter">O</span>
          <span className="name-letter">U</span>
          <span className="name-letter">I</span>
          <span className="name-letter">N</span>
          <span className="name-letter">I</span>
          <span className="name-letter">A</span>
          <span className="name-letter"> </span>
          <span className="name-letter">A</span>
          <span className="name-letter">Y</span>
          <span className="name-letter">O</span>
          <span className="name-letter">U</span>
          <span className="name-letter">B</span>
          <span className="code">/</span>
          <span className="code">{">"}</span>
        </div>
      </div>
      <ul>
        <li>
          <MenuItem link="home" text="Home" isselected={true}></MenuItem>
        </li>
        <li>
          <MenuItem link="resume" text="Resume" isselected={false}></MenuItem>
        </li>
      </ul>
      <div className="menu-contact-list"></div>
    </div>
  );
}
