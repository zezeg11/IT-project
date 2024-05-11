<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="mediaqueries.css">
</head>
<body>
  <nav id="desktop-nav">
    <div class="logo">Phoebe Gallardo</div>
    <div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div class="logo">Phoebe Gallardo</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links">
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
        <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
      </div>
    </div>
  </nav>
  <section id="profile">
    <div class="section__pic-container">
      <img src="./assets.png/profile-pic copy.png" alt="Phoebe Gallardo profile picture">
    </div>
    <div class="section__text">
       <p class="section__text__p1">Hey, I'm</p>
       <h1 class="title">Phoebe Gallardo</h1>
       <p class="section__text__p2">Front-end Developer</p>
       <div class="btn-container">
        <button 
        class="btn btn-color-2" 
        onclick="window.open('./assets.png/resume.png')">
          Download CV
        </button>
        <button 
        class="btn btn-color-1" onclick="location.href='#contact'">
          Contact Info
        </button>
       </div> 
       <div id="social-container">
          <img 
            src="./assets.png/linkedin-pic.png" 
            alt="My LinkedIn profile" 
            class="icon"
            onclick="location.href='http://linkedin.com/'"
          />
            <img 
            src="./assets.png/github.png" 
            alt="My Github profile" 
            class="icon"
            onclick="location.href='http://github.com/'"
          />
       </div>
    </div>   
  </section>
  <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
     <div class="section__pic-container">
      <img
      src="./assets.png/about-pic.png"
      alt="profile picture"
      class="about-pic"
      />
    </div>
    <div class="details-container">
      <img src="./assets.png/experience-pic.png" 
      alt="Experience icon"
      class="icon"
      />
      
