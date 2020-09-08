import React from 'react';

const Spinner = () => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">Loading...</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;