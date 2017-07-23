import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { handleAuth } from 'src/auth/authReducer';

const mapDispatchToProps = {
  handleAuth
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)