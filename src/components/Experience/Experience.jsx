import "./Experience.css"
import { useState } from "react"
import ubisoft from "../../assets/ubisoft.webp"
import gildan from "../../assets/gildan.jpg"
import cdpq from "../../assets/cdpq.webp"
import concordia from "../../assets/concordia.png"

function Experience() {
  const [selectedTab, setSelectedTab] = useState("work")
  return (
    <>
      <div id="experience" className="experience">
        <div className="container">
          <div className="selector hidden">
            <button
              className={selectedTab === "work" ? "selected" : ""}
              onClick={() => setSelectedTab("work")}
            >
              Work
            </button>
            <button
              className={selectedTab === "education" ? "selected" : ""}
              onClick={() => setSelectedTab("education")}
            >
              Education
            </button>
          </div>

          <div className="divider">
            {/* mallete for work and book for education  */}
          </div>

          <div
            className={`hidden-fade work section ${
              selectedTab === "work" ? "active" : ""
            }`}
          >
            <ul>
              <li>
                <img src={ubisoft} alt="ubisoft logo" />
                <div className="details">
                  <p className="date">Jan 2024 - May 2024</p>
                  <p className="company">Ubisoft</p>
                  <p className="position">CRM Web Developer (Internship)</p>
                </div>
              </li>
              <li>
                <img src={gildan} alt="gildan logo" />
                <div className="details">
                  <p className="date">May 2023 - Aug 2023</p>
                  <p className="company">Gildan</p>
                  <p className="position">Network Programmer (Internship)</p>
                </div>
              </li>
              <li>
                <img src={cdpq} alt="cdpq logo" />
                <div className="details">
                  <p className="date">Sep 2022 - Dec 2022</p>
                  <p className="company">CDPQ</p>
                  <p className="position">DevOps Engineer (Internship)</p>
                </div>
              </li>
            </ul>
          </div>

          <div
            className={`education section ${
              selectedTab === "education" ? "active" : ""
            }`}
          >
            <ul>
              <li>
                <img src={concordia} alt="Concordia logo" />
                <div className="details">
                  <p className="date">Sep 2021 - Dec 2024</p>
                  <p className="school">Concordia University</p>
                  <p className="degree">
                    Bachelor of Computer Science - Member of Institute for
                    Co-operative Education
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
