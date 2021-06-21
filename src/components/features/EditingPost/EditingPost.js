import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './EditingPost.module.scss';

const Component = ({ className, editPost, id, title, content, date, lastUpdate, email, status, image, price, phone, city, imageName }) => {

  const [updatedPost, setUpdatedPost] = useState({
    id: id,
    title: title,
    content: content,
    date: date,
    lastUpdate: lastUpdate,
    email: email,
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
      const fr = new FileReader();
      fr.readAsDataURL(image);
      fr.onload = function() {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = this.result;
      };
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

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    if(updatedPost.title && updatedPost.content && updatedPost.status) {
      if(updatedPost.title.length > 10) {
        if(updatedPost.content.length > 20) {
          editPost({
            ...updatedPost,
            lastUpdate: currentDate(),
          });
          alert('Post successfully updated!');
          history.push('/');
        } else {
          alert('Your description is too short!');
        }
      } else {
        alert('Your title is too short!');
      }
    } else {
      alert('Please fill all of the necessary fields!');
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Editing post</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
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
          <img id='image-preview' className={styles.imagePreview} src='' alt='' />
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
        >
          Update!
        </Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  editPost: PropTypes.func,
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
  imageName: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  editPost: updatedPost => dispatch(editPost(updatedPost)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as EditingPost,
  Container as EditingPost,
  Component as EditingPostComponent,
};
