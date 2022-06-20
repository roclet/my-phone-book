import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeaderService } from './header.service';

@Component({
    selector: 'pb-custom-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class CustomHeaderComponent implements OnInit, AfterViewChecked {
    @Input() imagePath: string = "";
    @Input() headerTitle: string = "";
    @Output() buttonClicked = new EventEmitter<string>();
    // @ViewChild('lifeIcon') lifeIcon;
    public isHelpVisible = false;
    public msisdn = '';
    public email = '';
    public showClosebutton = true;

    constructor(private renderer: Renderer2,  public headerService: HeaderService, public store: Store) {}

    ngOnInit(): void {
        this.headerService.header.subscribe(header => (this.headerTitle = header));
        this.headerService.currentStatus.subscribe(isVisible => {
            this.isHelpVisible = isVisible;
        });
    }

    openNeedhelpPopup(): void {}

    ngAfterViewChecked(): void {}

    close(): void {}
}
