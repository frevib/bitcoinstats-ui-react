import immutable from 'seamless-immutable';

const INITIAL_STATE = immutable({
    test: false
});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TEST': {
            return state.merge({test: true});
        }

        default: {
            return state;
        }
    }
}