import { IconContainer } from '@/components/index';
import { footerLinks } from '@/utils/links';

const FooterLinks = () => {
  return (
    <div className="flex gap-4 md:mb-0 mb-2">
      {footerLinks.length > 0 &&
        footerLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.url}
              className="block text-2xl"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconContainer icon={<Icon />} />
            </a>
          );
        })}
    </div>
  );
};

export default FooterLinks;
