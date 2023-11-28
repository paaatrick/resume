import React from 'react';
import { Columns, Name, HorizontalList, SubHead } from './style'

const Basics = ({basics}) => {
  const { name, label, email, location, phone, url } = basics;

  return (
    <Columns>
      <div>
        <Name>{name}</Name>
        <SubHead>{label}</SubHead>
      </div>
      <div>
        <HorizontalList align="end">
          <li>{location.city}, {location.region}</li>
          {phone && <li>{phone}</li>}
        </HorizontalList>
        <div><a href={`mailto:${email}`}>{email}</a></div>
        <div><a href={url}>{url}</a></div>
      </div>
    </Columns>
  );
};

export default Basics;
