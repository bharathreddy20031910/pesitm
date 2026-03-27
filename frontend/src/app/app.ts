import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { FormsModule  , NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmojiPipe } from './emoji-pipe';
import { ApiServices } from './api-services';
import { Router } from '@angular/router';
import { Header } from "./components/header/header";



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLinkWithHref, RouterLinkActive, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
users:any[]=[]

  constructor(private userSerive:ApiServices, private router: Router){

  }

  ngOnInit(){
    // this.users = this.userSerive.getData()
  }

  title = signal('app Works!')
title1 = ('Hello')

students = ["Bharath","Reddy","Raj","Ram","Bharath2"]

headerValue = signal('this Should be present in header')
isDisabled:boolean=false
isHidden:boolean=false

isLoggedIn:boolean=false

isActive:boolean = false
isError:boolean = false

theColor:string = 'gray'
fs:number = 50

handleClick(){
 console.log(2+3);
}

message = signal('MY name')

money = signal( 20)

today = signal('Done')


handleKeyPress($event : any){
console.log(` i pressed ${$event.key} key`)
}

location ="Shivamogga"

submit(form :any){
  console.log(form.value)
  localStorage.setItem('Users' , JSON.stringify(form.value))
}

message1:string=''

recieveData(data : string){
this.message1= data
}
}
