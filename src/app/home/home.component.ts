import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isEmployee = false;
  isProcManger = false;
  isSupplier = false;
  isFullProcess=true;
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}

  employeeSelected() {
    this.isEmployee = true;
    this.isProcManger = false;
    this.isSupplier = false;
    this.isFullProcess=false;
  }

  managerSelected() {
    this.isEmployee = false;
    this.isProcManger = true;
    this.isSupplier = false;
    this.isFullProcess=false;
  }

  supplierSelected() {
    this.isEmployee = false;
    this.isProcManger = false;
    this.isSupplier = true;
    this.isFullProcess=false;
  }

  fullProcessSelected() {
    this.isEmployee = false;
    this.isProcManger = false;
    this.isSupplier = false;
    this.isFullProcess=true;
  }
}
