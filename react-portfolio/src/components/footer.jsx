import React from "react";
import '../static/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>gitHub</li>
                <li>LinkedIn</li>
                <li>Stack Overflow</li>
            </ul>
        </div>
    )
}

export default Footer