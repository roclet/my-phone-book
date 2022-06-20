
import { ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pb-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() planCardHeading = 'Which option works for you?';
    constructor(
        // private store: Store<any>,
        private cdr: ChangeDetectorRef,
    ) {
    }
    ngOnInit(): void {
    }
}