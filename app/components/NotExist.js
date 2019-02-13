import React from 'react';
import { Link } from 'react-router-dom';

const NotExist = props => {
  const { campusOrStudent } = props;
  return (
    <div id="map">
      <h1>
        Oh no! The {campusOrStudent.toLowerCase()} you're looking for doesn't
        exist!
      </h1>
      <h3>
        Perhaps you want to make one in the{' '}
        <Link id="not-exist" to={`/new${campusOrStudent}`}>
          New {campusOrStudent}
        </Link>{' '}
        section?
      </h3>
    </div>
  );
};

export default NotExist;
