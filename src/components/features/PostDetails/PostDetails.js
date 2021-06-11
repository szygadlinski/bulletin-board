import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserStatus/*, reduxActionCreator */} from '../../../redux/userRedux';

import { Button, Link } from '@material-ui/core';

import styles from './PostDetails.module.scss';

const Component = ({ className, userStatus, id, title, content, date, lastUpdate, email, status, image, price, phone, city }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>
      <h1>{title}</h1>

      {userStatus === 'not-logged-in'
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

    <div className={styles.post}>
      <div className={styles.postImage}>
        {image === ''
          ? <img src='https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-14-512.png' alt='no-pic' />
          : <img src={image} alt='post-pic' />
        }
      </div>

      <div className={styles.postText}>
        {content}
      </div>

      <div className={styles.postInfo}>
        <h2 className={styles.price}>{price ? `Price: ${price} $` : 'Ask for the price'}</h2>

        <div className={styles.contactDetails}>
          <h2>Contact the seller:</h2>
          <h3><a href={`mailto:${email}`} >{email}</a></h3>
          {phone ? <h3><a href={`tel:${phone}`} >{phone}</a></h3> : ''}
          {city ? <h3><a href={`https://www.google.com/maps/place/${city}`} >Location: {city}</a></h3> : ''}
        </div>

        <div className={styles.postData}>
          <p>Status: {status}</p>
          <p>Added: {date}</p>
          <p>Last updated: {lastUpdate}</p>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userStatus: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  lastUpdate: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  phone: PropTypes.string,
  city: PropTypes.string,
};

const mapStateToProps = state => ({
  userStatus: getUserStatus(state),
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
