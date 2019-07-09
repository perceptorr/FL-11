let userE = 'user@gmail.com';
let adminE = 'admin@gmail.com';
let password;
let longEnought6 = 6;
let email = prompt('Enter your e-mail:', '');
if(!email || email === null) {
	alert('Canseled');
} else if(email.length < longEnought6){
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if(email === userE || email === adminE){
	password = prompt('Enter your password');
} else {
	alert('I don’t know you');
}
//2
let adminPass = 'AdminPass';
let userPass = 'UserPass';
if(!password || password === null){
	alert('Canseled');
} else if (email === adminE && password === adminPass || email === userE && password === userPass){
	alert('Welcome');
} else {
	alert('Wrong password');
}
//3
let oldPass;
let changePass = confirm('Do you want to change your password?');
if(!changePass) {
	alert('You have failed the change.');
} else if (changePass) {
	oldPass = prompt('Write your old password');
} 
let newPass;
if(!oldPass || oldPass === null){
	alert('Canseled');
} else if (email === adminE && oldPass === adminPass || email === userE && oldPass === userPass){
	newPass = prompt('Enter a new password');
} else {
	alert('Wrong password');
}
let checkNewPass;
let longEnought5 = 5;
if(newPass.length < longEnought5) {
	alert('It’s too short password. Sorry.');
} else if(newPass) {
	checkNewPass = prompt('Repeat a new password');
}
if(checkNewPass === newPass){
	alert('You have successfully changed your password.');
} else {
	alert('You wrote the wrong password.');
}	