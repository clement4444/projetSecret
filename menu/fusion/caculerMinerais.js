export function CalculerMinerais(scene, y, cleMinerais) {
    // Vérifier si on est au tier 0 ou en-dessous
    if (y <= 0) return false;

    // Accumulateur de la valeur totale en minerais de T1
    let traductionMineraiBrut = 0;

    // Quantité de T1 équivalente requise pour créer un minerai de tier `y`
    const valeurRequiseEnT1 = caculQBrut(y);
    const palier = valeurRequiseEnT1 / 5; // Représente chaque portion de 1/5 en T1

    // Accumuler les minerais de chaque tier inférieur en équivalent de T1
    for (let i = 0; i < y; i++) {
        const quantiteTierI = scene.dataMinerais[cleMinerais][scene.clesPurification[i]].quantiter;

        // Convertir en équivalent T1 pour ce tier
        const valeurEnT1 = caculQBrut(i) * quantiteTierI;

        // Vérifier que la valeurEnT1 est un multiple exact du palier
        const portionsRemplies = Math.floor(valeurEnT1 / palier);

        if (portionsRemplies > 0) {
            // Calculer la contribution totale en T1 en respectant les paliers
            traductionMineraiBrut += portionsRemplies * palier;
        }
    }

    // Vérifier si l'accumulation permet de créer au moins 1 minerai de tier `y`
    return traductionMineraiBrut >= valeurRequiseEnT1;
}

function caculQBrut(y) {
    return (5 ** y); // Valeur en T1 d'un minerai de tier `y`
}
