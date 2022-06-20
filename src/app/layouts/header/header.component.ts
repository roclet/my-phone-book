import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
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
        console.log("headerServicev $$$$$$$$$$$", this.headerTitle);
        this.headerService.currentStatus.subscribe(isVisible => {
            this.isHelpVisible = isVisible;
            console.log("headerServicev $$$$$$$$$$$", this.isHelpVisible);
        });
    }

    openNeedhelpPopup(): void {}

    ngAfterViewChecked(): void {
        // if (this.lifeIcon) {
        //     this.renderer.setAttribute(this.lifeIcon.svgIcon, 'height', '47');
        //     this.renderer.setAttribute(this.lifeIcon.svgIcon, 'width', '47');
        //     this.renderer.setAttribute(this.lifeIcon.svgIcon, 'viewBox', '0 0 100 100');
        // }
    }

    close(): void {}
}
