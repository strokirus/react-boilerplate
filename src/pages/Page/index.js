import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchPage,
} from './actions';

/**
 * Page Container
*/
class Page extends Component {
  /**
   * Trigged when user access Transaction Page
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    const {
      fetchPage: fetchPageProps,
    } = this.props;

    fetchPageProps();
  }

  render() {
    const { pages } = this.props;

    const {
      items,
      status,
    } = pages;

    if (status.isLoading && items.length === 0) {
      return (
        <section>
          <h1>Loading...</h1>
        </section>
      );
    }

    if (status.isError) {
      return (
        <section>
          <h1>Something is rotten in the state of Denmark</h1>
          <p>Try contact the administrators of site</p>
        </section>
      );
    }

    return (
      <>
        <section>
          Blank Page
        </section>
      </>
    );
  }
}

Page.propTypes = {
  fetchPage: func.isRequired,
  pages: object,
};

Page.defaultProps = {
  pages: { },
};

function mapStateToProps(state, ownProps) {
  const { pages } = state;
  return {
    ...ownProps,
    pages,
  };
}

const mapDispatchToProps = {
  fetchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
