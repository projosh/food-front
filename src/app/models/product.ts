export class Product {

     id?: string;
    barcode: string;
    designation: string;
    gluten: boolean;
    lactose: boolean;

    constructor(paramBarcode: string, paramDesignation: string, paramGluten: boolean, paramLactose: boolean) {
        this.barcode = paramBarcode;
        this.designation = paramDesignation;
        this.gluten = paramGluten;
        this.lactose = paramLactose;
    }
}


