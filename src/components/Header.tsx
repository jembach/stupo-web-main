import React from 'react';
import Navigation from './Navigation';

import styles from './header.module.css';

function Header({
  children,
  theme,
  img,
  alt,
}: {
  theme: string;
  img: string;
  alt: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className={styles[`header-${theme}`]}>
      <Navigation theme={theme} />
      <div className={styles.content}>
        <div className={styles.title}>{children}</div>
        <div className={styles['image-wrapper']}>
          <img
            src={img}
            alt={alt}
            className={styles.image}
            style={{ maxHeight: 450 }}
            height="720"
            width="850"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
