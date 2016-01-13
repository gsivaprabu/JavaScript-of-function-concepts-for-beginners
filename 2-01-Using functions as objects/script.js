var calc =
	{
		status: "Awesome",
		plus: function (a,b)
		{
			return(
					 console.log("this => "+this),
					 console.log(this),
					 console.log(a+b),
					 console.log(arguments),
					 console.log(this.status)
					 )
		}
	}
