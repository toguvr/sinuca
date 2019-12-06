import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomePage from './container/Home'

const Routes = createAppContainer(
    createSwitchNavigator({
        HomePage,
    })
)

export default Routes