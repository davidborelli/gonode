import React, { Component } from 'react';

import api from '~/services/api';

export default class Main extends Component {
  componentDidMount() {
    api.get('/teste');
  }

  render() {
    return (
      <>
        <div>Main</div>
      </>
    );
  }
}
