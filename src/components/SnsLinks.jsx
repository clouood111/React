import PropTypes from 'prop-types';

const SnsLinks = ({ url, icon, ariaLabel }) => {
  return (
    <li>
      <a href={url} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
      </a>
    </li>
  );
};

SnsLinks.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default SnsLinks;