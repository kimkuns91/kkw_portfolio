import Link from 'next/link';
import { SOCIALS } from '@/constants';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIALS.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
