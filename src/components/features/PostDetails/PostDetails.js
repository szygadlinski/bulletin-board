import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserStatus, getUserEmail } from '../../../redux/userRedux';

import { Button, Link } from '@material-ui/core';

import styles from './PostDetails.module.scss';

const Component = ({ className, userStatus, userEmail, _id, title, content, date, lastUpdate, email, status, image, price, phone, city }) => {

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
      <div className={styles.header}>
        <h1>{title}</h1>

        {userStatus === 'not-logged-in' || (userStatus === 'logged-in' && userEmail !== email)
          ? ''
          : <Button
            className={styles.button}
            component={Link}
            href={`/post/${_id}/edit`}
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
            ? <img src='/images/no-pic.png' alt='no-pic' />
            : typeof image === 'object'
              ? <img id='image-preview' src='' alt='post-pic' />
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
};

Component.propTypes = {
  className: PropTypes.string,
  userStatus: PropTypes.string,
  userEmail: PropTypes.string,
  _id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  lastUpdate: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  phone: PropTypes.string,
  city: PropTypes.string,
};

const mapStateToProps = state => ({
  userStatus: getUserStatus(state),
  userEmail: getUserEmail(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostDetails,
  Component as PostDetailsComponent,
};
