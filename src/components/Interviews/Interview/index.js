import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { buildInterviewUrl } from '../../../utils/buildInterviewUrl';

import './styles.scss';

const Interview = ({
  id,
  author,
  location,
  miniature,
  language,
  randomPadding,
  getInterviewById
}) => {
  const [hovered, setHovered] = useState(false);

  const textStyle = hovered ? { color: '#0000FF' } : {};
  const imageStyle = hovered ? { filter: 'grayscale(100%)', opacity: '0.5' } : {};

  return (
      <div
        className="container__interview"
        style={{ paddingTop: randomPadding }}
      >
          <div className="container__interview__image">
            {
              // if "miniature" is true, the tag "img" is displayed
              miniature && 
                <Link
                  to={author ? buildInterviewUrl(author) : author}
                >
                <img
                  id={id}
                  onClick={getInterviewById}
                  src={miniature.url}
                  alt=""
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={imageStyle}
                  />
                </Link>
            }
          </div>
          <div
            className="container__interview__text"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={textStyle}
          >
            <Link
              to={author ? buildInterviewUrl(author) : author}
            >
              <div
                id={id}
                className="container__interview__text__title"
                onClick={getInterviewById}
              >
                { author } 
              </div>
            </Link>
            <div className="container__interview__text__location">
              { location }
              <br />
              <br />
              ({ language })
            </div>
          </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getInterviewById: (event) => {
    console.log(event.target);
    const id = parseInt(event.target.id, 10);

    dispatch({
      type: 'SEND_INTERVIEW_REQUEST',
      payload: {
        id: id,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(Interview);