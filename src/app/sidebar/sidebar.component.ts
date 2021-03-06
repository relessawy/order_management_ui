import { Component, OnInit } from '@angular/core';
import {
  faChartPie,
  faTable,
  IconDefinition,
  faLaptop,
  faShoppingCart,
  faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons/';
import { faGithub, faWpforms } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  chartIcon: IconDefinition;
  tableIcon: IconDefinition;
  githubIcon: IconDefinition;
  formIcon: IconDefinition;
  laptopIcon: IconDefinition;
  shoppingCartIcon: IconDefinition;
  handIcon: IconDefinition;

  constructor() {
    this.chartIcon = faChartPie;
    this.tableIcon = faTable;
    this.githubIcon = faGithub;
    this.formIcon = faWpforms;
    this.laptopIcon = faLaptop;
    this.shoppingCartIcon=faShoppingCart;
    this.handIcon=faHandHoldingUsd;
  }

  ngOnInit() {}
}