

class User {
    constructor({ nombre, apellido, email, pass, user, rol }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
        this.user = user;
        this.rol = rol;
    }
}

module.exports = {
    User
}