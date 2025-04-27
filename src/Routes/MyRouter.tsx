import { Link,NavLink,Route,Routes} from "react-router-dom";
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
// import { About } from '../Pages/About'
// import { CallMe } from '../Pages/CallMe'
import { Cart } from '../Pages/Cart'
import { Navbar } from "../components/Navbar";
function MyRouter(){
    return(
        <>
        <Routes>
            <Route path="/" >
                <Route path="Home" element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="Cart" element={<Cart />} />
            </Route>
            {/* <Route path="/About" element={<About />} />
            <Route path="/CallMe" element={<CallMe />} /> */}
        </Routes>
        
        </>
    )
}
export {MyRouter}