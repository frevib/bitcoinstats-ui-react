import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinStats } from '../actions/BitcoinStatsActions'


class ShowBitcoinStats extends Component {

    getBitcoinStats(order) {
        this.props.getBitcoinStats(order);
    }


    render() {
        let contentToShow;

        if (this.props.isLoading) {
            contentToShow = (
                <div>
                    LOADING
                </div>
            );
        } else if (this.props.data.bitcoinPrices.length === 0) {
            contentToShow = (
                <div>
                    No data available...
                </div>
            );
        } else {
            contentToShow = [];
            contentToShow.push(
                <div style={{padding: 5, overflow: 'hidden'}}>
                    <div style={{display: 'inline-block'}}> day/hour/minute </div>
                    {' - '}
                    <div style={{display: 'inline-block', cursor: 'pointer', textDecoration: 'underline'}}
                         onClick={() => this.getBitcoinStats('daily_price')}>daily price</div>
                    {' - '}
                    <div style={{display: 'inline-block', cursor: 'pointer', textDecoration: 'underline'}} onClick={() => this.getBitcoinStats('hourly_price')}>hourly price</div>
                    {' - '}
                    <div style={{display: 'inline-block', cursor: 'pointer', textDecoration: 'underline'}} onClick={() => this.getBitcoinStats('minutely_price')}>minutely price</div>
                </div>
            );

            contentToShow.push(this.props.data.bitcoinPrices.map((item, i) => {
                return (
                    <div style={{padding: 5, paddingLeft: 110}} key={i}>
                        <div>{i} - {item.dailyPrice} - {item.hourlyPrice} - {item.minutelyPrice}</div>
                    </div>
                )
            }));
        }

        return (
            <div style={{padding: 30}}>
                <div style={{paddingBottom: 20}}>
                    This screen shows the bitcoin exchange rate (EUR/BTC) for the last 25 days/hours/minutes.
                    Click on 'Get bitcoin prices!' to load the prices. {'\n'}
                    To sort the prices, click on the headers above the prices.
                </div>

                <button onClick={() => this.getBitcoinStats('daily_price')}>
                    Get bitcoin prices!
                </button>

                <div style={{paddingTop: 20}}>
                    {contentToShow}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.bitcoin.isLoading,
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