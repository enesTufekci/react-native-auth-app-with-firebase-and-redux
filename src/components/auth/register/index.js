import { connect } from 'react-redux';

import RegisterComponent from './RegisterComponent';
import { handleAuth } from 'src/auth/authReducer';

const mapDispatchToProps = {
  handleAuth
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)