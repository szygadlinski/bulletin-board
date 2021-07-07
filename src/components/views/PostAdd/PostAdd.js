import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserStatus} from '../../../redux/userRedux';

import { AddingPost } from '../../features/AddingPost/AddingPost';
import { NotFound } from '../NotFound/NotFound';

import styles from './PostAdd.module.scss';

const Component = ({className, userStatus}) => (
  <div className={clsx(className, styles.root)}>
    {userStatus === 'not-logged-in'
      ? <NotFound />
      : <AddingPost />
    }
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userStatus: PropTypes.string,
};

const mapStateToProps = state => ({
  userStatus: getUserStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
