import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShortlyService } from 'src/app/services/shortly.service';
import * as Swal from 'sweetalert2'

interface IResult {
  code: string
}
interface IShort {
  ok: boolean,
  result: IResult
}
@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent {

  isLoading = false
  shorthenLabel = 'Shorthen it!'
  shorthenArray: any[] = []
  inputString = new FormControl('', []);
  shortenSuccess = 0 
  copyLabel = "Copy"
  style = "w-full rounded"

  constructor(private shortService: ShortlyService) {

  }

  getShortly(event: any) {
    event.preventDefault();
    this.isLoading = true
    const url: string | any = this.inputString.value
    console.log(this.inputString.value);
    if(!url){
      // Swal.default.fire('please input url')
      this.isLoading = false
      this.shortenSuccess = 2
    }
    if(url){
      this.shortService.getShortlyApi(url).subscribe((res: any) => {

        if (res.ok === true) {
          this.shorthenArray.push({
            original: res.result.original_link,
            shorten: res.result.full_short_link
          })
          // console.log(this.shorthenArray);
          this.shortenSuccess = 1
        }
  
        this.isLoading = false;
      },
        (err) => {
          // Swal.default.fire('url is not valid!')
          this.isLoading = false
          this.shortenSuccess = 2
          console.log(err);
        }, () => {
          this.isLoading = false
        })
    }
   


  }
  putToClipboard(index: number) {
    let text = this.shorthenArray[index].shorten
    navigator.clipboard.writeText(text)
    Swal.default.fire('Url already in clipboard')
  }

}
