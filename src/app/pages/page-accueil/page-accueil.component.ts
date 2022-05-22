import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  
  public listNameProducts!: any[];

  constructor() { }

  ngOnInit(): void {

    fetch("http://localhost:8080/products/details")
    .then((datas) => datas.json())
    //.then(function(datas){
    //  return datas.json()
    //}) // est equivalente (à peu près) à la ligne du dessus 
    .then((response) => {
      console.log(response);
      this.listNameProducts = response;
    });

    // A ne jamais mettre dans ses classes c'est simplement pour donner un exemple
    // function name() {
    //   return "Jérémy"
    // } 

    // const name = () => {
    //   return "Jérémy"
    // } 

  }


  


}
