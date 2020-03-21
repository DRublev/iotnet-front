import React from 'react';
import {MultipleShadowsView} from './wrappers/MultipleShadowsView';
import * as styles from '../styles';

export const Card = (children: any, ...props) => {
  return (
    <MultipleShadowsView shadows={styles.shadows.outer} {...props}>
      {children}
    </MultipleShadowsView>
  );
};
