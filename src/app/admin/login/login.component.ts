import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token.service';
import { Router } from '@angular/router';
import{LoginService} from 'src/app/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,public TokenStorageService: TokenStorageService,public LoginService:LoginService){}

  ngOnInit(): void {
      
  }
  username!:string;
  password!:string;
  login()
  {
    this.LoginService.login(this.username,this.password).subscribe(data=>{
      this.TokenStorageService.saveToken(data);
      this.username=this.password="";
    },err=>{
        alert("bạn đăng nhập sai tài khoản")
    }
    );
    
  }

}
