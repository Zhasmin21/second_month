var bestPeople = [
    {
        name: 'Nazira',
        salary: 34600
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Firdavs',
        salary: 47263
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Temirlan',
        salary: 58456
    },
    {
        name: 'Semen',
        salary: 56654
    },
    {
        name: 'Syimyk',
        salary: 76543
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Kutman',
        salary: 63213
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Chyngyzhan',
        salary: 23459
    },
    {
        name: 'Aliya',
        salary: 45697
    }
]

// Первое не смогла

let result = bestPeople.filter((bestPeople) => bestPeople.name[0] === 'S')
console.log(result)

let result2 = bestPeople.map(function({salary}) {
	return salary / 100;
});
console.log(result2);

let result3 = bestPeople.reduce(function(sum, {salary}) {
	return sum + salary;
}, 0);
console.log(result3);
