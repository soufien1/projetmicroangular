import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../../services/SignService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(private signService: SignService, public router: Router) { }

  ngOnInit() {
  }
  OnSbmit(username, password) {
    this.signService.postAuth(username, password)
      .subscribe((data: any) => {
        localStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/citoyen-list']);
      });
  }
}
