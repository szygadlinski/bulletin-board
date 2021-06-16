import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { getUserEmail } from '../../../redux/userRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './EditingPost.module.scss';

const Component = ({ className, userEmail, editPost, title, content, status, image, price, phone, city, imageName }) => {

  const [updatedPost, setUpdatedPost] = useState({
    title: title,
    content: content,
    status: status,
    image: '',
    price: price,
    phone: phone,
    city: city,
    imageName: imageName,
  });

  const handleUpdatedPost = event => {
    if(event.target.name === 'image') {
      const image = event.target.files[0];
      setUpdatedPost({
        ...updatedPost,
        image: event.target.value,
        imageName: image.name,
      });
    } else {
      setUpdatedPost({
        ...updatedPost,
        [event.target.name]: event.target.value,
      });
    }
  };

  const currentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);
    return `${day}.${month}.${year} ${hour}:${minute}`;
  };

  const handleSubmit = event => {
    event.preventDefault();

    editPost({
      ...updatedPost,
      lastUpdate: currentDate(),
    });
    alert('Post successfully updated!');

  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Editing post</h1>

      <form className={styles.form}>
        <TextField
          id='post-title'
          name='title'
          className={styles.formInput}
          label='Title'
          variant='outlined'
          value={updatedPost.title}
          onChange={handleUpdatedPost}
          required
          inputProps={{
            minLength: 10,
            maxLength: 30,
          }}
        />

        <TextField
          id='post-description'
          name='content'
          className={styles.formInput}
          label='Description'
          variant='outlined'
          value={updatedPost.content}
          onChange={handleUpdatedPost}
          multiline
          rows='10'
          required
          inputProps={{
            minLength: 20,
            maxLength: 5000,
          }}
        />

        <FormControl variant='outlined' className={styles.formInput} required>
          <InputLabel id='post-status-label'>Status</InputLabel>
          <Select
            labelId='post-status-label'
            id='post-status'
            name='status'
            value={updatedPost.status}
            onChange={handleUpdatedPost}
            label='Status'
          >
            <MenuItem value={'draft'}>Draft</MenuItem>
            <MenuItem value={'published'}>Published</MenuItem>
            <MenuItem value={'closed'}>Closed</MenuItem>
          </Select>
        </FormControl>

        <label htmlFor='post-image'>
          <Button className={styles.formInput + ' ' + styles.formButton} variant='outlined' component='span'>
            <input
              accept='image/*'
              id='post-image'
              name='image'
              type='file'
              value={updatedPost.image}
              onChange={handleUpdatedPost}
              hidden
            />
            {updatedPost.image.length > 0 ? `Uploaded: ${updatedPost.imageName}` : 'Upload image'}
          </Button>
        </label>

        <FormControl className={styles.formInput} variant='outlined'>
          <InputLabel htmlFor='post-price'>Price</InputLabel>
          <OutlinedInput
            id='post-price'
            type='number'
            name='price'
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={40}
            value={updatedPost.price}
            onChange={handleUpdatedPost}
            inputProps={{
              min: 1,
              max: 999999,
            }}
          />
        </FormControl>

        <TextField
          id='post-phone'
          type='tel'
          name='phone'
          className={styles.formInput}
          label='Phone'
          variant='outlined'
          value={updatedPost.phone}
          onChange={handleUpdatedPost}
          inputProps={{
            minLength: 9,
            maxLength: 20,
          }}
        />

        <TextField
          id='post-location'
          name='city'
          className={styles.formInput}
          label='Location'
          variant='outlined'
          value={updatedPost.city}
          onChange={handleUpdatedPost}
          inputProps={{
            minLength: 3,
            maxLength: 30,
          }}
        />

        <Button
          className={styles.formInput + ' ' + styles.formSubmit}
          type='submit'
          variant='outlined'
          size='large'
          onClick={handleSubmit}
        >
          Update!
        </Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  userEmail: PropTypes.string,
  editPost: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  phone: PropTypes.string,
  city: PropTypes.string,
  imageName: PropTypes.string,
};

const mapStateToProps = state => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  editPost: updatedPost => dispatch(editPost(updatedPost)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as EditingPost,
  Container as EditingPost,
  Component as EditingPostComponent,
};
