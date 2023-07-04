import React from 'react';
import { connect } from "react-redux";
import Profile from './Profile';
import { getUsersProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { compose } from 'redux';


class ProfileContainer extends React.Component  {

  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 29017 };
    getUsersProfile(userID);
  }
  
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

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
  connect(mapStateToProps, getUsersProfile),
  withAuthRedirect,
  withRouter
)(ProfileContainer);

// 29017