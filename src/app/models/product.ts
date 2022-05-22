export class Product {

     id?: string;
    name: string;
    picture: string;
    gluten: boolean;
    lactose: boolean;

    constructor(paramName: string, paramPicture: string, paramGluten: boolean, paramLactose: boolean) {
        this.name = paramName;
        this.picture = paramPicture;
        this.gluten = paramGluten;
        this.lactose = paramLactose;
    }
}


