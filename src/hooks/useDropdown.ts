import { useEffect, useRef, useState } from 'react';

export default function useDropdown<Element extends HTMLElement>(): {
  dropdownRef: React.MutableRefObject<Element>;
  setOpen: () => void;
  setClose: () => void;
  visible: boolean;
} {
  const [visible, setVisible] = useState<boolean>(false);
  const dropdownRef = useRef<Element>();

  function setOpen() {
    setVisible(true);
  }

  function setClose() {
    setVisible(false);
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (visible) {
      const outsideClickListener = (event) => {
        if (!dropdownRef.current.contains(event.target) && visible) {
          setClose();
        }
      };

      document.addEventListener('click', outsideClickListener);

      return () => document.removeEventListener('click', outsideClickListener);
    }
  }, [visible]);

  return { dropdownRef, setOpen, setClose, visible };
}
