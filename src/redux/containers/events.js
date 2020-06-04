import { connect } from 'react-redux'
import { compose } from 'redux'
import Events from '../../screens/Events'
import { connectNavigation } from "../HOC/connectNavigation"
import { connectPlatform } from '../HOC/connectPlatform'


const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {

}

export default compose(
  connectNavigation,
  connectPlatform,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Events)