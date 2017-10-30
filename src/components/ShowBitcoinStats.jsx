import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinStats } from '../actions/BitcoinStatsActions'


class ShowBitcoinStats extends Component {

    getBitcoinStats(order) {
        this.props.getBitcoinStats(order);
    }


    render() {
        let contentToShow;

        if (this.props.data.bitcoinPrices.length === 0) {
            contentToShow = (
                <div>
                    LOADING
                </div>
            )
        } else {
            contentToShow = this.props.data.bitcoinPrices.map((item, i) => {
                return (
                    <div>{item.dailyPrice}</div>
                )
            });
        }

        return (
            <div>
                <div>
                    Here will be the bitcoin stats: {this.props.test}
                </div>

                <button onClick={() => this.getBitcoinStats('hourly_price')}>
                    Get bitcoin stats
                </button>

                {contentToShow}



            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.bitcoin.test,
        data: state.bitcoin.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBitcoinStats: (order) => { dispatch(getBitcoinStats(order)) }

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBitcoinStats)