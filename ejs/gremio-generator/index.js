import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {

    const lineup = lineupData;
    const lineupGenerated = [];
    var zag1 = 0;
    var mei1 = 0;
    var mei2 = 0;
    var ata1 = 0;
    var ata2 = 0;

    //GOLEIRO
    lineupGenerated[1] = [
        lineup.goleiros[
            Math.floor(Math.random() * lineup.goleiros.length)
        ]
    ];

    lineupGenerated[2] = [
        lineup.lateraisDireitos[
            Math.floor(Math.random() * lineup.lateraisDireitos.length)
        ]
    ];


    lineupGenerated[3] = [
        zag1 = Math.floor(Math.random() * lineup.zagueiros.length);
        lineup.zagueiros[zag1];
    ];


    lineupGenerated[4] = [
        lineup.zagueiros[
            Math.floor(Math.random() * lineup.zagueiros.length)
        ]
    ];

    // LATERAL ESQUERDO
    lineupGenerated[5] = [
        lineup.lateraisEsquerdos[
            Math.floor(Math.random() * lineup.lateraisEsquerdos.length)
        ]
    ];

    // MEIA 1
    lineupGenerated[6] = [
        lineup.meias[
            Math.floor(Math.random() * lineup.meias.length)
        ]
    ];

    // MEIA 2
    lineupGenerated[7] = [
        lineup.meias[
            Math.floor(Math.random() * lineup.meias.length)
        ]
    ];

    // MEIA 3
    lineupGenerated[8] = [
        lineup.meias[
            Math.floor(Math.random() * lineup.meias.length)
        ]
    ];


    // ATACANTES

    lineupGenerated[9] = [
        lineup.atacantes[
            Math.floor(Math.random() * lineup.atacantes.length)
        ]
    ];

    lineupGenerated[10] = [
        lineup.atacantes[
            Math.floor(Math.random() * lineup.atacantes.length)
        ]
    ];

    lineupGenerated[11] = [
        lineup.atacantes[
            Math.floor(Math.random() * lineup.atacantes.length)
        ]
    ];

    res.render("index.ejs", {
        lineupGremio: lineupGenerated
    });

});

app.listen(port, () => {
    console.log(`Server runing on port ${port}.`);
});

const lineupData = {
    goleiros: [
        "Mazaroppi",
        "Danrlei",
        "Marcelo Grohe",
    ],
    lateraisDireitos: [
        "Paulo Roberto",
        "Arce",
        "Anderson Lima",
        "Edilson",
    ],
    zagueiros: [
        "De Leon",
        "Baidek",
        "Adilson",
        "Rivarola",
        "Geromel",
        "Kannemann",
    ],
    lateraisEsquerdos: [
        "Roger",
        "Cortez",
    ],
    meias: [
        "China",
        "Mario Sergio",
        "Osvaldo",
        "Paulo Cezar Caju",
        "Dinho",
        "Goiano",
        "Carlos Miguel",
        "Arílson",
        "Arthur",
        "Maicon",
        "Luan",
        "Douglas",
        "Cicero",
    ],
    atacantes: [
        "Renato Portaluppi",
        "Baltazar",
        "Tarciso",
        "Caio",
        "Cezar",
        "Paulo Nunes",
        "Jardel",
        "Everton",
        "Lucas Barrios",
        "Fernandinho",
        "Jael",
        "Pedro Rocha"
    ],
    tecnicos: [
        "Felipão",
        "Espinosa",
        "Renato Portaluppi"
    ]
};