export default class Todo {

  constructor (todo) {
    this.id      = todo.id      || null
    this.content = todo.content || ''
    this.doneFlg = todo.doneFlg || false
  }

  /** 同期処理 */
  toggleDoneFlg() {
    this.doneFlg = !this.doneFlg
  }

  /** 非同期処理 */
 
}
