const axios = require("axios");

const cep_endereco = (req, res, next) => {
    req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "");
    if (req.body.cep.length == 8 && !isNaN(Number(req.body.cep))) {
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((res) => {
            console.log(resposta);

            req.body.endereco = resposta.data;
            delete req.body.cep;

            next();
        });
    } else {
        res.status(400).json("deu erro!");
    }
};

module.exports = cep_endereco;
