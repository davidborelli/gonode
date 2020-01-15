import React from 'react';

import * as S from '../styles';
import Button from '~/styles/components/Button';

export default function SignIn() {
  return (
    <S.Container>
      <S.Form onSubmit={() => {}}>
        <h1>Bem vindo</h1>

        <span>E-MAIL</span>
        <input type="email" name="email" />

        <span>SENHA</span>
        <input type="password" name="password" />

        <Button size="big" type="submit">
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
