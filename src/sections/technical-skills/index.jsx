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
import Section from '../../components/section';

const TechnicalSkills = () => {
  return (
    <Section className="bg-lime-50">
      <div>
        <h3 className="py-3 text-3xl font-palanquin"> Skills in Tech</h3>
        <h4 className="text-xl font-medium font-palanquin"> Progarmming Languages</h4>
        <Section className="bg-gray-100 flex gap-3 shadow-lg w-fit">
          <div>
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
        </Section>
        <h4 className="text-xl font-medium font-palanquin">Database</h4>
        <Section className="bg-gray-100 flex gap-3 shadow-lg w-fit">
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
        </Section>
        <h4 className="text-xl font-medium font-palanquin">Framework / Technologies</h4>
        <Section className="bg-gray-100 flex gap-3 shadow-lg w-fit">
          <div className="skills">
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
        </Section>
      </div>
    </Section>
  );
};

export default TechnicalSkills;
