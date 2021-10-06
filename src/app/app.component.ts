import { Component } from '@angular/core';
import {
  faChartPie,
  faTable,
  IconDefinition,
  faLaptop,
  faShoppingCart,
  faHandHoldingUsd,
  faCheckCircle,
  faFileInvoiceDollar,
  faEraser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons/';
import { MessageItem } from './message/message-item';
import { MessageHistoryService } from './message/message-history.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartIcon: IconDefinition;
  tableIcon: IconDefinition;
  formIcon: IconDefinition;
  laptopIcon: IconDefinition;
  shoppingCartIcon: IconDefinition;
  handIcon: IconDefinition;
  checkIcon: IconDefinition;
  orderIcon: IconDefinition;
  status: boolean = false;
  eraseIcon: IconDefinition;
  logoutIcon: IconDefinition;
  sidebarVisible: boolean;
  username: string;
  messages: MessageItem[];

  constructor(private messageHistoryService: MessageHistoryService) {
    this.chartIcon = faChartPie;
    this.tableIcon = faTable;
    this.laptopIcon = faLaptop;
    this.shoppingCartIcon=faShoppingCart;
    this.handIcon=faHandHoldingUsd;
    this.checkIcon=faCheckCircle;
    this.orderIcon=faFileInvoiceDollar;
    this.eraseIcon = faEraser;
    this.logoutIcon = faSignOutAlt;
    this.sidebarVisible = true;
    this.messages = new Array();
    this.username = '';
  }
  
  clickEvent(){
      this.status = !this.status;       
  }

  clear() {
    this.messageHistoryService.clear();
  }

  
  ngOnInit(): void {
    this.messages = this.messageHistoryService.getHistory();
  }
}
