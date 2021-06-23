import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll/*, reduxActionCreator */} from '../../../redux/postsRedux';

import { NotFound } from '../NotFound/NotFound';
import { PostDetails } from '../../features/PostDetails/PostDetails';

import styles from './Post.module.scss';

const Component = ({className, posts, ...props}) => {

  const properPost = posts.filter(post => post._id === props.match.params.id);

  return (
    <div className={clsx(className, styles.root)}>
      {properPost.length > 0
        ? <PostDetails key={properPost[0]._id} {...properPost[0]} />
        : <NotFound />
      }
    </div>
  );
};

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
