import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isVAT: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getData()
    .subscribe((response: any)=>{
      this.products = response?.results?.map((product: IProduct) => {
          return { ...product, quantity: 1 }; // Add a 'quantity' property to each product
        });;
    })
  }

  trackByFn(index:number, item:any): string {
    return item.webProductGuid; //Using webProductGuid as unique indentifier
  }

}
