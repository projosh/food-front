export class Product {

    id?: string;
    barCode: string;
    designation: string;
    gluten: Boolean;
    lactose: Boolean;
     

    constructor( paramId: string, paramBarCode: string, paramDesignation: string, paramGluten: Boolean, paramLactose: Boolean) {
        
        this.id = paramId;
        this.barCode = paramBarCode;
        this.designation = paramDesignation;
        this.gluten = paramGluten;
        this.lactose = paramLactose;
        
    }
}


