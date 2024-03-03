

export const products=[
    {
        id:1,
        image:"/p-1.png",
        description:"Brushed Raglan Sweatshirt",
        price:195,
        category:"products",
    },
    {
        id:2,
        image:"/p-2.png",
        description:"Second Shirt",
        price:165,
        category:"products",
    }
    ,
    {
        id:3,
        image:"/p-3.png",
        description:"Second Shirt",
        price:165,
        category:"products",
    }
]
console.log(products.map((item)=>{item.price}))