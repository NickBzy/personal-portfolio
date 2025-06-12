import "./Hero.css"

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div id="hero" className="hero hidden">
          <div className="front-end">Front-end</div>
          <div className="back-end">Back-end</div>
          <div className="ui-ux">UI/UX</div>
          <div className="row-1" id="">
            <h1>Hello,</h1>
          </div>
          <div className="row-2" id="">
            <h1>I'm</h1>
          </div>
          <div className="row-3" id="">
            <h1>Nicolas</h1>
          </div>
          <div className="row-4" id="">
            <h1>Buu</h1>
          </div>
          <p>
            I'm a <span className="purple">full stack</span> web developer from
            Montreal. I love building <span className="gold">modern</span> and{" "}
            <span className="coral">user-focused</span> websites and apps.
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero
