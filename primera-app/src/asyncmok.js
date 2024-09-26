const products = [
    {
        id: 1,
        name: 'Iphone 11',
        category:'Celular',
        img: 'https://s1.eestatic.com/2019/10/04/omicrono/omicrono_434216876_134609956_864x486.jpg',
        stock: 20,
        precio: '15,000 M.N.'
    },
    {
        id: 2,
        name: 'Iphone 12',
        category:'Celular',
        img: 'https://i.blogs.es/38eec5/frontal/1366_2000.jpg',
        stock: 25,
        precio: '19,000 M.N.'
    },
    {
        id: 3,
        name: 'Iphone 13',
        category:'Celular',
        img: 'https://i.blogs.es/93bd37/iphone-13-lanzamiento-oficial-precio-caracteristicas-ficha-tecnica/1366_2000.jpg',
        stock: 30,
        precio: '24,000 M.N.'
    },
    {
        id: 4,
        name: 'JBL ',
        category: 'Audifonos',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDlSTsO1802Iap3KHgLFwgomOIPK-yWnxYYELlciZhug-FxOCUxTr6Ff0ZJ_5R_-WYfo&usqp=CAU',
        stock: 20,
        precio: '2,200 M.N.'
    },
    {
        id: 5,
        name: 'beats solo 3',
        category:'Audifonos',
        img: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/139115-headphones-review-beats-solo-3-wireless-headphones-review-image1-hc8vneit4l-jpg.webp',
        stock: 25,
        precio: '3,499 M.N.'
    },
    {
        id: 6,
        name: 'Carcasas para Iphone',
        category:'Accesorios',
        img: 'https://d500.epimg.net/cincodias/imagenes/2019/06/20/smartphones/1561040762_963966_1561041939_noticia_normal.jpg',
        stock: 30,
        precio: '500 M.N.'
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