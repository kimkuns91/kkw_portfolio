import { PropsWithChildren } from 'react';

const IconBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-2 border-accent rounded-full p-1 bg-lightest-navy grow-0 h-max">
      {children}
    </div>
  );
};

export default IconBackground;
