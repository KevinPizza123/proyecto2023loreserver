import { CategoryModel } from "./category.model";


export interface ProductModel{
id : number; // string o number 
title : string ; 
price : number ; 
description : string ;
category : CategoryModel;
images : string [ ];


}

