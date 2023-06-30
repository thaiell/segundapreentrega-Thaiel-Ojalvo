const products = [
{id: "1", name: "Remera", price: 1750, idCategory: "1", stock: 15, img: "../public/img/remerablanca.webp"},
{id: "2", name: "Short", price: 1500, idCategory: "1", stock: 10, img: "../public/img/short.jpg"},
{id: "3", name: "Campera", price: 2000, idCategory: "2", stock: 13, img: "https://baobabsupercamping.com.ar/wpbaobab/wp-content/uploads/2022/03/Raffike-campera-ciclon-hombre-negra.jpg"},
{id: "4", name: "Remera Termica", price: 2500, idCategory: "2", stock: 6, img: "https://i0.wp.com/deportodosur.com.ar/wp-content/uploads/2021/04/remera-termica-flash-negro-ML.jpg?fit=1400%2C1400&ssl=1"},
{id: "5", name: "Uniforme Guardapolvo", price: 1500, idCategory: "3", stock: 20, img: "https://http2.mlstatic.com/D_NQ_NP_992846-MLA40926743582_022020-W.jpg"},
{id: "6", name: "Uniforme Bertier", price: 1500, idCategory: "3", stock: 20, img: "https://i.pinimg.com/originals/8c/cb/20/8ccb20ae010d45d8d6b6f983784bdac4.jpg"},
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getEspecificProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id)
            resolve(product)
        }, 100)
    })
}


export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsInCategory = products.filter(prod => prod.idCategory === idCategory)
            resolve(productsInCategory)
        }, 100)
    })
}