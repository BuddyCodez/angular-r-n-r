import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name = '';
   cards = [
     {
       imageSrc: "/assets/syden.png",
       title: "Sydens",
       segmentOptions: ["Cheap", "Midrange", "Expensive"],
       transmissionOptions: ["Manual", "Automatic"]
     },
     {
       imageSrc: "/assets/fortuner.png",
       title: "SUV",
       segmentOptions: ["Cheap", "Midrange", "Expensive"],
       transmissionOptions: ["Manual", "Automatic"]
     },
     {
       imageSrc: "/assets/vans.png",
       title: "Mini Vans",
       segmentOptions: ["Cheap", "Midrange", "Expensive"],
       transmissionOptions: ["Manual", "Automatic"]
     },
     {
       imageSrc: "/assets/swift.png",
       title: "Hatchbacks",
       segmentOptions: ["Cheap", "Midrange", "Expensive"],
       transmissionOptions: ["Manual", "Automatic"]
     },
   
  ];
}
