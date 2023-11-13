function obliczIloczynWektorowy(punktA, punktB, punktC) {
    // Oblicz wektory AB i AC
    let wektorAB = {
        x: punktB.x - punktA.x,
        y: punktB.y - punktA.y,
        z: punktB.z - punktA.z
    };

    let wektorAC = {
        x: punktC.x - punktA.x,
        y: punktC.y - punktA.y,
        z: punktC.z - punktA.z
    };

    // Oblicz iloczyn wektorowy wektorów AB i AC
    let iloczynWektorowy = {
        x: wektorAB.y * wektorAC.z - wektorAB.z * wektorAC.y,
        y: wektorAB.z * wektorAC.x - wektorAB.x * wektorAC.z,
        z: wektorAB.x * wektorAC.y - wektorAB.y * wektorAC.x
    };

    return iloczynWektorowy;
}

// Przykładowe użycie funkcji
let punktA = { x: 0, y: 0, z: 0 };
let punktB = { x: 1, y: 0, z: 0 };
let punktC = { x: 0, y: 1, z: 0 };

let wynikIloczynuWektorowego = obliczIloczynWektorowy(punktA, punktB, punktC);

function obliczIloczynSkalarnyZIloczynemWektorowym(iloczynWektorowy, punktA, punktG) {
    // Oblicz wektor AG
    let wektorAG = {
        x: punktG.x - punktA.x,
        y: punktG.y - punktA.y,
        z: punktG.z - punktA.z
    };

    // Oblicz iloczyn skalarny iloczynu wektorowego i wektora AG
    let iloczynSkalarny = iloczynWektorowy.x * wektorAG.x + iloczynWektorowy.y * wektorAG.y + iloczynWektorowy.z * wektorAG.z;

    return iloczynSkalarny;
}

let punktG = { x: 10, y: 11, z: -12 };
let punktH = { x: 20, y: -11, z: 32 };


let iloczynSkalarnyG = obliczIloczynSkalarnyZIloczynemWektorowym(wynikIloczynuWektorowego, punktA, punktG);
let iloczynSkalarnyH = obliczIloczynSkalarnyZIloczynemWektorowym(wynikIloczynuWektorowego, punktA, punktH);

if(iloczynSkalarnyG*iloczynSkalarnyH>0){console.log("po tej samej stronie")}
else{console.log("nie po tej samej stronie")}
