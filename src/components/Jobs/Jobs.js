import React from 'react'
import One from './One'
function Jobs() {
    let Job1={
        name:"Full Stack",
        Description:"Testing and quality assurance: Full-stack developers contribute to the testing process by writing unit tests, conducting integration testing, and assisting in quality assurance efforts"
    };
    let Job2={
        name:"Java Developer",
        Description:"Highly motivated and detail-oriented Fresher Java with a passion for developing efficient and reliable software solutions. Skilled in troubleshooting and debugging, with a proven track record of improving system efficiency by up to 15%."
    };
    let Job3={
        name:"Data Analytics",
        Description:"Data analysis is the process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making."
    }
  return (
    <div className="Jobs mb-3  row row-cols-sm-1 row-cols-md-2 row-cols-3">
    <div className="Users ">
      <One data={Job1} />
      <One data={Job2}/>
      <One data={Job3}/>
      </div>
  </div>
  )
}

export default Jobs