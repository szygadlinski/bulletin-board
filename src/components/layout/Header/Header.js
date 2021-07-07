import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserStatus, changeUser } from '../../../redux/userRedux';

import { AppBar, Toolbar, Typography, Button, Link, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import styles from './Header.module.scss';

const Component = ({ className, userStatus, changeUser }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button
          className={styles.logo}
          component={NavLink}
          to='/'
          variant="text"
          color="inherit"
        >
          <Typography variant="h3">
            Bulletin Board
          </Typography>
        </Button>

        <FormControl className={styles.userStatus}>
          <InputLabel id="user-type-label">User type</InputLabel>
          <Select
            labelId="user-type-label"
            id="user-type"
            value={userStatus}
            onChange={event => changeUser(event.target.value)}
          >
            <MenuItem value={'logged-in'}>Logged In</MenuItem>
            <MenuItem value={'not-logged-in'}>Not Logged In</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
          </Select>
        </FormControl>

        {userStatus === 'not-logged-in'
          ? ''
          : <Button
            className={styles.button + ' ' + styles.postsButton}
            component={NavLink}
            to='/my-posts'
            variant="outlined"
            color="inherit"
            size="large"
          >
            My posts
          </Button>
        }

        <Button
          className={styles.button + ' ' + styles.loginButton}
          component={Link}
          href='https://google.com'
          variant="outlined"
          color="inherit"
          size="large"
        >
          {userStatus === 'not-logged-in' ? 'Sign in' : 'Sign out'}
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userStatus: PropTypes.string,
  changeUser: PropTypes.func,
};

const mapStateToProps = state => ({
  userStatus: getUserStatus(state),
});

const mapDispatchToProps = dispatch => ({
  changeUser: userType => dispatch(changeUser(userType)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
