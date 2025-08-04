import { useState } from 'react';
import './style/NavbarTwo.css'; 
import { Link } from 'react-router-dom';
const NavbarTwo = () => {
        const [menuChecked, setMenuChecked] = useState(false);

        const handleMenuChange = (e) => {
                setMenuChecked(e.target.checked);
        };

        const menuStyle = menuChecked
                ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }
                : { borderRadius: '10px' };

        return (
                <nav id="menu" style={menuStyle}>
                        <input
                                type="checkbox"
                                id="responsive-menu"
                                checked={menuChecked}
                                onChange={handleMenuChange}
                        />
                        <label htmlFor="responsive-menu"></label>
                        <ul>
                                <li>
                                        <Link to="/">Home</Link>
                                </li>
                                <li>
                                        <Link to={"/bodyPages/gpa"}>GPA Calculator</Link>
                                </li>
                                <li>
                                        <Link to={"/bodyPages/cgpa"}>CGPA Calculator</Link>
                                </li>
                                <li>
                                        <Link to={"/bodyPages/grading"}>Grading Scheme</Link>
                                </li>
                                <li><a href="https://github.com/janibrahim">GitHub</a></li>
                        </ul>
                </nav>
        );
};

export default NavbarTwo;