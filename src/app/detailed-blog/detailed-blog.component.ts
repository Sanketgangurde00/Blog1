import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.css']
})
export class DetailedBlogComponent implements OnInit {

  constructor(private route : ActivatedRoute, private service:ServicesService,private router:Router) { }

  public id! :string | null;

  public blog:any;
  
  deleteFunc(id:any){
    this.service.deleteDataBlog(id).subscribe((data)=>{
      console.log('blog deleted successfully');
    },(err)=>{
      console.log("some error occured while deleting");
      
    });
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getDataById(this.id).subscribe((data)=>{
    this.blog=data;
    },(err)=>{
      console.log("Either the blog dosent exit or some error occuored");
      
    })
  }

}
