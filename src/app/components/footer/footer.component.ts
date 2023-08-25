import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  section1 = [
    {label : "Link Shortening", link: "#"},
    {label : "Branded Links", link: "#"},
    {label : "Analytics", link: "#"}

  ]

  section2 = [
    {label : "Blog", link: "#"},
    {label : "Developers", link: "#"},
    {label : "Support", link: "#"}
  ]
  section3 = [
    {label : "About", link: "#"},
    {label : "Our Team", link: "#"},
    {label : "Careers", link: "#"},
    {label : "Contact", link: "#"}
  ]
}
