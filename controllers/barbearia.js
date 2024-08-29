const franquia_controller = require("../controllers/franquia.js")

let nextId = 1;

const model = (body, id = nextId++) => {
if (
franquia_controller.show(body.franquia_id) &&
body.nome != undefined &&
body.nome != ""
) {
    return {
    id,
    nome: body.nome,
    endereco:  body.endereco
    
    };
}
};

const store = (body) => {
const novo = model(body);

if (novo) {
    db.push(novo);

    return 201;
}

return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
const index = db.findIndex((el) => el.id == id);
const novo = model(body, parseInt(id));

if (index != -1 && novo) {
    db[index] = novo;
    return 200;
}

return 400;
};

const destroy = (id) => {
const index = db.findIndex((el) => el.id == id);

if(index != -1) {
    db.splice(index, 1);
    return 200;
}

return 404;
};

module.exports = {
store,
index,
show,
update,
destroy
}