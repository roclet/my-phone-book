import { createSelector } from '@ngrx/store';

export const getPhoneBookInfoSelector = (state: any) => state.phoneBook.phoneBookInfo;
// (singleDealSelect, state => state?.deal);