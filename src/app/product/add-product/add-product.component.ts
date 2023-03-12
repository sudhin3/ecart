import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){

    }
 
    addPrductForm=this.fb.group({
      id:[''],
      productName:[''],
      categoryId:[''],
      description:[''],
      price:[''],
      isAvailable:[''],
      productImage:[''],
      rating:[''],
      review:[''],
      vendoreName:[''],
      warrenty:['']
    })

    ngOnInit(): void {
    }

    addNewProduct(){

      let newProductData={

        id:this.addPrductForm.value.id,
        productName:this.addPrductForm.value.productName,
        categoryId: this.addPrductForm.value.categoryId,
        description:this.addPrductForm.value.description,
        price:this.addPrductForm.value.price,
        isAvailable:this.addPrductForm.value.isAvailable,
        productImage:this.addPrductForm.value.productImage,
        rating:this.addPrductForm.value.rating,
        review:this.addPrductForm.value.review,
        vendoreName:this.addPrductForm.value.vendoreName,
        warrenty:this.addPrductForm.value.warrenty

      }
      this.ps.addproduct(newProductData).subscribe((item:any)=>{
        alert("product added successfully")
        this.router.navigateByUrl('product')
      })

    }

}
