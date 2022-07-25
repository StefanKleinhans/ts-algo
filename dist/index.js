"use strict";
// class Person {
//   id: number;
//   name: string;
//   mark: number;
//   constructor(id: number, name: string, mark: number) {
//     this.id = id;
//     this.name = name;
//     this.mark = mark;
//   }
// }
let list = [
    ["Jack", 90],
    ["Jack", 50],
    ["Jack", 60],
    ["John", 10],
    ["John", 45],
    ["Gill", 10],
    ["Gill", 15],
    ["Gill", 16],
    ["Gill", 35],
];
/**
 * @param A list of person records
 * @return A map containing the average mark achieved for each person.
 * It will contain only 1 record per  person.
 */
const averageMark = () => {
    let john = 0;
    let jack = 0;
    let gill = 0;
    let cntJohn = 0;
    let cntJack = 0;
    let cntGill = 0;
    list.forEach((item) => {
        console.log(item);
        if (item[0] == "John") {
            john += item[1];
            cntJohn += 1;
        }
        else if (item[0] == "Jack") {
            jack += item[1];
            cntJack += 1;
        }
        else if (item[0] == "Gill") {
            gill += item[1];
            cntGill += 1;
        }
    });
    return new Map([
        ["John", Math.floor(john / cntJohn)],
        ["Jack", Math.floor(jack / cntJack)],
        ["Gill", Math.floor(gill / cntGill)],
    ]);
};
console.log(averageMark());
