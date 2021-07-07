import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Link } from '@material-ui/core';

import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h1>Oopsy! There&apos;s nothing here... :)</h1>
    <Link href='/'>
      <h2>-&gt; back to the main page &lt;-</h2>
    </Link>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
