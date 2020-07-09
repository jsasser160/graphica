import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import ShowModal from '../modal/ShowModal'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
          <Menu.Item>
            <ShowModal />
          </Menu.Item>
            
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
          <Link to='/Newpicture'>
            <Menu.Item
              id='newpicture'
              name='Add Picture'
              active={location.pathname === '/newpicture'}
            />
          </Link>
          
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/profile'>
            <Menu.Item
              name='profile'
              id='profile'
              active={this.props.location.pathname === '/profile'}
            />
          </Link>
          <Link to='/collection'>
            <Menu.Item
              name='collection'
              id='collection'
              active={this.props.location.pathname === '/collection'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>


      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
