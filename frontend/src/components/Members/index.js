import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MembersActions from '~/store/ducks/members';

import * as S from './styles';
import Modal from '../Modal';
import Button from '~/styles/components/Button';

const Members = ({ closeMembersModal }) => (
  <Modal size="big">
    <h1>Membros</h1>

    <form onSubmit={() => {}}>
      <S.MembersList>
        <li>
          <strong>David Borelli</strong>
        </li>
      </S.MembersList>

      <Button onClick={closeMembersModal} filled={false} color="gray">
        Cancelar
      </Button>
    </form>
  </Modal>
);

Members.propTypes = {
  closeMembersModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(Members);
