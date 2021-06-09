import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Link } from '@material-ui/core';

import styles from './PostSummary.module.scss';

const Component = ({ className, id, title, image, price, lastUpdate }) => (
  <div className={clsx(className, styles.root)}>
    <Link className={styles.postLink} href={`/post/${id}`} >
      <div className={styles.postImage}>
        {image === ''
          ? <img src='https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-14-512.png' alt='no-pic' />
          : <img src={image} alt='post-pic' />
        }
      </div>
      <div className={styles.postInfo}>
        <h2>{title}</h2>
        <p>Last update: {lastUpdate}</p>
        <h2>{price} $</h2>
      </div>
    </Link>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  lastUpdate: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostSummary,
  // Container as PostSummary,
  Component as PostSummaryComponent,
};
