import img1 from "../Asserts/menpopular1.avif"
import img2 from "../Asserts/menpopular2.jpg"
let data=[{
    id:1,
name:"leather jacket",
image:img1,
old_price:50,
new_price:30,
},{
    id:2,
name:"BLACK COAT",
image:'https://media.istockphoto.com/id/907865186/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=6nIHksYpLZowAwCD1g0VOv7m_gpcoV9nKHC6WO91QNw=',
old_price:200,
new_price:175
},{
    name:"LEATHER JACKET",
    id:3,
    image:img2,
    old_price:130,
    new_price:100
},{id:4,
    name:"T-SHIRT",
    image:"data:image/jpeg;base64,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",
    old_price:"30",
    new_price:"20"
},{
    name:"SCARF",
    id:5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJVy9RLSAbuv_i5Du-Xjy14mBydvr8hVjYg&usqp=CAU",
    old_price:"18",
    new_price:"12"
}
]


export default data