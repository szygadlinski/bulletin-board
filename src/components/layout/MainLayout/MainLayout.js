import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Container, Paper } from '@material-ui/core';

import { Header } from '../Header/Header';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <Container>
      <Paper elevation={3}>
        {children}
      </Paper>
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
