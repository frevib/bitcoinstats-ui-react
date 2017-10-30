import axios from 'axios';
import { BitcoinStatsType } from '../actions/ActionTypes';

export function getBitcoinStats(order) {
    return async (dispatch, getState) => {
        const url = `http://localhost:9000/getbtprices?order=${order}`;
        dispatch(getBitcoinStatsPending());
        try {
            const response = await axios.get(url);
            dispatch(getBitcoinStatsSuccess(response.data));
        } catch (error) {
            dispatch(getBitcoinStatsFailed(error.response.data));
        }
    };
}

function getBitcoinStatsPending() {
    return {
        type: BitcoinStatsType.GET_BITCOIN_STATS_PENDING
    }
}

function getBitcoinStatsSuccess(data) {
    console.log('... data: ' + data)

    return {
        type: BitcoinStatsType.GET_BITCOIN_STATS_SUCCESS,
        data: data
    }
}

function getBitcoinStatsFailed() {
    return {
        type: BitcoinStatsType.GET_BITCOIN_STATS_FAILED
    }
}
