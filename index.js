const App = require("./App")

App.createUser('josue@email.com', 'Josue Nunes')
App.createUser('teca@email.com', 'Teca Nunes')
App.createUser('mec@email.com', 'Meca Nunes')


App.deposit('josue@email.com', 100)

App.transfer('josue@email.com', 'mec@email.com', 20)


App.changeLoanFee(10)

App.takeLoan('teca@email.com', 2000, 24)

console.log(App.findUser('josue@email.com'));
console.log(App.findUser('josue@email.com').account);


console.log(App.findUser('teca@email.com'));
console.log(App.findUser('teca@email.com').
  account);
console.log(App.findUser('mec@email.com'));
console.log(App.findUser('mec@email.com').
  account);