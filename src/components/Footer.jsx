import React from "react";

const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    margin: '1rem 5rem',
    textAlign: 'center'
}

export default function Footer(){
    return(
    <p style={footerStyle}>
        Este sitio fue construido con fines educativos.
    </p>)
}