export function Data(scene) {
    //liste de tout les minerais et quantiter
    scene.dataMinerais = {
        rubis: {
            presentation: "rubis",
            brut: { quantiter: 0, image: "rubisBrut", nom: "brut", type: "rubis" },
            soigne: { quantiter: 0, image: "rubisSoigne", nom: "soigné", type: "rubis" },
            pur: { quantiter: 0, image: "rubisPur", nom: "pur", type: "rubis" },
            raffine: { quantiter: 0, image: "rubisRaffine", nom: "raffiné", type: "rubis" },
            elegant: { quantiter: 0, image: "rubisElegant", nom: "élégant", type: "rubis" },
            brillant: { quantiter: 0, image: "rubisBrillant", nom: "brillant", type: "rubis" },
            carre: { quantiter: 0, image: "rubisCarre", nom: "carré", type: "rubis" },
            grave: { quantiter: 0, image: "rubisGrave", nom: "gravé", type: "rubis" },
            ovale: { quantiter: 0, image: "rubisOvale", nom: "ovale", type: "rubis" },
            parfait: { quantiter: 0, image: "rubisParfait", nom: "parfait", type: "rubis" }
        },
        saphirs: {
            presentation: "saphirs",
            brut: { quantiter: 0, image: "saphirsBrut", nom: "brut", type: "saphirs" },
            soigne: { quantiter: 0, image: "saphirsSoigne", nom: "soigné", type: "saphirs" },
            pur: { quantiter: 0, image: "saphirsPur", nom: "pur", type: "saphirs" },
            raffine: { quantiter: 0, image: "saphirsRaffine", nom: "raffiné", type: "saphirs" },
            elegant: { quantiter: 0, image: "saphirsElegant", nom: "élégant", type: "saphirs" },
            brillant: { quantiter: 0, image: "saphirsBrillant", nom: "brillant", type: "saphirs" },
            carre: { quantiter: 0, image: "saphirsCarre", nom: "carré", type: "saphirs" },
            grave: { quantiter: 0, image: "saphirsGrave", nom: "gravé", type: "saphirs" },
            ovale: { quantiter: 0, image: "saphirsOvale", nom: "ovale", type: "saphirs" },
            parfait: { quantiter: 0, image: "saphirsParfait", nom: "parfait", type: "saphirs" }
        },
        topazes: {
            presentation: "topazes",
            brut: { quantiter: 0, image: "topazesBrut", nom: "brut", type: "topazes" },
            soigne: { quantiter: 0, image: "topazesSoigne", nom: "soigné", type: "topazes" },
            pur: { quantiter: 0, image: "topazesPur", nom: "pur", type: "topazes" },
            raffine: { quantiter: 0, image: "topazesRaffine", nom: "raffiné", type: "topazes" },
            elegant: { quantiter: 0, image: "topazesElegant", nom: "élégant", type: "topazes" },
            brillant: { quantiter: 0, image: "topazesBrillant", nom: "brillant", type: "topazes" },
            carre: { quantiter: 0, image: "topazesCarre", nom: "carré", type: "topazes" },
            grave: { quantiter: 0, image: "topazesGrave", nom: "gravé", type: "topazes" },
            ovale: { quantiter: 0, image: "topazesOvale", nom: "ovale", type: "topazes" },
            parfait: { quantiter: 0, image: "topazesParfait", nom: "parfait", type: "topazes" }
        },
        emeraudes: {
            presentation: "emeraudes",
            brut: { quantiter: 0, image: "emeraudesBrut", nom: "brut", type: "emeraudes" },
            soigne: { quantiter: 0, image: "emeraudesSoigne", nom: "soigné", type: "emeraudes" },
            pur: { quantiter: 0, image: "emeraudesPur", nom: "pur", type: "emeraudes" },
            raffine: { quantiter: 0, image: "emeraudesRaffine", nom: "raffiné", type: "emeraudes" },
            elegant: { quantiter: 0, image: "emeraudesElegant", nom: "élégant", type: "emeraudes" },
            brillant: { quantiter: 0, image: "emeraudesBrillant", nom: "brillant", type: "emeraudes" },
            carre: { quantiter: 0, image: "emeraudesCarre", nom: "carré", type: "emeraudes" },
            grave: { quantiter: 0, image: "emeraudesGrave", nom: "gravé", type: "emeraudes" },
            ovale: { quantiter: 0, image: "emeraudesOvale", nom: "ovale", type: "emeraudes" },
            parfait: { quantiter: 0, image: "emeraudesParfait", nom: "parfait", type: "emeraudes" }
        },
        onyx: {
            presentation: "onyx",
            brut: { quantiter: 0, image: "onyxBrut", nom: "brut", type: "onyx" },
            soigne: { quantiter: 0, image: "onyxSoigne", nom: "soigné", type: "onyx" },
            pur: { quantiter: 0, image: "onyxPur", nom: "pur", type: "onyx" },
            raffine: { quantiter: 0, image: "onyxRaffine", nom: "raffiné", type: "onyx" },
            elegant: { quantiter: 0, image: "onyxElegant", nom: "élégant", type: "onyx" },
            brillant: { quantiter: 0, image: "onyxBrillant", nom: "brillant", type: "onyx" },
            carre: { quantiter: 0, image: "onyxCarre", nom: "carré", type: "onyx" },
            grave: { quantiter: 0, image: "onyxGrave", nom: "gravé", type: "onyx" },
            ovale: { quantiter: 0, image: "onyxOvale", nom: "ovale", type: "onyx" },
            parfait: { quantiter: 0, image: "onyxParfait", nom: "parfait", type: "onyx" }
        },
        diamants: {
            presentation: "diamants",
            brut: { quantiter: 0, image: "diamantsBrut", nom: "brut", type: "diamants" },
            soigne: { quantiter: 0, image: "diamantsSoigne", nom: "soigné", type: "diamants" },
            pur: { quantiter: 0, image: "diamantsPur", nom: "pur", type: "diamants" },
            raffine: { quantiter: 0, image: "diamantsRaffine", nom: "raffiné", type: "diamants" },
            elegant: { quantiter: 0, image: "diamantsElegant", nom: "élégant", type: "diamants" },
            brillant: { quantiter: 0, image: "diamantsBrillant", nom: "brillant", type: "diamants" },
            carre: { quantiter: 0, image: "diamantsCarre", nom: "carré", type: "diamants" },
            grave: { quantiter: 0, image: "diamantsGrave", nom: "gravé", type: "diamants" },
            ovale: { quantiter: 0, image: "diamantsOvale", nom: "ovale", type: "diamants" },
            parfait: { quantiter: 0, image: "diamantsParfait", nom: "parfait", type: "diamants" }
        }
    }

    scene.mineraisSelect = "rubis";
}