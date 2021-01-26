import React, { useState } from 'react';
import Link from 'next/link';

import styles from './navigation.module.css';
import headerStyles from './header.module.css';
import useDropdown from '../hooks/useDropdown';

const NavigationButton = React.memo(
  ({
    title,
    href,
    children,
    className = '',
  }: {
    title: string;
    href: string;
    children?: React.ReactElement;
    className?: string;
  }) => (
    <Link href={href}>
      <a href={href} title={title} className={`${className || ''} ${styles.link}`}>
        {children || title}
      </a>
    </Link>
  )
);

const NavigationButtonMobile = React.memo(
  ({ title, href, theme }: { title: string; href: string; theme: string }) => (
    <Link href={href}>
      <a href={href} title={title} className={styles[`link-mobile-${theme}`]}>
        {title}
      </a>
    </Link>
  )
);

const GithubIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-5 w-5"
  >
    <title>GitHub icon</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

function Navigation({ theme }: { theme: string }): JSX.Element {
  const { dropdownRef, setOpen, visible } = useDropdown<HTMLDivElement>();

  return (
    <nav className={`${styles.navigation} ${headerStyles[`header-${theme}`]}`}>
      <div className={styles['navigation-desktop']}>
        <div className="text-left">
          <NavigationButton href="/compass" title="Kompass" />
          <NavigationButton href="/quiz" title="Quiz" />
          <NavigationButton href="/blog" title="Blog" />
          <NavigationButton href="/tools" title="Tools" />
        </div>
        <NavigationButton href="/" title="Stupo" className={styles['link-stupo']} />
        <div className="text-right">
          <NavigationButton href="/pupils" title="Für Schüler" />
          <NavigationButton href="/teachers" title="Für Lehrer" />
          <NavigationButton href="https://github.com/jembach/stupo-web-main" title="GitHub">
            <GithubIcon />
          </NavigationButton>
        </div>
      </div>
      <div className={styles['navigation-mobile']}>
        <button type="button">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            onClick={setOpen}
          >
            <title>Menu</title>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <NavigationButton href="https://github.com/jembach/stupo-web-main" title="GitHub">
          <GithubIcon />
        </NavigationButton>
      </div>
      <div className={`${styles['container-mobile']} ${visible ? 'block' : 'hidden'}`}>
        <div className={styles['container-mobile-wrapper']} ref={dropdownRef}>
          <div className={styles['container-mobile-content']}>
            <NavigationButtonMobile href="/compass" title="Kompass" theme={theme} />
            <NavigationButtonMobile href="/quiz" title="Quiz" theme={theme} />
            <NavigationButtonMobile href="/blog" title="Blog" theme={theme} />
            <NavigationButtonMobile href="/tools" title="Tools" theme={theme} />
            <NavigationButtonMobile href="/pupils" title="Für Schüler" theme={theme} />
            <NavigationButtonMobile href="/teachers" title="Für Lehrer" theme={theme} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
