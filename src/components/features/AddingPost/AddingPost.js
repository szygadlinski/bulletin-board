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

  const [image, setImage] = useState(null);

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h1>Adding new post</h1>

      <form className={styles.form} action='/' method='POST'>
        <TextField
          id='post-title'
          className={styles.formInput}
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
          className={styles.formInput}
          label='Description'
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
          <Button className={styles.formInput + ' ' + styles.formButton} variant='outlined' component='span'>
            <input
              accept='image/*'
              id='post-image'
              type='file'
              onChange={handleImage}
              hidden
            />
            {image ? `Uploaded: ${image.name}` : 'Upload image'}
          </Button>
        </label>

        <FormControl className={styles.formInput} variant='outlined'>
          <InputLabel htmlFor='post-price'>Price</InputLabel>
          <OutlinedInput
            id='post-price'
            type='number'
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
