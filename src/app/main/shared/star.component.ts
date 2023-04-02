import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'apm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input() rating : number = 1;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth = 75;
  selectedStars : any[] = [];
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() {}

  performFilter(rating: number) : void {

    for( let i = 0; i < this.rating; i++ ) {
      this.selectedStars.push(this.stars[i]);
    }
  }

  ngOnChanges(): void {
     this.performFilter(this.rating);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }


}
