// ES5 vs ES6

// ES6
// const a = 55;
// let b = 25;
//
// // ES5
// var c = 5;
// c = 'hello'
// console.log(c)

// const first_name = 'jack'
// const last_name = 'barbaro'

// console.log(first_name + " " + last_name)  // es5

// console.log(`${first_name} ${last_name}`);  // es6


// const getFullName = (user) => {
//     // return "first_name: " + user.first_name + "\n" + "last_name: " + user.last_name;
//     return `first name: ${user.first_name} \n last name ${user.last_name}`
// }
// const user = {
//     first_name: "jack",
//     last_name: "barbaaro"
// }
// console.log(getFullName(user))


// const mass = [1,5,45,88]
// const mass2 =[...mass]
//
// console.log(mass2)

// for (let i=0; i < mass.length; i ++){
//     mass.push(mass[i])
// }
// console.log(mass2)



// const obj = {
//     usermame: "jack",
//     age: 19,
//     last_name: "barbaro",
//     full_name: "jack barbaro"
// }
//
// const obj2 = {
//     ...obj,
//     key: "value",
//     key2: "value2"
// }
//
// console.log(obj2)


//деструктиризация

const props = {
    onsubmit: () => {
        console.log("Submit")
    },
    data: [
        {
             key: 'value'
        },
        {
             key: 'value'
        },
        {
             key: 'value'
        }
    ]
}
const {data,onsubmit} = props;

console.log(data)
onsubmit();