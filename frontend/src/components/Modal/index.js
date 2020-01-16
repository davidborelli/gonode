import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Modal = ({ children, size }) => (
  <S.Container>
    <S.Content size={size}>{children}</S.Content>
  </S.Container>
);

Modal.defaultProps = {
  size: 'default',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.string,
};

export default Modal;
