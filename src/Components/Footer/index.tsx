import './footer.styles.css';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return(
        <footer>
            <div className="signs">
                <FaFacebookSquare style={{ fontSize: '36px' }} />
                <FaInstagram style={{ fontSize: '36px' }} />
                <FaTwitter style={{ fontSize: '36px' }} />
                <FaLinkedin style={{ fontSize: '36px' }} />
            </div>
            <p className="signs">Copyright ©2020 All rights reserved</p> 
        </footer>
    )
}