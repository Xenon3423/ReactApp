import React from 'react';
import { connect } from "react-redux";
import Profile from './Profile';
import { getUsersProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 29017 };
    getUsersProfile(userID);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, getUsersProfile)(withRouter(ProfileContainer));
