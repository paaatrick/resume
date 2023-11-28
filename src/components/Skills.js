import React from 'react';
import { SkillList, KeywordList } from './style';

const Skills = ({skills}) => {
  return (
    <SkillList>
      {skills.map(skill => [
        <dt>{skill.name}</dt>,
        <dd>
          <KeywordList>
            {skill.keywords.map(keyword => <li key={keyword}>{keyword}</li>)}
          </KeywordList>
        </dd>
      ])}
    </SkillList>
  )
};

export default Skills;