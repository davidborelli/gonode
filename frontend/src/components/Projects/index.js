import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as S from './styled';
import Button from '~/styles/components/Button';

const Projects = ({ activeTeam }) => {
  if (!activeTeam) return null;

  return (
    <S.Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+ Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>

      <S.Project>
        <p>Aplicação com ReactNative</p>
      </S.Project>

      <S.Project>
        <p>Aplicação com ReactNative</p>
      </S.Project>

      <S.Project>
        <p>Aplicação com ReactNative</p>
      </S.Project>

      <S.Project>
        <p>Aplicação com ReactNative</p>
      </S.Project>
    </S.Container>
  );
};

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
});

export default connect(mapStateToProps)(Projects);
