import { Component, OnInit } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor( private service : ServicesService, private navigate : Router) { }

  addBlog = new FormGroup({

    
    // id: new FormControl(uuid()),
    title: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
  });

  Onsubmit(){
    console.log(this.addBlog.value);
    this.service.sendData(this.addBlog.value).subscribe((data)=>{
    console.log("Data send successfully");
    this.navigate.navigateByUrl('/');
    },
    (error)=>{
      console.log("some error occured")
    })
  }

  ngOnInit(): void {
  }

}


