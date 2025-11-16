import React from 'react';
import Twiter from '../img/Twiter.jpg'
function Footer() {
    return (
        <footer style={{
            backgroundColor: "#e43cf4ff", padding: "10px",
            textAlign: "center", marginTop: "20px" ,color:"blue",
            height: "80px" , fontSize: "15px",
            backgroundImage: "url(../../src/img/greenforest.png)"
        }}>
            <div class="redesSociales">
                <img class="RSocial" src="../../src/img/Fcabook.png" alt="Facebook"></img>
                <img class="RSocial" src="../../src/img/Instagrampng.png" alt="Instagram"></img>
                <img class="RSocial" src="../../src/img/Twiter.jpg" alt="Twitter"></img>
                <img class="RSocial" src="../../src/img/Tik tok1.png" alt="TikTok"></img>
                <p >&copy; 2025 - Mi Aplicación React</p>
            </div>
            
        </footer>
    );
} export default Footer;