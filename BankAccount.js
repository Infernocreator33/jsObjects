const bankAccount = {
    name: "Alex",
    balance: 0,
}
describe(bankAccount);

//making a deposit
credit(250);

//paying for something using account
credit(-80);


function credit(creditValue)
{
    if(creditValue >= 0)
    {
        bankAccount.balance += creditValue;
        return bankAccount.balance;
    }
    else(creditValue < 0)
    {
        //due to the negative value you still have to add it to the balance
        bankAccount.balance += creditValue;
        return bankAccount.balance;
    }
}
function describe(Account)
{
     console.log(`${Account.name} has an account balance of ${Account.balance}`);
}

describe(bankAccount);
