// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// icon
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

// component
const AboutTheArtists = () => {
  const { t } = useTranslation();

  return (
    <article className="about">
      <section className="about__artists">
        {/* ARTISTS => ELIANA */}
        <div className="about__artist about__artist--eliana">
          <h1 className="about__artist__name">
            Eliana
            <br />
            Pliskin Jacobs
          </h1>
          <p className="about__artist__text about__artist__text--eliana">
            { t('about-the-artists.eliana-jacobs') }
          </p>
        </div>
        {/* ARTISTS = SITA */}
        <div className="about__artist about__artist--sita">
          <h1 className="about__artist__name">
            Sîta
            <br/>
            Subias
          </h1>
          <p className="about__artist__text">
            { t('about-the-artists.sita-subias') }
          </p>
        </div>
      </section>
      <section className="about__since">
        <div className="about__since__text">
          { t('about-the-artists.text') }
        </div> 
      </section>
      <section className="about__contact">
        <h2 className="about__contact__title">
          { t('about-the-artists.contact.title') }
        </h2>
        <div className="about__contact__text">
          <div className="about__contact__text__name">
            Eliana Pliskin Jacobs & Sîta Subias
          </div>
          <div className="about__contact__text__line"></div>
          <div className="about__contact__text__mail">
            <a
              href="mailto:habiter.project@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              habiter.project@gmail.com
            </a>
          </div>
        </div>
      </section>
      <section className="about__opencall">
        <div className="about__opencall__wrapper">
          <h2 className="about__opencall__wrapper__title">
            { t('about-the-artists.open-call.title') }
          </h2>
          <div className="about__opencall__wrapper__content">
            <OpenCall className="about__opencall__wrapper__content__icon" />
            <div className="about__opencall__wrapper__content__text">
              { t('about-the-artists.open-call.part-1') }
              <div className="about__opencall__wrapper__content__text--underline">
                <a
                  href="mailto:habiter.project@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  habiter.project@gmail.com
                </a>
              </div>
              { t('about-the-artists.open-call.part-2') }
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

// export
export default AboutTheArtists;