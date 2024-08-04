import SnsLink from './SnsLinks';
import '@/styles/SnsLinksList.css';

const links = [
  { url: 'https://www.youtube.com/', icon: '/icon/Youtube.svg', ariaLabel: '유튜브 바로가기' },
  { url: 'https://www.instagram.com/', icon: '/icon/Instagram.svg', ariaLabel: '인스타그램 바로가기' },
  { url: 'https://x.com/?lang=ko', icon: '/icon/Twitter.svg', ariaLabel: '트위터 바로가기' },
  { url: 'https://www.facebook.com/?locale=ko_KR', icon: '/icon/Facebook.svg', ariaLabel: '페이스북 바로가기' },
];

const SnsLinksList = () => {
  return (
    <nav>
      <ul className="footer__sns">
        {links.map(link => (
          <SnsLink key={link.url} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default SnsLinksList;
