import React from "react";
import python_logo from '../Assets/logos/pyton_logo.png';
import html_logo from '../Assets/logos/html_logo.png';
import css_logo from '../Assets/logos/css_logo.png';
import javascript from '../Assets/logos/javascript_logo.png';
import csharp_logo from '../Assets/logos/csharp_logo.png';
import bootstrap_logo from '../Assets/logos/bootstrap_logo.png';
import flask_logo from '../Assets/logos/flask_logo.png';
import django_logo from '../Assets/logos/django_logo.png';
import mysql_logo from '../Assets/logos/mysql_logo.png';
import postgres_logo from '../Assets/logos/posgres_logo.png';
import jquery_logo from '../Assets/logos/jquery_logo.png';
import docker_logo from '../Assets/logos/docker_logo.png';
import vscode_logo from '../Assets/logos/vscode_logo.png';
import git_logo from '../Assets/logos/git_logo.png';
import github_logo from '../Assets/logos/github_logo.png';
import linux_logo from '../Assets/logos/linux_logo.png';
import './skill_page.css'; // Import the CSS file

function Skills() {
  return (
    <>
    <br></br>
    <h1>Language & Databases</h1>
    <br></br>
    <div className="skills-container">
      <div className="py-logo">
        <img className="py-png" src={html_logo} alt="Java" />
        <p>HTML</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={css_logo} alt="Java" />
        <p>CSS</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={javascript} alt="Java" />
        <p>Javascript</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={python_logo} alt="Java" />
        <p>Python</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={csharp_logo} alt="Java" />
        <p>C#</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={mysql_logo} alt="Java" />
        <p>MySQL</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={postgres_logo} alt="Java" />
        <p>Postgresql</p>
      </div>
    </div>
    <br></br>
    <h1>Framework & Technologies</h1>
    <br></br>
    <div className="skills-container">
    <div className="py-logo">
        <img className="py-png" src={django_logo} alt="Java" />
        <p>Django</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={flask_logo} alt="Java" />
        <p>Flask</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={bootstrap_logo} alt="Java" />
        <p>Boostrap</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={jquery_logo} alt="Java" />
        <p>Jquery</p>
      </div>
    </div>
    <br></br>
    <h1>Tools & Platforms</h1>
    <br></br>
    <div className="skills-container">
    <div className="py-logo">
        <img className="py-png" src={git_logo} alt="Java" />
        <p>Git</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={github_logo} alt="Java" />
        <p>Github</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={docker_logo} alt="Java" />
        <p>Docker</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={vscode_logo} alt="Java" />
        <p>Vscode</p>
      </div>
      <div className="py-logo">
        <img className="py-png" src={linux_logo} alt="Java" />
        <p>Linux</p>
      </div>
    </div>
    </>
  );
}

export default Skills;
