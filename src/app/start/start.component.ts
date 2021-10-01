import { Component, OnInit } from '@angular/core';
import { KieService } from '../kie.service';
import { MessageService } from '../message/message.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComboBoxComponent } from '../combo-box/combo-box.component';
import { ComboBoxPipe } from '../combo-box/combo-box.pipe';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  filename: string;
  laptopList: [];

  constructor(private kieService: KieService, private messageService: MessageService, private router: Router) {

    this.laptopList = [
      { "laptopname": "Macbook Pro", "code": "MP" },
      { "laptopname": "Surface Pro", "code": "SP" },
      { "laptopname": "Chromebook", "code": "CB" },
    ];

   }

  submit() {
    this.kieService.startProcess(this.laptopList.laptopname).subscribe(res => {
      this.messageService.success(`Process ${res} started`);
      this.router.navigate(['/home/process']);
    });
  }

  ngOnInit() {
  }

}
