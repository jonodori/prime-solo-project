import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      
      <p>Technologies I used were </p>
          <ul>
            <li>React</li>
            
            <li>Node.js </li>

            <li>Express</li>

            <li>Redux, Sagas </li>
            <li>Material UI</li>
            </ul>

          
       <p>Technologies I learned aside from the Prime curriculum </p>
          <ul>
            <li> Moment </li>
            <li> Sweet Alerts </li>
            <li> StartGG.Api, GraphQL </li>
            <li> Google Maps Api </li>
            </ul> 
      
        <p>Thanks to </p>
            <li> Prime Academy and the Staff</li>
            <li>My mentors </li>
            <li>As well as my friends and family </li> 
            <li>My gf Katie who never stopped believing in me </li> 

            <li>The Gaiman Cohort who stuck through me </li>

            <li>And of course my wise instructor Edan!  </li>


    </div>
  );
}

export default AboutPage;
