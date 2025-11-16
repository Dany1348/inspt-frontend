import React from 'react';
//import Nav from './Nav';

function Header() {
    return (
        <header style={{
            backgroundColor: "#4CAF50", padding: "10px",
            textAlign: "center", color: "white" ,textJustify:"auto"
        }}>
            <h1>
                 <img src="../src/img/tiger-feline-animal-image-pixabay-16.png" title="Logo de Tiger" id="Logo" width="6%" alt="img tigre"/>
                            App React Tienda INSPT</h1>
            {/*<Nav></Nav> */}
        </header>
    );
}
export default Header;