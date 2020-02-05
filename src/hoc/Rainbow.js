import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'green', 'blue', 'orange', 'purple', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 6)];
    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow;