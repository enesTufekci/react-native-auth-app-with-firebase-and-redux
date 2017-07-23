import { connect } from 'react-redux';

import LoginComponent from './LoginComponent';
import { handleAuth } from 'src/auth/authReducer';

const mapDispatchToProps = {
  handleAuth
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)