import Elem from "./Elem.js";

export default class JatekTer {
  #aktElem = "X";
  #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  constructor() {
    this.#megjelenit();

    /* feliratkozunk a sajét lepes eseményünkre */
    $(window).on("lepes", (event) => {
      console.log(event.detail);
      let id = event.detail;
      this.#beallit(id);
    });
  }

  #beallit() {
    this.#lista[id] = this.#aktElem;
    /*
    if (this.#aktElem === "X") {
      this.#aktElem = "O";
    } else {
      this.#aktElem = "X";
    }
    */
   this.#aktElem==="X"?this.#aktElem="O":this.#aktElem="X"
  }

  #megjelenit() {
    /* kirak 9 db elemet a játéktérre */
    let szuloElem=$(".jatekter")
    szuloElem.empty()
    this.#lista.forEach((ertek, index) => {
      new Elem(index, ertek, szuloElem);
    });
  }
  #ell(){
    /* szorgalmi hf */
  }
}
