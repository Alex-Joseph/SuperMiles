import { connect } from 'react-redux';
import MainPage from './component';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './redux';


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
