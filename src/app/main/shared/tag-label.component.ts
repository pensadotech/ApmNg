import { Component,Input, OnChanges } from '@angular/core';

// Local tag interface
export interface ITag {
  name: string;
  icon: string;
  class: string;
}

// component
@Component({
  selector: 'apm-tag',
  templateUrl: './tag-label.component.html',
  styleUrls: ['./tag-label.component.scss']
})
export class TagLabelComponent implements OnChanges {

  @Input() inTagName : string = '';

  tagEmpty : ITag = {
    name: '',
    icon: '',
    class: ''
  };

  tagIcons : ITag[] = [
    {
      name: '',
      icon: '',
      class: ''
    },
    {
      name: 'new',
      icon: 'sunny',
      class: ''
    },
    {
      name: 'promo',
      icon: 'favorite',
      class: ''
    },
    {
      name: 'limited',
      icon: 'bolt',
      class: ''
    },
    {
      name: 'discount',
      icon: 'discount',
      class: ''
    }
  ];

  selectedTag: ITag = this.tagEmpty;

  // Constructor ..........................
  constructor() {}

  // Methods ..............................
  findTag(value: string) : ITag {
    // definitions
    let targetTag: ITag = this.tagEmpty;
    // normalize value
    value = value.toLocaleLowerCase();
    // find Tag to use
    for( let i = 0; i < this.tagIcons.length; i++ ) {
      if (this.tagIcons[i].name == value) {
        targetTag = this.tagIcons[i];
        break;
      }
    }
    return targetTag;
  }

  // Hook methods ...............................
  ngOnChanges(): void {
    this.selectedTag = this.findTag(this.inTagName);
  }

}
