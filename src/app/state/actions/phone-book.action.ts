import { Action } from '@ngrx/store';
import { PhoneBookActionTypes } from './types';

export class SubmitPhoneBookAction implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK;
    constructor(readonly payload: any) {}
}

export class SetPhoneBookSuccessAction implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_SUCCESS;
    constructor(readonly payload: any) {}
}

export class SetPhoneBookActionError implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_ERROR;
    constructor(readonly payload: any) {}
}

export class ClearPhoneBookAction implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_CLEAR;
    constructor() {}
}

export class LoadPhoneBookInfoAction implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_INFO;
    constructor(readonly payload: any) {}
}

export class SetPhoneBookInfoActionSuccess implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_INFO_SUCCESS;
    constructor(readonly payload: any) {}
}


export class SetPhoneBookInformationPageError implements Action {
    readonly type = PhoneBookActionTypes.PHONE_BOOK_INFO_ERROR;
    constructor(readonly payload: any) {}
}
