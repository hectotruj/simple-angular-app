import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GlobalService} from './global.service';
import {Information} from './information'


@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent {
  information:Information;
  constructor(private globalService: GlobalService) {
    this.globalService.information$.subscribe(
      information => {
        this.information = information;
      }
    );
  }
}
