import React, { Component } from 'react';

class File extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            color: 'blue',
            Type: 'Ruged',
            height: 'Tall'
        }
    }

    NewColor1 = () => this.setState({color: 'White'})
    NewColor2 = () => this.setState({color: 'Blue'})
    render()
    {
        return(
            <div className = 'File'>
                <h1>
                    The Initial Values are --
                  { this.state.color}, {this.state.height}, {this.state.Type}
                </h1>
                <button onClick = {this.NewColor1}> Click Me for White</button>
                <button onClick = {this.NewColor2}> Click for Blue</button>
                   
                
            </div>
        )
    }
}

export default File;