
import './App.css';
import data from './data.js'
import { For } from 'solid-js';
import WorkExperience from './Experience';



function Sidebar (props) {
  return <>
    <aside class="sidebar">
      <Header />

      <section class="about-me">
        <h2>{data.aboutMe.title}</h2>
        <h3>{data.aboutMe.subtitle}</h3>

        <ul class="sidebar">
          <For each={data.aboutMe.paragraphs}>{(p) => <li>{p}</li>}</For>
        </ul>
      </section>

      <img src="${data.qrCode}" alt="QR Code" class="qr-code" />
    </aside>
  </>
}

function Header (props) {
  return <div class="header">

    <h1>{data.header.name} <span class="creds">{data.header.creds}</span></h1>
    <h2>{data.header.tagline}</h2>

  </div>
}



function MainContent (props) {
  return <div class="main-content">

    <WorkExperience workExperience={data.workExperience} />

  </div>
}



function App () {
  return <div class="container">
    <Sidebar />
    <MainContent />
  </div>
}

export default App;
