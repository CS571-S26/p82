# CS571 Web Project - Badger Gameday Survival Guide
**Project Description**

The Badger Gameday Survival Guide is a web app designed to alleviate
the chaos of a UW-Madison home football game. If you’ve ever been to
a home game, you have probably experienced the shared frustrations
of finding a place to park (that is somewhat within walking distance of
Camp Randall), and finding a place to eat or grab a drink that doesn’t
have a line out the door. This app focuses on improving these issues to
optimize users’ pre-game and post-game experience. 
##
**Details**

The app was built using React & Vite and styled with React-Bootstrap for a 
responsive, accessible, and professional UI. Using react router, the site
contains 5 primary pages: a homepage, about page, live parking map, restaurant 
finder, and gameday essentials dashboard. The “live parking map” integrates the 
City of Madison’s Open Data API to display real-time availability for city-owned 
ramps, combined with an embedded, interactive map through Google Maps API. The 
“restaurant finder” uses information from Google Maps stored in Google Firestore 
to help users locate available dining options in the city. The main interactive 
elements will allow users to select a parking lot and a restaurant, and 
calculate the best route to each planned location. The app also consists of 
12+ React components, including a primary navigation bar and footer, 
interactive map pins, and data cards.
##
**Future Improvements**

I hope to eventually incorporate an AI assistant to provide personalized 
itineraries based on user preferences for food, parking prices/locations, and 
walking distances. I also hope to partner with the University of Wisconsin-Madison 
to use their live university-owned parking availability data to better assist 
badger fans looking for parking on gamedays. Parking is also normally available 
through students and other Madison residents charging fans to park on
their properties. Enabling users to advertise their parking on the website,
and possibly allowing fans to reserve those spots in advance, would also be a
very helpful feature to add.
