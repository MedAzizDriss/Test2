import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Footer from './Footer'
import Home from './Home'
import Men from './Men'
import Women from './Women'
const Header = () => {
    return (
        <header>
            <Router>
                <Navbar bg="light" variant="light " >
                    <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
                    <div style={{ marginLeft: '65%', wordSpacing: '1.2em' }}>
                        <Nav className="mr-auto">
                            <Link to='/'> <Nav.Link href="#home" style={{ marginRight: '20%' }}>Home</Nav.Link></Link>
                            <Link to='/Men'> <Nav.Link href="#Men" style={{ marginRight: '20%' }}>Men</Nav.Link></Link>
                            <Link to='/Women'> <Nav.Link href="#Women" style={{ marginRight: '20%' }}>Women</Nav.Link></Link>
                        </Nav>
                    </div>
                </Navbar>

                <Switch>
                    <Route exact path="/Women">
                        <Women />
                    </Route>
                    <Route exact path="/Men">
                        <Men />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>

        </header>
    )
}

export default Header
