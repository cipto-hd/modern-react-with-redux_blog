// import { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

const UserHeader = ({ user }) => {
  return <div className="header">{user && user.name}</div>;
};

// arguments state & ownProps
const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find((user) => user.id === userId),
});

export default connect(mapStateToProps)(UserHeader);

/*
// Memoized fetching
const UserHeader = ({ userId, user, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);
  return <div className="header">{user && user.name}</div>;
};

// arguments state & ownProps
const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find((user) => user.id === userId),
});

export default connect(mapStateToProps, { fetchUser })(UserHeader); */
