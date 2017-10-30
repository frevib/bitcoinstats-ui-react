import immutable from 'seamless-immutable';
import { BitcoinStatsType } from '../actions/ActionTypes';

const INITIAL_STATE = immutable({
    test: false,
    data: { bitcoinPrices:[] }
});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case BitcoinStatsType.GET_BITCOIN_STATS_PENDING: {
            return state.merge({test: true});
        }
        case BitcoinStatsType.GET_BITCOIN_STATS_SUCCESS: {
            return state.merge({test: true, data: action.data});
        }
        case BitcoinStatsType.GET_BITCOIN_STATS_FAILED: {
            return state.merge({test: true});
        }

        default: {
            return state;
        }
    }
}