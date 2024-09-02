let nextId = 1

const model =(body, id = nextId++ ) => {
    if(
        body.email != undefined &&
        body.senha != undefined &&
        body.email != "" &&
        body.senha != ""
) {
    return {
        id,
        email:body.email,
        senha:body.senha,
    };
};
};

const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, id) => {
    const novo = model(body, parseInt(id))
    const indice = db.findIndex(el => el.id == id)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = id => {
    const indice = db.findIndex(el => el.id == id)
    if (indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    show,
    store,
    update,
    destroy
}

module.exports = model;