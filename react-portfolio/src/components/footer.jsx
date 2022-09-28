import React from "react";
import '../static/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <Link to="/gitHub"><li>gitHub</li></Link>
                <Link to="/LinkedIn"><li>LinkedIn</li></Link>
                <Link to="/Stack Overflow"><li>Stack Overflow</li></Link>
            </ul>
        </div>
    )
}

export default Footer