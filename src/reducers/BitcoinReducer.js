import immutable from 'seamless-immutable';
import { BitcoinStatsType } from '../actions/ActionTypes';

const INITIAL_STATE = immutable({
    isLoading: false,
    data: { bitcoinPrices:[] }
});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case BitcoinStatsType.GET_BITCOIN_STATS_PENDING: {
            return state.merge({isLoading: true});
        }
        case BitcoinStatsType.GET_BITCOIN_STATS_SUCCESS: {
            return state.merge({isLoading: false, data: action.data});
        }
        case BitcoinStatsType.GET_BITCOIN_STATS_FAILED: {
            return state.merge({isLoading: false});
        }

        default: {
            return state;
        }
    }
}