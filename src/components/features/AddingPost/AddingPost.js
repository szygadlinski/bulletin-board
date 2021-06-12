import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button, OutlinedInput, InputAdornment } from '@material-ui/core';

import styles from './AddingPost.module.scss';

const Component = ({className}) => {

  const [status, setStatus] = useState('');

  const handleStatus = event => {
    setStatus(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Adding new post</h1>

      <form className={styles.form} action='/' method='POST'>
        <TextField
          id='post-title'
          className={styles.postTitle}
          label='Title'
          variant='outlined'
          required
          inputProps={{
            minLength: 10,
            maxLength: 30,
          }}
        />

        <TextField
          id='post-description'
          className={styles.postDescription}
          label='Description'
          variant='outlined'
          multiline
          rows='8'
          required
          inputProps={{
            minLength: 20,
            maxLength: 5000,
          }}
        />

        <TextField
          id='post-email'
          className={styles.postEmail}
          label='E-mail'
          variant='outlined'
          type='email'
          required
          inputProps={{
            minLength: 6,
            maxLength: 100,
          }}
        />

        <FormControl variant='outlined' className={styles.postStatus} required>
          <InputLabel id='post-status-label'>Status</InputLabel>
          <Select
            labelId='post-status-label'
            id='post-status'
            value={status}
            onChange={handleStatus}
            label='Status'
          >
            <MenuItem value={'draft'}>Draft</MenuItem>
            <MenuItem value={'published'}>Published</MenuItem>
            <MenuItem value={'closed'}>Closed</MenuItem>
          </Select>
        </FormControl>

        <label htmlFor='post-image'>
          <Button className={styles.postImage} variant='outlined' component='span'>
            Upload image
          </Button>
        </label>
        <input
          accept='image/*'
          id='post-image'
          type='file'
          hidden
        />

        <FormControl className={styles.postPrice} variant='outlined'>
          <InputLabel htmlFor='post-price'>Price</InputLabel>
          <OutlinedInput
            id='post-price'
            type='number'
            startAdornment={<InputAdornment>$</InputAdornment>}
            labelWidth={40}
            inputProps={{
              min: 1,
              max: 999999,
            }}
          />
        </FormControl>

        <TextField
          id='post-phone'
          className={styles.postPhone}
          label='Phone'
          variant='outlined'
          inputProps={{
            minLength: 9,
            maxLength: 20,
          }}
        />

        <TextField
          id='post-location'
          className={styles.postLocation}
          label='Location'
          variant='outlined'
          inputProps={{
            minLength: 3,
            maxLength: 30,
          }}
        />

        <Button
          className={styles.postSubmit}
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
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as AddingPost,
  // Container as AddingPost,
  Component as AddingPostComponent,
};
