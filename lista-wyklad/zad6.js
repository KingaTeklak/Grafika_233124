function normalizujWektor(wektor) {
    let dlugosc = Math.sqrt(wektor.x * wektor.x + wektor.y * wektor.y + wektor.z * wektor.z);
    return {
        x: wektor.x / dlugosc,
        y: wektor.y / dlugosc,
        z: wektor.z / dlugosc
    };
}

function obliczWektorNormalny(A, B, C) {
    // Oblicz wektory AB i AC
    let wektorAB = {
        x: B.x - A.x,
        y: B.y - A.y,
        z: B.z - A.z
    };

    let wektorAC = {
        x: C.x - A.x,
        y: C.y - A.y,
        z: C.z - A.z
    };

    // Oblicz iloczyn wektorowy wektorów AB i AC
    let wektorNormalny = {
        x: wektorAB.y * wektorAC.z - wektorAB.z * wektorAC.y,
        y: wektorAB.z * wektorAC.x - wektorAB.x * wektorAC.z,
        z: wektorAB.x * wektorAC.y - wektorAB.y * wektorAC.x
    };

    // Normalizuj wektor normalny
    wektorNormalny = normalizujWektor(wektorNormalny);

    return wektorNormalny;
}

// Przykładowe użycie funkcji
let punktA = { x: 1, y: 2, z: 3 };
let punktB = { x: 4, y: 5, z: 6 };
let punktC = { x: 7, y: 8, z: 9 };

let wektorNormalny = obliczWektorNormalny(punktA, punktB, punktC);

console.log("Unormowany wektor normalny do płaszczyzny:", wektorNormalny);
