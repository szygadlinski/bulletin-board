import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getUserStatus, getUserEmail/*, reduxActionCreator */} from '../../../redux/userRedux';

import { EditingPost } from '../../features/EditingPost/EditingPost';
import { NotFound } from '../NotFound/NotFound';

import styles from './PostEdit.module.scss';

const Component = ({ className, userStatus, userEmail, posts, ...props }) => {

  const properPost = posts.filter(post => post.id === props.match.params.id);

  return (
    <div className={clsx(className, styles.root)}>
      {properPost.length > 0
        ? userStatus === 'not-logged-in' || (userStatus === 'logged-in' && userEmail !== properPost[0].email)
          ? <NotFound />
          : <EditingPost key={properPost[0].id} {...properPost[0]} />
        : <NotFound />
      }
    </div>
  );
};

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
