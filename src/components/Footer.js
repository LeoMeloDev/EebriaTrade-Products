import React from 'react'

const Footer = () => {
    const currentDate = new Date().toLocaleDateString();



    return (
        <footer>
            <h5>Leonardo Melo</h5>
            <p>{currentDate}</p>
            
        </footer>
    )
}

export default Footer
