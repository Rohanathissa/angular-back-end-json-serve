import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() text!: string;
  @Input() color: string | undefined;
  @Output() addTaskBtn: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("add task",this.color);
    this.addTaskBtn.emit();
  }

}
