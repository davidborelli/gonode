import React from 'react';

import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';

import * as S from './styles';

function Main() {
  return (
    <S.Container>
      <TeamSwitcher />
      <Projects />
    </S.Container>
  );
}

export default Main;
