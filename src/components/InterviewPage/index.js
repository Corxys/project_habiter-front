import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import Medias from './Medias';
import Audios from './Audios';
import References from './References';
// import { OneMedia } from './Media';

// let reference = 0;

const InterviewPage = ({ interview }) => {
  console.log('interview :', interview);

  // const randomWidth = () => {
  //   return Math.floor(Math.random() * (1050 - 750)) + 750;
  // };

  // const randomPadding = () => {
  //   return Math.floor(Math.random() * (150 - 0)) + 0;
  // };

  return (
    <div className="interview-page">
      {/* HEADER - START */}
      <div className="interview-page__header">
        {/* INTRODUCTION => name, location, image */}
        <div className="interview-page__header__intro">
          <div className="interview-page__header__intro__author">
            <h1 className="interview-page__header__intro__author__name">
              { interview.author }
            </h1>
            <div className="interview-page__header__intro__author__location">
              { interview.location }
            </div>
          </div>          
          { interview.media.length >= 1 &&
            <div
              className="interview-page__header__intro__image"
            >
              <div 
                className="interview-page__header__intro__image__legend"
              >
                Crédit photo : { interview.media_copyright }
              </div>
              <img src={ interview.media[0].source[0].url } alt="" />
            </div>
          }
        </div>
        <p className="interview-page__header__text">
          { interview.text }
        </p>
      </div>
      {/* HEADER - END */}


      {
        interview.media.length >= 1 &&
        <Medias miniature={interview.media[0].source[0].id} medias={interview.media} />
      }

      {/* IMAGES - START */}
      {/* { interview.media.length >= 1 &&
        <div
          className="interview-page__content"
        >
          {
            // eslint-disable-next-line array-callback-return
            interview.media.map((image, index) => {
              // la première image de l'interview se trouve toujours dans le header
              // pour éviter les doublons, on ne retourne pas la première image
              if (index === 0) {
                return null;
              } else if (index !== 0) {
                if (reference === 0) {
                  reference += 1;
                  if (image.source[0].ext === '.jpg') {
                    console.log(image);
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginLeft: randomPadding() }}
                      >
                        <img
                          className="interview-page__content__media__source"
                          src={ image.source[0].url }
                          alt=""
                          style={{ width: randomWidth() }}
                        />
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                      </div>
                    )
                  } else if (image.source[0].ext === '.mp4') {
                    console.log(image);
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginLeft: randomPadding() }}
                      >
                        <video>
                          <source
                            src={ image.source[0].url }
                            type='video/mp4'
                          />
                        </video>
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                      </div>
                    )
                  }
                }
                else if (reference === 1) {
                  reference = 0;
                  if (image.source[0].ext === '.jpg') {
                    console.log(image);
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginRight: randomPadding() }}
                      >
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                        <img
                          className="interview-page__content__media__source"
                          src={ image.source[0].url }
                          alt=""
                          style={{ width: randomWidth() }}
                        />
                      </div>
                    )
                  } else if (image.source[0].ext === '.mp4') {
                    console.log(image);
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginRight: randomPadding() }}
                      >
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                        <video>
                          <source
                            src={ image.source[0].url }
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    )
                  }
                }
              }
            })
          }
        </div>
      } */}
      {/* IMAGES - END */}

      {
        interview.audio.length >= 1 &&
        <Audios audios={interview.audio} />
      }

      {
        interview.reference.length >= 1 && 
        <References references={interview.reference} />
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  interview: state.interview.interview,
});

export default connect(mapStateToProps, null)(InterviewPage);