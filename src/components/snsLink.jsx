 import PropTypes from 'prop-types';

const SnsLink = ({ url, icon, label, ariaLabel }) => {
  return (
    <li>
      <a href={url} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={label} width="52" height="52" />
      </a>
    </li>
  );
};

// 속성 검사
SnsLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default SnsLink;
