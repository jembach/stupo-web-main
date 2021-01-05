export type Page<P = null> = {
  title: string;
  keywords: string;
  description: string;
  // eslint-disable-next-line no-undef
  (params: P): JSX.Element;
};
