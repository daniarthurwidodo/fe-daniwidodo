import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  signUpButton = "Sign Up"
  signUpButtonStyle = "rounded-full"

  nav = [
    { label : "Features", link : "/features"},
    { label : "Pricing", link : "/pricing"},
    { label : "Resources", link : "/resources"}

  ]
  

}
