import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

const TippyWrapper = ({ children, ...props }) => {
  return <Tippy {...props}>{children}</Tippy>;
};

TippyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TippyWrapper;
