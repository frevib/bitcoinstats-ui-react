import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShowBitcoinStats extends Component {
    render() {
        return (
            <div>
                Here will be the bitcoin stats: {this.props.test}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.bitcoin.test
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBitcoinStats)