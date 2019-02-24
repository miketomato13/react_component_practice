import projects from '../data/projects.json';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import '../App.js';





class Projects extends Component{
    render(){
        return(
            <div id="projects">
                {projects.allProjects.map(result => {
                    return(
                        <div key={result.name} className='result'>
                            <Project title={result.title} imgName={result.imgName} description={result.description} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects;