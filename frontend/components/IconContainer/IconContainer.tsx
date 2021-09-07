import { FC, ReactElement } from 'react';
import { IconContext } from 'react-icons';

type Props = {
  icon: ReactElement;
  className?: string;
  color?: string;
  size?: string;
};

const IconContainer: FC<Props> = ({ icon, className, color, size }) => {
  return (
    <IconContext.Provider value={{ className, color, size }}>
      {icon}
    </IconContext.Provider>
  );
};

export default IconContainer;
