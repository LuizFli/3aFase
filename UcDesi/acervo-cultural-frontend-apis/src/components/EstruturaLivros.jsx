import React from 'react'
import { Component } from "react";

class EstruturaLivros extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="mainPage">
                <div className="header">
                    <h1>Acervo Cultural</h1>
                    <h2>{this.props.titulo}</h2>
                </div>
                {children}
            </div>
        );
    }
}

export default EstruturaLivros
