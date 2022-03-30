import { Component, OnInit } from '@angular/core';
import products from 'src/assets/Product.json'

export interface Product{
  productName: string,
  productPrice: number
}
@Component({
  selector: 'app-shopping-app',
  templateUrl: './shopping-app.component.html',
  styleUrls: ['./shopping-app.component.css']
})
export class ShoppingAppComponent implements OnInit {

  data = products;
  products: any = [];
  priceFilters: any = [];
  filteredProducts: any;
  selectedPriceFilter;
  gridView: boolean;

  constructor() { }

  ngOnInit(): void {
    // for(let i=0;i<40;i++){
    //   let randNum=Math.floor((Math.random() * 1000) + 100);
    //   let newProduct: Product = {
    //     "productName": "Product "+i,
    //     "productPrice": randNum
    //   }
    //   this.products.push(newProduct);
    // }
    // this.products.forEach((product)=>{
    //   console.log(",",product);
    // });
    this.products = [...this.data.products];
    //console.log("Products ",this.products);

    this.getFilters();

  }

  getFilters() {
    this.filteredProducts = [...this.products];

    this.filteredProducts.sort((a, b) => a['productPrice'] > b['productPrice'] ? 1 : a['productPrice'] < b['productPrice'] ? -1 : 0);
    //console.log(this.filteredProducts);

    let priceDiff = Math.floor((this.filteredProducts[0].productPrice + this.filteredProducts[this.filteredProducts.length - 1].productPrice) / 5);
    //console.log("Price ranges: ", Math.floor(priceDiff));

    this.priceFilters.push(new Object({
      "id": 0,
      "min": this.filteredProducts[0].productPrice,
      "max": this.filteredProducts[this.filteredProducts.length-1].productPrice,
      "display": "All"
    }));
    for (let i = 0; i < 5; i++) {
      let priceFilter = new Object({
        "id": i+1,
        "min": this.filteredProducts[0].productPrice + (i * priceDiff),
        "max": this.filteredProducts[0].productPrice + ((i + 1) * priceDiff)>this.filteredProducts[this.filteredProducts.length-1].productPrice ? this.filteredProducts[this.filteredProducts.length-1].productPrice : this.filteredProducts[0].productPrice + ((i + 1) * priceDiff),
        "display": this.filteredProducts[0].productPrice + (i * priceDiff) + " --- " + (this.filteredProducts[0].productPrice + ((i + 1) * priceDiff)>this.filteredProducts[this.filteredProducts.length-1].productPrice ? this.filteredProducts[this.filteredProducts.length-1].productPrice : this.filteredProducts[0].productPrice + ((i + 1) * priceDiff))
      });
      this.priceFilters.push(priceFilter);
    }

    //console.log("Price filters ", this.priceFilters);
  }

  onChange($event){
    this.products = [...this.data.products];
    //console.log(this.priceFilters[this.selectedPriceFilter]);
    
    this.products = this.products.filter(product => product.productPrice >= this.priceFilters[this.selectedPriceFilter].min && product.productPrice <= this.priceFilters[this.selectedPriceFilter].max);
    //console.log("Products ",this.products);
  }

}
