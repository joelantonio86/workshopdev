    // Coisas básicas da programação em JavaScript
    // Usei o express para criar e configurar meu servidor
    const express = require("express")
    const server = express()

    const ideas = [{
                img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
                title: "Curso de Programação",
                category: "Estudos",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                url: "http://rocketseat.com.br"
            },
            {
                img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
                title: "Exercicios",
                category: "Saúde",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                url: "http://rocketseat.com.br"
            },
            {
                img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
                title: "Meditação",
                category: "Mentalidade",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                url: "http://rocketseat.com.br"
            },
            {
                img: "https://image.flaticon.com/icons/svg/1069/1069474.svg",
                title: "Diversão em Família",
                category: "Karaoke",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                url: "http://rocketseat.com.br"
            },
        ]
        // configurar arquivos estáticos (css, scripts, imagens)
    server.use(express.static("public"))

    //configuração do nunjucks
    const nunjucks = require("nunjucks")
    nunjucks.configure("views", {
        express: server,
        noCache: true, // boolean
    })


    // criei unma rota/ 
    // e capturo o pedido do cliente para responder
    server.get("/", function(req, res) {

        const reversedIdeas = [...ideas].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }
        return res.render("index.html", { ideas: lastIdeas })
    })

    server.get("/ideias", function(req, res) {

        const reversedIdeas = [...ideas].reverse()

        return res.render("ideias.html", { ideas: reversedIdeas })
    })

    //liguei meu servidor na porta 3000
    server.listen(3000)