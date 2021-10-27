import { Component, OnInit } from "@angular/core";
import { KieService } from "../kie.service";
import { MessageService } from "../message/message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-request-laptop",
  templateUrl: "./request-laptop.component.html",
  styleUrls: ["./request-laptop.component.css"],
})
export class RequestLaptopComponent implements OnInit {
  constructor(
    private kieService: KieService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  requestSurface() {
    this.submit("Surface Book 3");
  }

  requestMac() {
    this.submit("MacBook Pro");
  }

  requestHP() {
    this.submit("HP Spectre");
  }

  submit(laptopName: string) {
    this.kieService.startProcess(laptopName).subscribe((res) => {
      this.messageService.success(`Process ${res} started`);
      this.router.navigate(["/home/process"]);
    });
  }
}