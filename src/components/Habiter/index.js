// import
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// styles
import './styles.scss';

// components import
import Introduction from '../Introduction';
import Content from '../Content';

// component
const Habiter = ({ showHabiter }) => {
  return (
    <div className="habiter">
      <Route exact path="/">
        {!showHabiter && (
          <Introduction />
          )}
      </Route>
      {showHabiter && (
      <Content showHabiter={showHabiter} />
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  showHabiter: state.habiter.showHabiter,
});

// export
export default connect(mapStateToProps, null)(Habiter);