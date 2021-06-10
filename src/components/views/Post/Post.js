import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll/*, reduxActionCreator */} from '../../../redux/postsRedux';

import { PostDetails } from '../../features/PostDetails/PostDetails';

import styles from './Post.module.scss';

const Component = ({className, posts, ...props}) => (
  <div className={clsx(className, styles.root)}>
    {posts.map(post => (
      post.id !== props.match.params.id
        ? ''
        : <PostDetails key={post.id} {...props} />
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
