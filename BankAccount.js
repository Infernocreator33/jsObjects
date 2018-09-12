const bankAccount = {
    name: "Alex",
    balance: 0,

}
describe(bankAccount);

//making a deposit
bankAccount.balance += 250;

//paying for something using account
bankAccount.balance -= 80;

function describe(Account)
{
     console.log(`${Account.name} has an account balance of ${Account.balance}`);
}
describe(bankAccount);
