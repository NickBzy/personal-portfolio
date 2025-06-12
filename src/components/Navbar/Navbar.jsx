import "./Navbar.css"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="navbar hidden">
        <div className="name">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>alpha-n-circle</title>
            <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
          </svg>
          <a href="">Nicolas Buu</a>
        </div>
        <div className="menu">
          <div className="option">
            <a href="#hero">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>home</title>
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
              </svg>
              Home
            </a>
          </div>
          <div className="option">
            <a href="#projects">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>list-box</title>
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z" />
              </svg>
              Projects
            </a>
          </div>
          <div className="option">
            <a href="#experience">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>face-man-profile</title>
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z" />
              </svg>
              About
            </a>
          </div>
        </div>
        <div className="contact">
          <a href="#footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email-arrow-right</title>
              <path d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M20 22V20H16V18H20V16L23 19L20 22Z" />
            </svg>
            Contact Me
          </a>
        </div>
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`dropdown ${isOpen ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>home</title>
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>list-box</title>
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z" />
              </svg>
              Projects
            </a>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>face-man-profile</title>
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z" />
              </svg>
              About
            </a>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>email-arrow-right</title>
                <path d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M20 22V20H16V18H20V16L23 19L20 22Z" />
              </svg>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
