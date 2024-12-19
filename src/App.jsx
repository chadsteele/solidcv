
import './App.css';
import data from './data.js'
import { For } from 'solid-js';
import WorkExperience from './Experience';
import ProfilePic from './ProfilePic';
import Education from './Education';
import AboutMe from './AboutMe';
import Skills from './Skills';
import GitIcon from "./assets/github";
import LinkedInIcon from "./assets/linkedin";
import WebIcon from "@suid/icons-material/Language";
import MailIcon from "@suid/icons-material/Email";
import PdfIcon from "@suid/icons-material/PictureAsPdf";
import { Button } from "@suid/material"
import Animated, { AnimatedSequence } from './Animated';


export default function App () {
  return <div class="container">
    <Sidebar />
    <MainContent />
  </div>
}




function Sidebar (props) {
  return <>
    <aside class="sidebar">
      <Header />

      <AboutMe data={data} />
      <Education data={data} />
      <Skills data={data} />


    </aside>
  </>
}

function Header (props) {
  return <div class="header">


    <h1>{data.profile.name} <span class="creds">{data.profile.creds}</span></h1>
    <h2>{data.profile.tagline}</h2>
    <Animated>
      <Button color="success" href="mailto:chad@chadsteele.com?subject=chadsteele.com"><MailIcon />chad@chadsteele.com</Button>
      <Button color="success" href="https://pdf.chadsteele.com"><PdfIcon />download</Button>
    </Animated>

    <ProfilePic />

  </div>
}



function MainContent (props) {
  return <div class="main-content">
    <WorkExperience workExperience={data.workExperience} />
    <h1>Links</h1>

    <AnimatedSequence name="bounceInRight">

      <div>
        <Button variant="outlined" color="success" aria-label="linkedin" href="https://linkedin.com/in/chadsteele" target="_blank">
          <LinkedInIcon /> /in/chadsteele
        </Button>

        <Button variant="outlined" color="success" aria-label="email" href="mailto:chad@chadsteele.com?subject=chadsteele.com" target="_blank">
          <MailIcon /> &nbsp; chad@chadsteele.com
        </Button>
        <Button variant="outlined" color="success" aria-label="pdf" href="https://pdf.chadsteele.com" target="_blank">
          <PdfIcon /> &nbsp; download
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="success" aria-label="web" href="https://chadsteele.com" target="_blank">
          <WebIcon /> &nbsp; ChadSteele.com
        </Button>

        <Button variant="outlined" color="success" aria-label="cv" href="https://github.com/chadsteele/solidcv" target="_blank">
          <GitIcon /> &nbsp; this cv
        </Button>

        <Button variant="outlined" color="success" aria-label="recommendations" href="https://hello.chadsteele.com" target="_blank">
          <PdfIcon />&nbsp; recommendations
        </Button>
      </div>
      <p>
        <img src={data.qr} alt="QR Code" class="qr-code" />
      </p>

    </AnimatedSequence>
  </div>
}




