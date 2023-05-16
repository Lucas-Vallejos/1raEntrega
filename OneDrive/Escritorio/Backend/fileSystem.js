import { promises as fs } from "fs";

class productManager {
  constructor() {
    this.patch = "./productos.txt";
    this.products = []
  }

  static id = 0;

  addProduct = async (title, description, price, imagen, code, stock) => {

    productManager.id++

    let newProduct = { 
      title,
      description,
      price,
      imagen,
      code,
      stock,
      id: productManager.id
    };
    this.products.push(newProduct)
  
    await fs.writeFile(this.patch, JSON.stringify(this.products));  
};

readProducts = async ()=> {
    let respuesta = await fs.readFile(this.patch, "utf-8")
     return JSON.parse(respuesta)  
}
getProducts = async () => {
    let respuesta2 = await this.readProducts()
   return console.log (respuesta2)
}  

getProductsById = async (id) => {
    let respuesta3 = await this.readProducts()
if (!respuesta3.find (product) => product.id === id )) {
    console.log("Producto no Encontrado")
} else {
    console.log(respuesta3.find ((product) => product.id === id ));
}
}
}


const productos = new productManager();
//productos.addProduct("Titulo1", "Description1", "1000", "image1", "abc123", 5);
//productos.addProduct("Titulo2", "Description2", "2000", "image2", "abc124", 10);
//productos.addProduct("Titulo3", "Description3", "3000", "image3", "abc125", 15);
//productos.getProducts()
productos.getProductById(3)