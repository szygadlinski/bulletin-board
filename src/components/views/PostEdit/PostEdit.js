import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getUserStatus, getUserEmail/*, reduxActionCreator */} from '../../../redux/userRedux';

import { EditingPost } from '../../features/EditingPost/EditingPost';
import { NotFound } from '../NotFound/NotFound';

import styles from './PostEdit.module.scss';

const Component = ({ className, userStatus, userEmail, posts, ...props }) => (
  <div className={clsx(className, styles.root)}>
    {posts.map(post => (
      post.id !== props.match.params.id
        ? ''
        : userStatus === 'not-logged-in' || (userStatus === 'logged-in' && userEmail !== post.email)
          ? <NotFound key={post.id} />
          : <EditingPost key={post.id} {...post} />
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userStatus: PropTypes.string,
  userEmail: PropTypes.string,
  posts: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userStatus: getUserStatus(state),
  userEmail: getUserEmail(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
