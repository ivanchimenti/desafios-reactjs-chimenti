const products = [
    {id:1, title: 'Atlético de Madrid Home 2021/22', description:'Camiseta Titular del Atlético de Madrid Temporada 2021/22', price:4500, thumbnail:'../../Images/atm-titular-1.jpg'},
    {id:2, title: 'Barcelona Home 2021/22', description:'Camiseta Titular del Barcelona Temporada 2021/22', price:4500, thumbnail:'../../Images/barcelona-titular-1.jpg'},
    {id:3, title: 'Real Madrid Home 2021/22', description:'Camiseta Titular del Real Madrid Temporada 2021/22', price:4500, thumbnail:'../../Images/rm-titular-1.jpg'},
];

const getFetch = new Promise ((resolve, reject) => {
    const condition = true 
    if (condition){
        setTimeout(() => {
            resolve(products)
        },2000)
    } else {
        setTimeout(() => {
            reject('404 not found')
        },2000)
    }
})

export default getFetch