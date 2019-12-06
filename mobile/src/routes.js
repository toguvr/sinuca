import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './Login'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    })
)

export default Routes