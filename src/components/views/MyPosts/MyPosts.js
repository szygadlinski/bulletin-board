import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getUserStatus, getUserEmail } from '../../../redux/userRedux';

import { Button, Link } from '@material-ui/core';

import { NotFound } from '../NotFound/NotFound';
import { PostSummary } from '../../features/PostSummary/PostSummary';

import styles from './MyPosts.module.scss';

const Component = ({className, posts, userStatus, userEmail}) => (
  <div className={clsx(className, styles.root)}>
    {userStatus === 'not-logged-in'
      ? <NotFound />
      : <>
        <div className={styles.header}>
          <h1>My posts</h1>
          <Button
            className={styles.button}
            component={Link}
            href='/post/add'
            variant="outlined"
            color="inherit"
            size="large"
          >
          + Add new post
          </Button>
        </div>

        {posts
          .filter(post => post.email === userEmail)
          .sort((a, b) => (
            new Date(b.lastUpdate) - new Date(a.lastUpdate)
          ))
          .map(post => (
            <PostSummary key={post._id} {...post} />
          ))
        }
      </>
    }
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  userStatus: PropTypes.string,
  userEmail: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userStatus: getUserStatus(state),
  userEmail: getUserEmail(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as MyPosts,
  Component as MyPostsComponent,
};
