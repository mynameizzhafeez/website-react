import './Works.css';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import contentData from '../../data/content.json';
import projectsData from '../../data/projects.json';

import Text from '../../components/Text.js';
import Project from '../../components/works/Project.js';
import SearchBar from '../../components/SearchBar.js';

import desmosito from '../../assets/desmosito.png';

function WorksHome() {
  const projectsPreview = Object.keys(projectsData.projects).slice(0, 4).map((key, project) => {
    const projectData = projectsData.projects[key];
    projectData["key"] = key;
    return (
      <Project
        project={projectData}
      ></Project>
    );
  });
  return (
    <div className="page">
      <img src={desmosito} alt="Logo" className="icon"></img>
      <Text
        title={contentData.works.title}
        content={contentData.works.content}
      ></Text>
      <h2 id="notes">NOTES</h2>
      <SearchBar className="search-bar" />
      <br></br>
      <h2 id="projects">PROJECTS (<Link to="../works/projects/all">FULL VIEW</Link>)</h2>
      <div className="projects-entries">{projectsPreview}</div>
      <br></br>
      <Helmet>
        <title>My Works</title>
        <meta name="description"
          content="Welcome to my Works Page! Here, I share some of the projects, piano pieces, artwork and puzzles that I've created over the years, as well as my personal notes." />
      </Helmet>
    </div>
  );
}

export default WorksHome;