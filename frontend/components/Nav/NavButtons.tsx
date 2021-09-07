import { Dispatch, FC, SetStateAction } from 'react';
import { useTheme } from 'next-themes';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IconContainer } from '@/components/index';

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const NavButtons: FC<Props> = ({ showMenu, setShowMenu }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        type="button"
        className="block text-2xl text-gray-600 p-2 hover:opacity-75 dark:text-gray-50"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <IconContainer icon={theme === 'dark' ? <FiMoon /> : <FiSun />} />
      </button>
      <a
        href="https://github.com/coffmanjrp"
        className="block text-2xl p-2"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconContainer icon={<FaGithub />} />
      </a>
      <button
        type="button"
        className="block text-2xl text-gray-600 p-2 hover:opacity-75 md:hidden dark:text-gray-50"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <IconContainer icon={showMenu ? <FaTimes /> : <FaBars />} />
      </button>
    </>
  );
};

export default NavButtons;
