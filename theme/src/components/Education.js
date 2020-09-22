import React from 'react';
import { formatDate } from '../utils';
import { Columns, Item, ItemHeader, SubHead } from './style';

const Education = ({education}) => {
  return education.map(({institution, area, studyType, startDate, endDate, summary, location}, idx) => (
    <Item key={idx}>
      <div>
        <Columns>
          <div>
            <ItemHeader>{institution}</ItemHeader>
            <SubHead>{studyType} in {area}</SubHead>
          </div>
          <div>
            <div>{formatDate(startDate)} - {formatDate(endDate)}</div>
            <div>{location}</div>
          </div>
        </Columns>
      </div>
      <div>
        {summary}
      </div>
    </Item>
  ));
};

export default Education;
  