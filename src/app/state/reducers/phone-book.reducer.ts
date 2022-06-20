
import { PhoneBookActionTypes } from '../actions/types';

export const initialCheckState = {
    phoneBookPayload: {},
    phoneBookresponse: {},
    phoneBookInfo: {},
    error: null,
};
export function phoneBookReducer(state: any = initialCheckState, action: any = {}): any {
    switch (action.type) {
        case PhoneBookActionTypes.PHONE_BOOK:
            return {
                ...state,
                phoneBookPayload: action.payload,
            };
        case PhoneBookActionTypes.PHONE_BOOK_SUCCESS:
            return {
                ...state,
                phoneBookresponse: action.payload,
            };

        case PhoneBookActionTypes.PHONE_BOOK_CLEAR:
            return {
                ...state,
                phoneBookresponse: {},
            };
        case PhoneBookActionTypes.PHONE_BOOK_ERROR:
            return {
                ...state,
                phoneBookresponse: action.payload,
            };

        case PhoneBookActionTypes.PHONE_BOOK_INFO_SUCCESS:
            return {
                ...state,
                phoneBookInfo: action.payload,
            };

        case PhoneBookActionTypes.PHONE_BOOK_INFO_ERROR:
            return {
                ...state,
                error: { ...state.error, ...action.payload.error },
            };

        default:
            return state;
    }
}
