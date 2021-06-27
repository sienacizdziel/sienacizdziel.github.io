import React from "react";
import "./Home.scss";
import mail from './images/mailing.jpg';
import linkedin from './images/linkedin.jpg';
import github from './images/github.jpg';
import profile from './images/profilepic.jpg';
import resume from './images/Siena_Cizdziel_Resume.pdf';

export default function Home() {
  return (
  <>
  <div style={{display: "inline-block"}} className="home vertical-div">
      <span className="vertical-span">
        <img src={profile} alt="me!" id="photo"/>
      </span>
    <div className="left">
      <span className="vertical-span">
        <h1 className="typewriter">Hi, I'm Siena!</h1>
        <h2> <text>Yale '23</text>, Computer Science</h2>
        <h3>  avid learner, creative communicator, & software engineer for impact &#x1F331;</h3>
        <div class="icon-div">
          <a href="mailto:sienacizdziel@yale.edu" target="_blank" rel="noreferrer" className="icon1">
            <img src={mail} alt="email" className="icon-one icon"/>
          </a>
          <a href="https://www.linkedin.com/in/sienacizdziel/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="icon2 icon"/>
          </a>
          <a href="https://github.com/sienacizdziel" target="_blank" rel="noreferrer">
            <img src={github} alt="github"  className="icon3 icon"/>
          </a>
        <a href={resume} target="_blank" rel="noreferrer">
              <button className="btn btn-default">Resume</button>
        </a>
        </div>
      </span>
    </div>
    </div>

    <div className="attribution">
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik </a>
        and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel Perfect </a> 
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.</div>
    </div>
    </>
  );
}