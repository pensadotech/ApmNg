import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../interfaces/Product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'apm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  // public/private members .....................
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  errorMessage: string = '';
  sub!: Subscription;
  subArray: Subscription[] = [];

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  private _listFilter = '';

  // Properties ................................
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  // constructor ..................................................
  constructor(private productService: ProductService) {}
  // constructor() {}

  // methods
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // Hook methods ...............................
  ngOnInit(): void  {

    // this.filteredProducts = this.products;

    // capture service subscription
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

    // For cases where multiple subscriptions are injected
    // use an array for easy unsubscribe handling
    this.subArray.push(this.sub);

  }

  ngOnDestroy(): void {
    // this is ok when only one services is injected
    // this.sub.unsubscribe();

    // for multiple services injected, use array to destroy
    this.subArray.forEach( (sub: Subscription) => sub.unsubscribe);
  }

  // events
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
