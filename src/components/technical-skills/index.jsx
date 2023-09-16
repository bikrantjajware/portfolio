import React from 'react';
import './style.css';
import {
  serverlessIcon,
  CplusplusIcon,
  dynamodbIcon,
  javascriptIcon,
  mongodbIcon,
  mysqlIcon,
  nodejsIcon,
  reactIcon,
  typescriptIcon
} from '../../images/icons';

const TechnicalSkills = () => {
  return (
    <div>
      <h2> Skills in Tech</h2>
      <h3> Progarmming Language</h3>
      <div className="skills">
        <div>
          <span id="ani">c</span>
          <img className="skill-icon" height="80px" src={CplusplusIcon} alt="c++" />
          <span>c++</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={javascriptIcon} alt="javascript" />
          <span>javascript</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={typescriptIcon} alt="typescript" />
          <span>typescript</span>
        </div>

        <div>
          <img className="skill-icon" height="80px" src={mysqlIcon} alt="mysql" />
          <span>MySQL</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={dynamodbIcon} alt="dynamodb" />
          <span>Dynamo DB</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={mongodbIcon} alt="mongodb" />
          <span>Mongo DB</span>
        </div>

        <div>
          <img
            className="skill-icon"
            height="80px"
            src={serverlessIcon}
            alt="aws"
            tooltip="hello"
          />
          <span>Serverless</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={reactIcon} alt="react" />
          <span>react</span>
        </div>
        <div>
          <img className="skill-icon" height="80px" src={nodejsIcon} alt="node" />
          <span>node js</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
