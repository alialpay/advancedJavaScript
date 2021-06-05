let sayi1 = 10
 sayi1="Ali Alpay"
let student = {id:1, name:"Ali"}
//console.log(student)

function save( puan=10 , ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student)

let students = ["Ali Alpay","Semanur Aydın", "Kutluay Özdemir", "Nurbanu Çiçek"]

//console.log(students)

//let students2=[student,{id:2,name:"Nurbanu"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest
//let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)

// showProducts(10,["Elma","Armut","Karpuz"])

//spread
let points = [1,2,3,4,5,6]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC" , "D", ..."EFG", "H")

//Destructuring
let populations =[10000, 20000, 30000,[40000,100000]]
let[small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"]) 

