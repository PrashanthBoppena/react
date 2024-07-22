import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './action';

const Inc = ({ count, increase, decrease }) => {
    return (
        <div>
            count from Inc component : {count} <br /> <br />

            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>Decrement</button>

        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        //dispatching plain actions
        increase: () => dispatch({ type: 'INCREMENT' }),
        decrease: () => dispatch({ type: 'DECREMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inc)
