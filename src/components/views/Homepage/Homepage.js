import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getUserType } from '../../../redux/userRedux';

import { Button, Link } from '@material-ui/core';

import { PostSummary } from '../../features/PostSummary/PostSummary';

import styles from './Homepage.module.scss';

const Component = ({ className, posts, userType }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>
      <h1>Latest posts</h1>

      {userType === 'not-logged-in'
        ? ''
        : <Button
          className={styles.button}
          component={Link}
          href='/post/add'
          variant="outlined"
          color="inherit"
          size="large"
        >
          + Add new post
        </Button>
      }
    </div>

    {posts.map(post => (
      <PostSummary key={post.id} {...post} />
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  userType: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userType: getUserType(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
