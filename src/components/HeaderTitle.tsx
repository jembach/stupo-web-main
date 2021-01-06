import React from 'react';

import styles from './headerTitle.module.css';

function HeaderTitle({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): JSX.Element {
  return <span className={styles['header-title']}>{children}</span>;
}

export default HeaderTitle;
