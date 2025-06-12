import "./Techstack.css"
import React, { useEffect, useRef, useState } from "react"
import angular from "../../assets/angular.svg"
import css from "../../assets/css-3.svg"
import git from "../../assets/git.svg"
import html5 from "../../assets/html5.svg"
import java from "../../assets/java.svg"
import jest from "../../assets/jest.svg"
import js from "../../assets/js.svg"
import node from "../../assets/node-js.svg"
import php from "../../assets/php.svg"
import python from "../../assets/python.svg"
import react from "../../assets/react.svg"
import sql from "../../assets/sql.svg"
import typescript from "../../assets/typescript.svg"
import webpack from "../../assets/webpack.svg"

function Techstack() {
  return (
    <>
      <div className="techstack hidden">
        <h3>My Tech Stack</h3>
        <p>
          These are the tools I use to build things I’m proud of — from sleek
          <span className="purple"> front-ends</span> to solid and reliable{" "}
          <span className="gold">back-ends</span>. I'm always learning,
          improving, and excited by what new tech can do.
        </p>
        <div className="scroller">
          <div className="scrolling-images">
            <div className="item" style={{ "--position": 1 }}>
              <img src={angular} alt="angular" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={css} alt="css" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              {" "}
              <img src={git} alt="git" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={html5} alt="html5" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              {" "}
              <img src={java} alt="java" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              {" "}
              <img src={jest} alt="jest" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              {" "}
              <img src={js} alt="js" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={node} alt="node" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={php} alt="php" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={python} alt="python" />
            </div>
            <div className="item" style={{ "--position": 11 }}>
              <img src={react} alt="react" />
            </div>
            <div className="item" style={{ "--position": 12 }}>
              <img src={sql} alt="sql" />
            </div>
            <div className="item" style={{ "--position": 13 }}>
              <img src={typescript} alt="typescrip" />
            </div>
            <div className="item" style={{ "--position": 14 }}>
              <img src={webpack} alt="webpack" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Techstack
