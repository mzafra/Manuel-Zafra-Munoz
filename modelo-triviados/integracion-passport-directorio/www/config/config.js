module.exports = {
	development: {
		db: 'mongodb://localhost/demoPassport',
		app: {
			name: 'Passport Authentication Tutorial'
		},
		twitter: {
			clientID: "hhgp8iiYLLvM4cmZgX2Z4w",
			clientSecret: "pIsXCLxrFHpjBrTI8DGBlh6HEXXg4IhyFtnnIVkzM",
			callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
		},		
		facebook: {
			clientID: "180099695527613",
			clientSecret: "a1715352dc589823bd3327df93f412b5",
			callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
		}
	},
  	production: {
    	db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		app: {
			name: 'Passport Authentication Tutorial'
		},
		twitter: {
			clientID: "-----",
			clientSecret: "------",
			callbackURL: "/auth/twitter/callback"
		},
		facebook: {
			clientID: "clientID",
			clientSecret: "clientSecret",
			callbackURL: "{{production callbackURL}}"
		}
 	}
}
