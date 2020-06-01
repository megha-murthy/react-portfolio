import React from 'react';

function Projects(props){
    if(props.Github){
        return(
            <ul>
                <li><strong>{props.name}</strong>{props.description}</li>
                    <p>Technologies: {props.technologies}</p>
                    <p>Github: <a href={props.Github}>{props.Github}</a></p>
            </ul>
            )
    }
    else{
        return(
            <ul>
                <li><strong>{props.name}</strong>{props.description}</li>
                <p>Technologies: {props.technologies}</p>
                <p>Heroku: <a href={props.Heroku}>{props.Heroku}</a></p>
        
            </ul>
            )
    }

}

export default Projects;