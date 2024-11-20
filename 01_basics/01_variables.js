const accountId = 144553; 
// Cannot be changed or re-declaration.

let accountEmail = 'sureshp380@gmail.com';
// can be changed and re-declare.
// If not assigned it is 'Undefined'

var accountPassword = '12345';
// can be changed and re-declare

accountCity = 'Balasore';
// can be changed and re-declare

let accountState;

// accountId = 2;
accountEmail = 'Surehp@gmail.com';
accountPassword = '12121212121';
accountCity = 'Hyderabad';


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Initially JS does not work in scope which creates re-assignment of the variables. 'Let' introduced to work in scope.*/