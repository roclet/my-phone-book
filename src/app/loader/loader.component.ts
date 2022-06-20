import { AfterViewInit, Component, Directive, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
    selector: 'pb-loader',
    template: `
        <div class="loader-container" *ngIf="isShow">
            <div class="spinner-progress">
                <div class="spinner"></div>
            </div>
            <div class="loading-header-container">
                <h3 loaderHeading>{{ headingFirstLine }}</h3>
                <h3 loaderHeading>{{ headingSecondLine }}</h3>
            </div>
            <p loaderSubHeading>{{ subHeading }}</p>
        </div>
    `,
})
export class LoaderComponent implements OnDestroy {
    private _isShow = false;

    subscription: Subscription;
    private _headingFirstLine!: string;
    private _headingSecondLine!: string;

    private _subheading!: string;
    private _src: SafeResourceUrl = '';

    get isShow(): boolean {
        return this._isShow;
    }
    set isShow(val: boolean) {
        this._isShow = val;
    }

    get headingFirstLine(): string {
        return this._headingFirstLine;
    }
    set headingFirstLine(val: string) {
        this._headingFirstLine = val;
    }

    get headingSecondLine(): string {
        return this._headingSecondLine;
    }
    set headingSecondLine(val: string) {
        this._headingSecondLine = val;
    }

    get subHeading(): string {
        return this._subheading;
    }
    set subHeading(val: string) {
        this._subheading = val;
    }

    @Input()
    get src(): any {
        return this._src;
    }
    set src(path: string) {
        this._src = this._src = this.santizer.bypassSecurityTrustResourceUrl(path);
    }

    constructor(private loader: LoaderService, private santizer: DomSanitizer) {
        this.subscription = this.loader.getLoader().subscribe(show => {
            if (show) {
                this.isShow = show;
                this.loader.getFirstLineHeading().subscribe(heading => {
                    this.headingFirstLine = heading;
                });
                this.loader.getSecondLineHeading().subscribe(heading => {
                    this.headingSecondLine = heading;
                });
                this.loader.getSubHeading().subscribe(subHeading => {
                    this.subHeading = subHeading;
                });
                this.loader.getSrc().subscribe(image => {
                    this.src = image;
                });
            } else {
                this.isShow = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

@Directive({
    selector: '[loaderIcon]',
    host: {
        class: 'loader_icon',
    },
})
export class LoaderIconDirective {}

@Directive({
    selector: '[loaderHeading]',
    host: {
        class: 'loaderHeading',
    },
})
export class LoaderHeadingDirective {}

@Directive({
    selector: '[loaderSubHeading]',
    host: {
        class: 'loaderSubHeading',
    },
})
export class LoaderSubHeadingDirective {}

@Component({
    selector: 'pb-progress-loader',
    template: `
        <svg class="mtn-progress-loader_svg" height="120" width="120">
            <circle
                #circle
                class="mtn-progress-8"
                stroke="black"
                stroke-width="strokeWidth"
                fill="transparent"
                r="58"
                cx="60"
                cy="60"
            />
        </svg>
    `,
    host: { claass: 'pb-progress-loader_container' },
})
export class ProgressLoaderComponent implements AfterViewInit {
    private _progress!: number;
    private _radius!: number;
    private _strokeWidth!: number;
    private _color = '#232323';
    private _duration = 4000;
    private _delay = 500;
    private _circumference!: number;

    @ViewChild('circle') circleEl!: ElementRef<HTMLElement>;

    @Input()
    get progress(): number {
        return this._progress;
    }
    set progress(val: number) {
        this._progress = val;
    }

    @Input()
    get radius(): number {
        return this._radius;
    }
    set radius(val: number) {
        this._radius = val;
    }

    @Input()
    get stroke(): number {
        return this._strokeWidth;
    }
    set stroke(width: number) {
        this._strokeWidth = width;
    }

    @Input()
    get color(): string {
        return this._color;
    }
    set color(hexValue: string) {
        this._color = hexValue;
    }

    @Input()
    get duration(): number {
        return this._duration;
    }
    set duration(time: number) {
        this._duration = time;
    }

    @Input()
    get delay(): number {
        return this._delay;
    }
    set delay(time: number) {
        this._delay = time;
    }

    constructor(private progressLoaderEl: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        const radius = this.progressLoaderEl.nativeElement.getAttribute('radius');
        this.progressLoaderEl.nativeElement.innerHTML = `
        <svg
        height="${radius * 2}"
        width="${radius * 2}"
         >
         <path class="circle-bg"
            d="M18 2.0845
            a 9 9 0 0 1 0 ${radius}
            a 9 9 0 0 1 0 -${radius}"
          />
          <path class="circle"
            stroke-dasharray="0, 100"
            d="M18 2.0845
            a 9 9 0 0 1 0 ${radius}
            a 9 9 0 0 1 0 -${radius}"
          />
      </svg>

      <style>
        .circle {
          stroke-width: ${this.stroke};
          animation: progress ${this.duration}ms ease-in-out forwards;
          stroke: ${this.color};
          animation-delay: ${this.delay}ms;
        }

        @keyframes progress {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 100 100;
          }
        }
      </style>
    `;
    }
}
