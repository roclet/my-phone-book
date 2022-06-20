import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthCustomerEffect } from './effects';
import { phoneBookReducer } from './reducers/phone-book.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot(
            {
                phoneBook: phoneBookReducer
            }
        ),
        EffectsModule.forRoot([
            AuthCustomerEffect
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            features: {
                pause: false,
                lock: true,
                persist: true
            }
        }),
    ],
    declarations: [],
    providers: [],
    entryComponents: [],
    exports: [],
})
export class StateManagementModule {
    static forRoot(): ModuleWithProviders<StateManagementModule> {
        return {
            ngModule: StateManagementModule,
        };
    }
}