import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectsActions from '~/store/ducks/projects';
import MembersActions from '~/store/ducks/members';

import * as S from './styled';

import Modal from '~/components/Modal';
import Can from '~/components/Can';
import Button from '~/styles/components/Button';
import Members from '../Members';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    openMembersModal: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })
      ),
      projectModalOpen: PropTypes.bool,
    }).isRequired,
    members: PropTypes.shape({
      membersModalOpen: PropTypes.bool,
    }).isRequired,
  };

  static defaultProps = {
    activeTeam: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      newProject: '',
    };
  }

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateProject = event => {
    event.preventDefault();

    const { createProjectRequest } = this.props;
    const { newProject } = this.state;

    createProjectRequest(newProject);
  };

  render() {
    const {
      activeTeam,
      projects,
      openProjectModal,
      openMembersModal,
      closeProjectModal,
      members,
    } = this.props;

    const { newProject } = this.state;

    if (!activeTeam) return null;

    return (
      <S.Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Can checkPermission="projects_create">
              <Button onClick={openProjectModal}>+ Novo</Button>
            </Can>
            <Button onClick={openMembersModal}>Membros</Button>
          </div>
        </header>

        {projects.data.map(project => (
          <S.Project key={project.id}>
            <p>{project.title}</p>
          </S.Project>
        ))}

        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar projeto</h1>

            <form onSubmit={this.handleCreateProject}>
              <span>NOME</span>
              <input
                name="newProject"
                value={newProject}
                onChange={this.handleInputChange}
              />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button size="small" color="gray" onClick={closeProjectModal}>
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
        {members.membersModalOpen && <Members />}
      </S.Container>
    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  members: state.members,
  projects: state.projects,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProjectsActions, ...MembersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
