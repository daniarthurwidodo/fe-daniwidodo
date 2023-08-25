import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortlyService {

  // https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html


  constructor( private http : HttpClient) { }

  getShortlyApi(url: string){
    const shorthenUrl = `https://api.shrtco.de/v2/shorten?url=${url}`
    return this.http.get(shorthenUrl)
  }
}
