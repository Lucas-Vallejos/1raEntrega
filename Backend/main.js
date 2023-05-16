class productManager {
    constructor(){
        this.products = [];
    }
    static id = 0


    addProduct(title,description, price, image, code, stock){
        for (let i = 0; i <this.products.length;i++){
            if(this.products[i].code === code){
                console.log (`El codigo ${code} esta repetido`);
                break;
            }
        }

const newProduct ={
            title,
            description,
            price, 
            image, 
            code, 
            stock, 

};
if (!Object.values(newProduct).includes(undefined)){
        productManager.id++;
        this.products.push ({
            ...newProduct,    
            id:productManager.id,
        });
    }else {
            console.log("todos los campos son requeridos")
        }
    }
    getProduct(){
        return this.products;
    }
    existe (id) {
        return this.products.find((producto)=> producto.i === id)
    }
    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
        
    }

}
const productos = new productManager

console.log(productos.getProduct());

productos.addProduct("titulo1","descripcion1",1000 ,"imagen1","abc123",5);
productos.addProduct("titulo2","descripcion2",1000 ,"imagen2","abc124",6);

console.log(productos.getProduct());

productos.getProductById(1);