import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  
  public products!: any[];
 
  constructor() { }

  ngOnInit(): void {

    fetch("http://localhost:8080/products/details")
    .then((datas) => datas.json())

    .then((response) => {
      console.log(response);
      this.products = response;
    });

    this.ngOnInit

  }


  


}
