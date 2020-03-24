import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <h1>COVID-19</h1>
                <h2>Coronavirus</h2>
                <hr />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;