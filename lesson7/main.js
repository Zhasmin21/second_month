// class dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new dog(40, 1.5, 'violet');
// const bobik = new dog(3, 30, 'yellow');
//
// console.log(rex);
// console.log(bobik);
//
//

//1: Абстрактный класс

// class animal {
//     constructor(type, gender, color, voiceTex) {
//         this.type =type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceTex;
//     }
//
//     voice(){
//         console.log(this.voiceText)
//     }
// }
//
// class dog extends animal {
//     constructor(type, gender, color, voiceText, name,purposeText) {
//         super(type, gender, color, voiceText );
//         this.name = name;
//         this.purposeText = purposeText
//     }
//     purpose(){
//         console.log(`dog: ${this.name}\n Purpose: ${this.purposeText}`)
//     }
// }
//
// const rex = new dog (
//     'хищник',
//     'male',
//     'pink',
//     'gaf gaf!',
//     'Bob'
// ) //объект класса д
// rex.purpose()
//
// const bublik = new dog (
//     'domestik',
//     'female',
//     'red',
//     'tyaf tyaf!',
//     'bublik',
//     'face control'
// )
// bublik.purpose()




// homework
class my_house {
    constructor(door, windows, roof, wall, garden, floor, barn) {
        this.door = door;
        this.windows = windows;
        this.roof = roof;
        this.wall = wall;
        this.garden = garden;
        this.floor = floor;
        this.barn = barn;
    }
}
const home = new my_house(
    1,
    13,
    'red',
    'white',
    '8ap',
    2,
    'one big barn'
)
console.log(my_house)


class room {
    constructor(door, wall, window, floor, luster,shelf ) {
        this.door = door;
        this.wall = wall;
        this.window = window;
        this.floor = floor;
        this.luster = luster;
        this.shelf =shelf;
    }
}

console.log()


const myRoom = new room (
    1,
    'wallpaper',
    'one big window',
    'brown',
    '4 lamps',
    'books on the shelfs',
)
console.log(myRoom);


const parentsRoom = new room (
    1,
    'wallpaper',
    'two window',
    'brown',
    '2 lamps',
    'books on the shelfs',
)
console.log(parentsRoom);


