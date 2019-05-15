import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
  constructor() { }

  ngOnInit() {
    fetch('http://10.166.37.22:5050/user/')
    .then((response)=>{
      return response.json();
    }).then((body)=>{
      console.log(body.data);
      this.users = body.data;
    })
    .catch((err)=>{
      console.log('Error in fetch -> ',err);
    });
  }
}

