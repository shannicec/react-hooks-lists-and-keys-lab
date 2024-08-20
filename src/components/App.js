import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    technologies: ['React', 'JavaScript', 'CSS']
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    technologies: ['Node.js', 'Express', 'MongoDB']
  }
];

const App = () => {
  return (
    <div>
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
