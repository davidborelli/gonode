import React, { Component } from 'react';

import * as S from './styles';

export default class TeamSwitcher extends Component {
  render() {
    return (
      <S.Container>
        <S.TeamList>
          <S.Team>
            <img
              alt="Rocketseat"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            />
          </S.Team>
          <S.Team>
            <img
              alt="Rocketseat"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            />
          </S.Team>
          <S.Team>
            <img
              alt="Rocketseat"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            />
          </S.Team>
          <S.Team>
            <img
              alt="Rocketseat"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            />
          </S.Team>
        </S.TeamList>
      </S.Container>
    );
  }
}
