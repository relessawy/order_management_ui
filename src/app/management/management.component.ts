import { Component, OnInit } from '@angular/core';
import { KieService } from '../kie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent implements OnInit {
  task: any = null;
  taskInstanceId: number;
  approval: boolean;

  constructor(private kieService: KieService, private route: ActivatedRoute, private messageService: MessageService, private router: Router) { }

  load(taskId: number): void {
    this.kieService.getTask(taskId).subscribe(task => {
      this.task = task;
    });
  }

  management(): void {
    this.kieService.managementcomplete(this.taskInstanceId, true).subscribe(() => {
      this.messageService.info('Management Approval recorded and purchase sent to procurement');
      this.router.navigate(['/home/task']);
    });
  }


  ngOnInit() {
    this.route.queryParams.subscribe(routeParams => {
      if (routeParams.id) {
        this.taskInstanceId = routeParams.id;
        this.load(this.taskInstanceId);
      }
    });
  }


}
