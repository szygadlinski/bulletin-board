import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll/*, reduxActionCreator */} from '../../../redux/postsRedux';

import { Post } from '../../features/Post/Post';

import styles from './Homepage.module.scss';

const Component = ({className, posts}) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.header}>Latest posts</h1>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
