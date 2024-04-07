import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../interfaces/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() isFirst: boolean;
  @Input() isVAT: boolean;

  ngOnInit() : void {}

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: any): void {
    item.quantity++;
  }

}
