import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, 
              private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
   }

  ngOnInit(): void {
  }

  addTaskBtn(){
    console.log("ADD BUTTON");
    this.uiService.toggleAddTask();
  }

  hasRouter(route: string){
    // console.log("this.router.url === route",this.router.url === route);
    return this.router.url === route;
  }
}
