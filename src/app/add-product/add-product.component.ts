import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  title=""
  image=""
  description=""
  price=""
  sellerName=""
  quantity=""

  readValue=()=>{
    let product:any = 
      {
        "title":this.title,
        "image":this.image,
        "description":this.description,
        "price":this.price,
        "sellerName":this.sellerName,
        "quantity":this.quantity
      }
      console.log(product)
  }

  

}
