import React from 'react';
import Linkify from 'react-linkify';
import { formatDate } from '../utils';
import { Columns, Item, ItemHeader, SubHead } from './style';

const Work = ({work}) => {
  return (
    work.map(({name, position, startDate, endDate, location, summary, highlights}, idx) => (
      <Item key={idx}>
        <Columns>
          <div>
            <ItemHeader>{name}</ItemHeader>
            <SubHead>{position}</SubHead>
          </div>
          <div>
            <div>{formatDate(startDate)} - {formatDate(endDate)}</div>
            <div>{location}</div>
          </div>
        </Columns>
        <p>
          <Linkify>{summary}</Linkify>
        </p>
        <ul>
          {highlights.map(highlight => <li key={highlight}><Linkify>{highlight}</Linkify></li>)}
        </ul>
      </Item>
    ))
  )
};

export default Work;
