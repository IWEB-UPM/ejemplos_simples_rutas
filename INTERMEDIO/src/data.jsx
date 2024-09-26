/** fichero que simula una Base de datos
 * Ahora mismo esta en un array de recibos pero podria ser una base de datos en v2
 */


let recibos = [
  {
    name: "Amazon",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Viajes El Corte Ingles",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "El Cortes Ingles",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Media Markt",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "PC Componentes",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998"
  }
];




/**
 * 
 * @returns {Recibo[]}
 */
export function getRecibos() {
  return recibos;
}

/**
 * @param {number} number
 * @returns {Recibo}
 */
export function getRecibo(number) {
  return recibos.find(recibo => recibo.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteRecibo(number) {
  recibos = recibos.filter(recibo => recibo.number !== number);
}

