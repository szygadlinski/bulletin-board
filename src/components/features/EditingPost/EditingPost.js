import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './EditingPost.module.scss';

const Component = ({className, title, content, email, status, image, price, phone, city}) => {

  const [newTitle, setNewTitle] = useState(title);
  const handleNewTitle = event => {
    setNewTitle(event.target.value);
  };

  const [newContent, setNewContent] = useState(content);
  const handleNewContent = event => {
    setNewContent(event.target.value);
  };

  const [newEmail, setNewEmail] = useState(email);
  const handleNewEmail = event => {
    setNewEmail(event.target.value);
  };

  const [newStatus, setNewStatus] = useState(status);
  const handleNewStatus = event => {
    setNewStatus(event.target.value);
  };

  const [newImage, setNewImage] = useState(null);
  const handleNewImage = ({ target }) => {
    setNewImage(target.files[0]);
  };

  const [newPrice, setNewPrice] = useState(price);
  const handleNewPrice = event => {
    setNewPrice(event.target.value);
  };

  const [newPhone, setNewPhone] = useState(phone);
  const handleNewPhone = event => {
    setNewPhone(event.target.value);
  };

  const [newCity, setNewCity] = useState(city);
  const handleNewCity = event => {
    setNewCity(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Editing post</h1>

      <form className={styles.form} action='/' method='POST'>
        <TextField
          id='post-title'
          className={styles.formInput}
          label='Title'
          value={newTitle}
          onChange={handleNewTitle}
          variant='outlined'
          required
          inputProps={{
            minLength: 10,
            maxLength: 30,
          }}
        />

        <TextField
          id='post-description'
          className={styles.formInput}
          label='Description'
          value={newContent}
          onChange={handleNewContent}
          variant='outlined'
          multiline
          rows='10'
          required
          inputProps={{
            minLength: 20,
            maxLength: 5000,
          }}
        />

        <TextField
          id='post-email'
          className={styles.formInput}
          label='E-mail'
          value={newEmail}
          onChange={handleNewEmail}
          variant='outlined'
          type='email'
          required
          inputProps={{
            minLength: 6,
            maxLength: 100,
          }}
        />

        <FormControl variant='outlined' className={styles.formInput} required>
          <InputLabel id='post-status-label'>Status</InputLabel>
          <Select
            labelId='post-status-label'
            id='post-status'
            value={newStatus}
            onChange={handleNewStatus}
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
              type='file'
              onChange={handleNewImage}
              hidden
            />
            {newImage ? `Uploaded: ${newImage.name}` : 'Upload image'}
          </Button>
        </label>

        <FormControl className={styles.formInput} variant='outlined'>
          <InputLabel htmlFor='post-price'>Price</InputLabel>
          <OutlinedInput
            id='post-price'
            type='number'
            value={newPrice}
            onChange={handleNewPrice}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={40}
            inputProps={{
              min: 1,
              max: 999999,
            }}
          />
        </FormControl>

        <TextField
          id='post-phone'
          type='tel'
          className={styles.formInput}
          label='Phone'
          value={newPhone}
          onChange={handleNewPhone}
          variant='outlined'
          inputProps={{
            minLength: 9,
            maxLength: 20,
          }}
        />

        <TextField
          id='post-location'
          className={styles.formInput}
          label='Location'
          value={newCity}
          onChange={handleNewCity}
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
        >
          Update!
        </Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  phone: PropTypes.string,
  city: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as EditingPost,
  // Container as EditingPost,
  Component as EditingPostComponent,
};
