import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Service/services.service';
import { v4 as uuid} from 'uuid'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private service : ServicesService, private navigate : Router, private route : ActivatedRoute) { }

  blog! :any;
  editblog! :any
  id:any = this.route.snapshot.paramMap.get('id')




  Onsubmit(){
    console.log(this.editblog.value);
    
    this.service.updateData(this.id,this.blog.value).subscribe((data)=>{
      console.log("blog edited successfully");
    },(err)=>{
      console.log("some error");
      
    })
    this.navigate.navigateByUrl('/')
  }
  ngOnInit(): void {
    this.blog= this.service.getDataById(this.id).subscribe((data)=>{
      this.blog= data;

      this.editblog = new FormGroup({
        id: new FormControl(this.id),
       title: new FormControl(this.blog['title'],Validators.required),
       author: new FormControl(this.blog['author'],Validators.required),
       content: new FormControl(this.blog['content'],Validators.required),
       });
    },(err)=>{
      console.log("some error occured");
      ;
    });
   
  }

}
