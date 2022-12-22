import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  hasFooterRout(routeParam: any){
    // console.log("foter @@@@@@@@ === ",this.router.url ,"222222===",routeParam)
    return this.router.url !== routeParam;
  }
}
 