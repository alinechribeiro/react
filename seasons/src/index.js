import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    //call Geolocation API
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Latitude: </div>;
};

ReactDOM.render(<App />,document.querySelector('#root'));