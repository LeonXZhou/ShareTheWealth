## Inspiration
When we consider inclusion and diversity, we tend to gravitate towards divisions amongst race, gender, and sexuality. We often don't think about one of the greatest divides amongst us, wealth inequality. ShareTheWealth is an event-planning app that aims to minimize this divide.

## What it does
ShareTheWealth allows a group to anonymously and inclusively consider the available financial resources for any event. An organizer is able to construct a list of activities at different levels of cost and invite their potential attendees to anonymously indicate how much they can spend for each activity. The goal is to be considerate to those that may not be able to afford certain activities and to allow those who might be willing to pay more for a certain event to potentially cover a portion for someone else. The organizer is able to see the total amount attendees are willing to pay and can then decide what is possible for the group budget. Then, each attendee pays what they said they could, some pay more, while some less but everyone gets to participate in making the decision.

We believe this app to be helpful and applicable in many situations such as for school events like field trips, work events like an annual office party, and even recreational events like a Friday night out. Our eventual goal is that through use of this app people become more aware of wealth inequality and are encouraged to always take other's financial capacities into consideration in the future.

## Screenshots
### Home Page:
Users can see upcoming occasions and create new occasions.
!["Home Page"](https://github.com/LeonXZhou/Odyssey/blob/main/Documentation/Screenshots/HomePages.png)
### Activity Options Page:
Users are able add activities options and specify the goal amount needed to run that activity for the specific ocassion. 
!["My Trips"](https://github.com/LeonXZhou/Odyssey/blob/main/Documentation/Screenshots/MyTrips.png)

## How we built it
To make the app as accessible as possible we decided to implement a full-stack mobile web application. To achieve this we used a React front end, with a Python based flask server on the backend, and a postgreSQL database.

## Challenges we ran into
* GitHub version control
* attempting to manage RESTful API

## Accomplishments that we're proud of
* multiple pages with a consistent design scheme 
* animations, scrollers, icons, buttons on buttons! 
* setting up a full working database in one day! 

## What we learned
* how to use and work with React
* first time using Flask as a backend server
* first time connected to cloud database (ElephantSQL)

## What's next for ShareTheWealth
* implementing ways to share an event link between users (so other users can join events)
* initializing sign in and sign up, with password hashing and cookie encryption for persistent login
* connecting a way to contribute money, and to access the "wealth" amount
* implement web sockets so that values are updated immediately for all users in an event
* implement alert function that notifies a user if for example, an event activity hits its target goal


## Dependancies:
### FLASK
* psycopg2
* load_dotenv
* requests

### REACT
* Axios
* React-Router
* JS-cookies



