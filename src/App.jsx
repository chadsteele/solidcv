
import './App.css';
import data from './data.js'
import { For } from 'solid-js';
import WorkExperience from './Experience';
import ProfilePic from './ProfilePic';
import Education from './Education';
import AboutMe from './AboutMe';
import Skills from './Skills';


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

    <h1>{data.header.name} <span class="creds">{data.header.creds}</span></h1>
    <h2>{data.header.tagline}</h2>

    <ProfilePic />

  </div>
}



function MainContent (props) {
  return <div class="main-content">
    <WorkExperience workExperience={data.workExperience} />
    <h1>Links</h1>
    <img src={data.qr} alt="QR Code" class="qr-code" />
  </div>
}




