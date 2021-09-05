import { FC, ReactElement } from 'react';
import { IconContext } from 'react-icons';

type IconContainer = {
  icon: ReactElement;
  className?: string;
};

const IconContainer: FC<IconContainer> = ({ icon, className }) => {
  return (
    <IconContext.Provider value={{ className }}>{icon}</IconContext.Provider>
  );
};

export default IconContainer;
