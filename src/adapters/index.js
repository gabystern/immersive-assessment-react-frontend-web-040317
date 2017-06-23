export class TransactionsAdapter {
  static all(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then((resp) => resp.json())
  }
}
