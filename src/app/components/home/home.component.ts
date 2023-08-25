import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  path = "../../../assets/images/illustration-working.svg"
  getStartedButton = "Get Started"
  roundedButton = "rounded-full"

  section1= {
    tittle : "More than just shorter links",
    subTitle : "Build your brand’s recognition and get detailed insights on how your links are performing."
  }

  section3= {
    title : "Advanced Statistics",
    subTitle : "Track how your links are performing across the web with our advanced statistics dashboard."
  }

  getSVG(){
    return `./../../assets/images/illustration-working.svg`
  }
}
