import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserType/*, reduxActionCreator */} from '../../../redux/userRedux';

import { Button, Link } from '@material-ui/core';

import styles from './PostDetails.module.scss';

const Component = ({ className, userType, id, title, content, date, lastUpdate, email, status, image, price, phone, city }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>
      <h1>{title}</h1>

      {userType === 'not-logged-in'
        ? ''
        : <Button
          className={styles.button}
          component={Link}
          href={`/post/${id}/edit`}
          variant="outlined"
          color="inherit"
          size="large"
        >
          Edit post
        </Button>
      }
    </div>

    <div className={styles.postData}>
      <div className={styles.postImage}>
        <img src={image} alt='post-pic' />
      </div>

      <div className={styles.postText}>
        {content}
      </div>

      <div className={styles.postInfo}>
        <h1>Price: {price} $</h1>

        <div className={styles.contactDetails}>
          <h2>Contact the seller:</h2>
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <h3>{city}</h3>
        </div>

        <p>Status: {status}</p>
        <p>Added: {date}</p>
        <p>Last updated: {lastUpdate}</p>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userType: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  lastUpdate: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  phone: PropTypes.string,
  city: PropTypes.string,
};

const mapStateToProps = state => ({
  userType: getUserType(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  // Component as PostDetails,
  Container as PostDetails,
  Component as PostDetailsComponent,
};
