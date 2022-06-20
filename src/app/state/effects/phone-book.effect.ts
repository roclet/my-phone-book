import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { PhoneBookActionTypes } from '../actions/types';
import { PhoneBookService } from 'src/app/shared/services/phone-bookservice';
import { LoadPhoneBookInfoAction, SetPhoneBookActionError, SetPhoneBookInfoActionSuccess, SetPhoneBookInformationPageError, SetPhoneBookSuccessAction } from '../actions';


@Injectable()
export class AuthCustomerEffect {
    constructor(private actions$: Actions, private phoneBookService: PhoneBookService, private store: Store<any>) { }

    phoneBookData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PhoneBookActionTypes.PHONE_BOOK),
            mergeMap((action: any) => {
                console.log("### action.payload ###", action.payloa);
                return this.phoneBookService.addPhone(action.payload).pipe(
                    map(response => {
                        console.log("### SetPhoneBookSuccessAction ###", response);
                        this.store.dispatch(
                            new  LoadPhoneBookInfoAction({})
                        );
                        return new SetPhoneBookSuccessAction(response);
                    }),
                    catchError(error => of(new SetPhoneBookActionError(error)))
                );
            })
        )
    );

    getPhoneBookInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PhoneBookActionTypes.PHONE_BOOK_INFO),
            mergeMap((action: any) => {
                return this.phoneBookService.getPhoneBook().pipe(
                    map(response => {
                        console.log("getPhoneBookInfo !!!!!!!!", response); 
                        return new SetPhoneBookInfoActionSuccess(response);
                    }),
                    catchError(error => of(new SetPhoneBookInformationPageError(error)))
                );
            })
        )
    );
}