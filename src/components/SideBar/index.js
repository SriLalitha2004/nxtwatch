import {Component} from 'react'

import SideBarItem from '../SideBarItem'

import ToggleTheme from '../../Context/ToggleTheme'
import {
  SidebarContainer,
  LogoIcons,
  ContactUsContainer,
  Text,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <SidebarContainer theme={theme}>
              <SideBarItem />
              <ContactUsContainer>
                <Text theme={theme}>CONTACT US</Text>
                <div>
                  <LogoIcons
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
                    alt='twitter logo'
                  />
                  <LogoIcons
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
                    alt='facebook logo'
                  />
                  <LogoIcons
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
                    alt='linked in logo'
                  />
                </div>
                <Text theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </Text>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default Sidebar
