import React from 'react';
import Link from 'next/link';

const NavigationButton = React.memo(
  ({ title, href, className = '' }: { title: string; href: string; className?: string }) => (
    <Link href={href}>
      <a
        href={href}
        title={title}
        className={`text-lg inline-block px-8 py-4 first:pl-0 last:pr-0 font-light active:underline hover:underline ${
          className || ''
        }`}
      >
        {title}
      </a>
    </Link>
  )
);

function Navigation(): JSX.Element {
  return (
    <div className="w-full overflow-hidden">
      <nav className="flex mx-auto container justify-between top-0 py-4">
        <div className="text-left">
          <NavigationButton href="/compass" title="Kompass" />
          <NavigationButton href="/quiz" title="Quiz" />
          <NavigationButton href="/blog" title="Blog" />
          <NavigationButton href="/tools" title="Tools" />
        </div>
        <NavigationButton
          href="/"
          title="Stupo"
          className="font-bold uppercase text-2xl tracking-widest"
        />
        <div className="text-right">
          <NavigationButton href="/pupils" title="Für Schüler" />
          <NavigationButton href="/teachers" title="Für Lehrer" />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
