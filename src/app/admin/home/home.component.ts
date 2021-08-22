import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private TokenStorageService: TokenStorageService) {}
  
  ngOnInit(): void {
  }
  logOut()
  {
    this.TokenStorageService.signOut();
  }
}
