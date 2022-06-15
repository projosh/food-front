export class Product {

    id?: string;
    barCode: string;
    designation: string;
    gluten: boolean;
    lactose: boolean;
    categoryId: number;
    brandId: number;
     

    constructor( paramId: string, paramBarCode: string, paramDesignation: string, paramGluten: boolean, paramLactose: boolean, paramCategoryId: number, paramBrandId: number) {
        
        this.id = paramId;
        this.barCode = paramBarCode;
        this.designation = paramDesignation;
        this.gluten = paramGluten;
        this.lactose = paramLactose;
        this.categoryId = paramCategoryId;
        this.brandId = paramBrandId;
        
    }
}


