function czyWspolliniowe(A, B, C) {
    // Sprawdź czy wektory AB i AC są współliniowe
    // Wektory są współliniowe, jeśli są proporcjonalne

    // Wektor AB
    let AB = {
        x: B.x - A.x,
        y: B.y - A.y,
        z: B.z - A.z
    };

    // Wektor AC
    let AC = {
        x: C.x - A.x,
        y: C.y - A.y,
        z: C.z - A.z
    };

    // Sprawdź czy wektory są proporcjonalne
    let proporcjaX = AB.x / AC.x;
    let proporcjaY = AB.y / AC.y;
    let proporcjaZ = AB.z / AC.z;

    // Sprawdź czy stosunki są równe (czy wektory są współliniowe)
    if (proporcjaX === proporcjaY && proporcjaY === proporcjaZ) {
        return true; // Punkty są współliniowe
    } else {
        return false; // Punkty nie są współliniowe
    }
}

// Przykładowe użycie funkcji
let punktA = { x: 1, y: 2, z: 3 };
let punktB = { x: 4, y: 5, z: 6 };
let punktC = { x: 7, y: 8, z: 9 };

if (czyWspolliniowe(punktA, punktB, punktC)) {
    console.log("Punkty są współliniowe");
} else {
    console.log("Punkty nie są współliniowe");
}
