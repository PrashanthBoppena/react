import React from 'react';
import { connect } from 'react-redux';
import Inc from './inc';

const ReactReduxAPP = ({ count }) => {
    return (
        <div>
            <center>
                Count from ReactReduxAPP component : {count} <br /> <hr />
                <Inc />
            </center>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state,
})

export default connect(mapStateToProps)(ReactReduxAPP);
