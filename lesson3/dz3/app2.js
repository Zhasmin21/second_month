function twoMass (mass,mass2){
    if (mass.length > mass2.length) {
    alert("Первый больше")
}
else if (mass2.length > mass.length) {
    alert("Второй больше")
}
else {
    alert("Они равны")
}
}
const mass = [1,6,8,3,55,22,3]
const mass2 = [1,2,3,4,5,6,7]

twoMass(mass,mass2)