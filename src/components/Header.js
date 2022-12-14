import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <Navbar color='light'>
            <Nav>
                <NavItem>
                    <NavLink to='/' className='nav-link'>
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav caret>
                            Instructors
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink to='/instructor_select' className='nav-link'>
                                Instructor Course Selection
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to='/instructor_genpref' className='nav-link'>
                                Instructor General Preferences
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav caret>
                            Graders
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <NavLink to='/releaser_select' className='nav-link'>
                                Releaser Course Selection
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to='/releaser_genpref' className='nav-link'>
                                Releaser General Preferences
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                    <NavLink to='/schedule' className='nav-link'>
                        Schedule
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;