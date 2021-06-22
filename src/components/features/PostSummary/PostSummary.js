import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Link } from '@material-ui/core';

import styles from './PostSummary.module.scss';

const Component = ({ className, id, title, image, price, lastUpdate }) => {

  if(typeof image === 'object') {
    const fr = new FileReader();
    fr.readAsDataURL(image);
    fr.onload = function() {
      const imagePreview = document.getElementById('image-preview');
      imagePreview.src = this.result;
    };
  }

  return (
    <div className={clsx(className, styles.root)}>
      <Link className={styles.postLink} href={`/post/${id}`} >
        <div className={styles.postImage}>
          {image === ''
            ? <img src='/images/no-pic.png' alt='no-pic' />
            : typeof image === 'object'
              ? <img id='image-preview' src='' alt='post-pic' />
              : <img src={image} alt='post-pic' />
          }
        </div>
        <div className={styles.postInfo}>
          <h2>{title}</h2>
          <p>Last update: {lastUpdate}</p>
          <h2>{price ? `${price} $` : ''}</h2>
        </div>
      </Link>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
