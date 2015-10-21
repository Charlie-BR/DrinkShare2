WaitTime is used to maximize the time spent with friends - and reduce the time spent waiting in line for social lubricant.  After finding a bar you'd like to visit from our database, you can check the latest wait times from users and determine if the place is moving too slowly for your taste.  
You'll be able to see varying wait times for particular types of drinks, whether that's beer, wine, well liquor, or fancy cocktails, you'll know before you head to a bar whether you should bring a book to read while you're in line.  Or, if you're impatient like we are, you'll just go to a different bar entirely with a shorter WaitTime profile.

Process Overview:

1) A user logs in with Facebook and is either verified or created as a new user.
2) The user chooses whether to review WaitTimes or add a WaitTime of his/her own.
3) If user chooses to review WaitTimes, taken to a list of bars with each bar's average WaitTime to get an ordered drink
	3a) User can sort based on wait time or bar name
4) If user chooses to add WaitTime, taken to a page to select the bar from nearby locations using Yelp API
	4a) User selects bar and is taken to that bar's page
	4b) User clicks 'Add WaitTime' 
	4c) User selects which type of drink was ordered (Beer, Wine, Well Liquor, or Fancy Cocktail) and adds the # of minutes he/she waited
	4d) User clicks submit, add his/her WaitTime to the database
5)Newly added WaitTimes will populate on each bars individual page, and in the average WaitTime featured on the list of bars in the review page


Technologies and Techniques Used:

	-jQuery for DOM manipulation

	-AJAX for asynchronous requests

	-Bootstrap for CSS and JS shortcuts

	-Node.js for the speedy event loop and asynchorous processing 
	capability

	-Facebook Login API

	-Yelp Business listings API