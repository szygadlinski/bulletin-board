import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';
//import randomId from '@szygadlinski/id-generator';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { getUserEmail } from '../../../redux/userRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './AddingPost.module.scss';

const Component = ({ className, userEmail, addPost }) => {

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    status: 'draft',
    image: '',
    price: '',
    phone: '',
    city: '',
    imageName: '',
  });

  const handleNewPost = event => {
    if(event.target.name === 'image') {
      const image = event.target.files[0];
      const fr = new FileReader();
      fr.readAsDataURL(image);
      fr.onload = function() {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = this.result;
      };
      setNewPost({
        ...newPost,
        image: image,
        imageName: image.name,
      });
    } else {
      setNewPost({
        ...newPost,
        [event.target.name]: event.target.value,
      });
    }
  };

  const currentDate = () => {
    const date = new Date(Date.now());
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);
    return `${month}.${day}.${year} ${hour}:${minute}`;
  };

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    if(!newPost.title || !newPost.content || !newPost.status) {
      alert('Please fill all of the necessary fields!');
    } else if(newPost.title.length < 10) {
      alert('Your title is too short!');
    } else if(newPost.content.length < 20) {
      alert('Your description is too short!');
    } else {
      addPost({
        ...newPost,
        //id: randomId(10),
        email: userEmail,
        date: currentDate(),
        lastUpdate: currentDate(),
      });
      setNewPost({
        title: '',
        content: '',
        status: 'draft',
        image: '',
        price: '',
        phone: '',
        city: '',
        imageName: '',
      });
      alert('Post successfully added!');
      history.push('/');
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Adding new post</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
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
              onChange={handleNewPost}
              hidden
            />
            {newPost.image ? `Uploaded: ${newPost.imageName}` : 'Upload image'}
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
          variant='outlined'
          value={newPost.phone}
          onChange={handleNewPost}
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
          value={newPost.city}
          onChange={handleNewPost}
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
