import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import randomId from '@szygadlinski/id-generator';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { getUserEmail } from '../../../redux/userRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './AddingPost.module.scss';

const Component = ({ className, userEmail, addPost }) => {

  const [newPost, setNewPost] = useState({ image: '' });

  const handleNewPost = event => {
    if(event.target.name === 'image') {
      const image = event.target.files[0];
      setNewPost({ ...newPost, image: event.target.value, imageName: image.name });
    } else {
      setNewPost({ ...newPost, [event.target.name]: event.target.value });
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

    if(newPost.title && newPost.content && newPost.status) {
      if(newPost.title.length > 10) {
        if(newPost.content.length > 20) {
          addPost({
            ...newPost,
            id: randomId(10),
            email: userEmail,
            date: currentDate(),
            lastUpdate: currentDate(),
          });
          setNewPost({
            title: '',
            content: '',
            status: '',
            image: '',
            price: '',
            phone: '',
            city: '',
            imageName: '',
          });
          alert('Post successfully added!');
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
      <h1>Adding new post</h1>

      <form className={styles.form}>
        <TextField
          id='post-title'
          name='title'
          className={styles.formInput}
          label='Title'
          variant='outlined'
          value={newPost.title}
          onChange={handleNewPost}
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
          value={newPost.content}
          onChange={handleNewPost}
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
            value={newPost.status}
            onChange={handleNewPost}
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
              value={newPost.image}
              onChange={handleNewPost}
              hidden
            />
            {newPost.image.length > 0 ? `Uploaded: ${newPost.imageName}` : 'Upload image'}
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
            value={newPost.price}
            onChange={handleNewPost}
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
          value={newPost.phone}
          onChange={handleNewPost}
          variant='outlined'
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
          value={newPost.city}
          onChange={handleNewPost}
          variant='outlined'
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
          Publish!
        </Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  userEmail: PropTypes.string,
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: newPost => dispatch(addPost(newPost)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as AddingPost,
  Container as AddingPost,
  Component as AddingPostComponent,
};
