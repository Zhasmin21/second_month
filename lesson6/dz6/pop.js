// 1
const arr1 = [0,1,2];
const arr2 = [3,4,5];
const arr3 = [6,7,8];
const arr4 = [9,10,11];
const arr5 = [12,13,14];

const array = arr1.concat(arr2, arr3, arr4, arr5);
console.log(array);

 // 2
 const obj = {
    key1: 'H',
    key2: 'E',
    key3: 'L',
    key4: 'L',
    key5: 'O'
}
const obj2 = {
    ...obj,
    key6: "B",
    key7: "O",
    key8: "B"
}
console.log(obj2);

// 3
const pop = [];

const input = document.getElementById('name')
const button = document.getElementById('button')

function render(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'pop');
    for (let i = 0; i < pop.length; i++){
        const divList =document.createElement('div');
        divList.setAttribute('class', 'block');
        const p = document.createElement('p');
        p.innerHTML = pop[i].text;
        divList.append(p);
        mainDiv.append(divList);
    }

    const form = document.querySelector('.home')
    document.querySelector('.pop').remove();
    form.append(mainDiv)
}
button.onclick = function () {
    const obj = {
        id: pop.length,
        text: "Hello " + input.value
    }
    this.append(pop);
    pop.push(obj);
    render()
}