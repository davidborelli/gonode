import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectsActions from '~/store/ducks/projects';

import * as S from './styled';
import Button from '~/styles/components/Button';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  render() {
    const { activeTeam, projects } = this.props;

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

        {projects.data.map(project => (
          <S.Project key={project.id}>
            <p>{project.title}</p>
          </S.Project>
        ))}
      </S.Container>
    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
