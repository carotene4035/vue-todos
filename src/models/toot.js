export default class Toot {
  constructor (toot) {
    this.id = toot.id || null
    this.content = toot.content
    this.fav = toot.fav || false
    this.user_id = toot.user_id || 1
  }
}
