import SnsLink from './SnsLink';
import '@/styles/SnsLink.css';

const links = [
  { url: 'https://www.youtube.com/', icon: '../../public/icon/Youtube.svg', label: 'YouTube', ariaLabel: '유튜브 바로가기' },
  { url: 'https://www.instagram.com/', icon: '../../public/icon/Instagram.svg', label: 'Instagram', ariaLabel: '인스타그램 바로가기' },
  { url: 'https://x.com/?lang=ko', icon: '../../public/icon/Twitter.svg', label: 'Twitter', ariaLabel: '트위터 바로가기' },
  { url: 'https://www.facebook.com/?locale=ko_KR', icon: '../../public/icon/Facebook.svg', label: 'Facebook', ariaLabel: '페이스북 바로가기' },
];

const SnsLinks = () => {
  return (
    <ul className="footer__sns">
      {links.map(link => (
        <SnsLink key={link.label} {...link} />
      ))}
    </ul>
  );
};

export default SnsLinks;
