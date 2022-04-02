const products = [
    {
        id: 1,
        name: 'iphone 11',
        category: 'celular',
        img: 'https://s1.eestatic.com/2019/10/04/omicrono/omicrono_434216876_134609956_864x486.jpg',
        stock: 20,
        precio: '15,000 M.N.'
    },
    {
        id: 2,
        name: 'iphone 12',
        category: 'celular',
        img: 'https://i.blogs.es/38eec5/frontal/1366_2000.jpg',
        stock: 25,
        precio: '19,000 M.N.'
    },
    {
        id: 3,
        name: 'iphone 13',
        category: 'celular',
        img: 'https://i.blogs.es/93bd37/iphone-13-lanzamiento-oficial-precio-caracteristicas-ficha-tecnica/1366_2000.jpg',
        stock: 30,
        precio: '24,000 M.N.'
    }
]

export const getProducts = (category) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        },2000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        })
    }, 2000)
}