import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { pbApplicationlabel } from './shared/util/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-phone-book';
  // this.headerService.setHelpVisibility(true);
  public imagePath = 'https://onlinecms.mtn.co.za/sites/default/files/2021-06/';
  hideHeader: boolean = true;
  headerTitle = pbApplicationlabel;
  constructor(private router: Router) {
    this.hideHeader = true
  }
}
