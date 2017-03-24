"use strict"

class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers () {
		console.log("There are 50 users");
	}

	register() {
		console.log(this.username + ' is now registered');
	}
}

/*let bob = new User('bob', 'bob@gmail.com', '123456');
bob.register();*/
//User.countUsers();

class Member extends User {
	constructor (username, email, password, memberPackage) {
		super(username, email, password);
		this.package = memberPackage;
	}

	getPackage(){
		console.log(this.username+ 'is subscribed to '+ this.package+ ' package')
	}
}

let mike = new Member('prasanna', 'prasanna@gmail.com', '123456', 'standard');

mike.getPackage();
mike.register();