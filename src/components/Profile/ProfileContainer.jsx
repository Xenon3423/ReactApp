import React from 'react';
import { connect } from "react-redux";
import Profile from './Profile';
import { getUsersProfile, updateStatus, getStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 29017; }
    this.props.getUsersProfile(userID);
    this.props.getStatus(userID);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

function withRouter(ProfileContainer) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <ProfileContainer
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);