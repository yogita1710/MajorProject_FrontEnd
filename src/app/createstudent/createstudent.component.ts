import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  student:Student={name:'',course:'',fee:0,marks:0}
  constructor(private service:StudentserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  saveStudent()
  {
    this.service.create(this.student).subscribe(result=>{
      this.router.navigate(["showAll"]);
    },err=>console.log(err))
  }
}
