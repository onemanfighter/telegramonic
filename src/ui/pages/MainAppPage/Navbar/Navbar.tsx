import NavbarComponent, { NavbarProps } from '../../../component/navbar/NavbarComponent'

const props: NavbarProps = {
    navbarTitle: "Telegramonic.com",
    navBarMenuItems: [
        {"name":"Home","path":"/home"},
        {"name":"Channels","path":"/channels"},
        {"name":"Groups","path":"/groups"},
        {"name":"Stickers","path":"/stickers"},
        {"name":"Bots","path":"/bots"},
        {"name":"Blogs","path":"/blogs"},
        {"name":"Themes","path":"/themes"},
        {"name":"Games","path":"/games"},
    ]
}

function Navbar() {
  return (
    <div>
      <NavbarComponent navbarTitle={ props.navbarTitle} navBarMenuItems={props.navBarMenuItems}/>
    </div>
  )
}

export default Navbar
