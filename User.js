const Account = require("./Account")

module.exports = class User {
  constructor(email, fulllname) {
    this.email = email
    this.fulllname = fulllname
    this.account = new Account(this)
  }
}