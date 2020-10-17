import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var video = <HTMLVideoElement>document.getElementsByTagName("video")[0];
    video.oncanplaythrough = function() {
     video.muted = true;
     video.play();
   }
  }
}
