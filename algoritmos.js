class Hombre {
    #nombre = "estado defaul";
    #estado = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado(estado) {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado

    }
    subirAl(Coche) {
        console.log("arrancar " + Coche.getNombre());
        Coche.auto(this);

    }
    movimiento(persona){
        this.#estado++;
        if(this.estado){
            console.log("en movimiento")
        }
    }
}

class Coche {
    #nombre = "estado defaul";
    #estado = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado(estado) {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado
    }

    auto(enciende){
      this.#estado++;
      if (this.#estado){
        console.log("enciendido")
        enciende.movimiento(this)
      }
      else{
        console.log("no enciende")

      }
    }
}


const carlos = new Hombre();
const elRojo = new Coche();
carlos.setNombre("Carlos");
elRojo.setNombre("el Rojo");
carlos.subirAl(elRojo);






