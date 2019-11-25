//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

const sqrNum = () => {
    let num = document.getElementById('square').value;
    return document.getElementById('square').value = num*num; };


const halfNum = () => {
    let num = document.getElementById('half').value;
    return document.getElementById('half').value = num /2; };

const percentNum = () => {
    let num = document.getElementById('percent2').value;
    let numtotal = document.getElementById('percent1').value;
    return document.getElementById('percent2').value = numtotal * (num/100);};

const areaCircle = () => {
    let num = document.getElementById('area').value;
    let result = num * num * Math.PI;
    return document.getElementById('area').value = result.toFixed(2);
};

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei
let sqrBtn = document.getElementById('sqr-btn');
sqrBtn.addEventListener("click",sqrNum);


let halfBtn = document.getElementById("half-btn");
halfBtn.addEventListener("click",halfNum);

let prcBtn = document.getElementById("prc-btn");
prcBtn.addEventListener("click",percentNum);

let areaBtn = document.getElementById("area-btn");
areaBtn.addEventListener("click",areaCircle);



//3
// Bonus: faceti sa functioneze si la key press pe langa click
