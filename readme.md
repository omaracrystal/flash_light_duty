# CAPSTONE
* (This will be completed Dec 10th)

## Description:
For my capstone project I wanted to incorporate new technologies such as web sockets and accelerometer technology.

This app is similar to Pictionary without the stress of having to draw anything.

## Technologies:

- MEAN - MongoDB - Express - Node - JavaScript - HTML5 - CSS3 - SASS - Mocha&Chai - Gulp - SVGs - N.io - WebSockets - Canvas - D3 - User Auth Tokens



## Schedule:
### Structure of project:
- **F= Front End, B= Back End**
- F/ create logo animation/ Main Page
- F/ How to play section and About (last)
- B/ Accelerometer technology (hook up)
- F/B Accelerometer technology (light point)
- F/B Accelerometer technology (hand off within chatroom)
- F/B Chat room
- B/ Chat room type recognition (match words to answer)
- F/ Chat room score tracker
- F/ Chat room win condition
- B/ Logic to switch out images once failed or won

### Extra
- F/B- login and logout (normal)
- B/ Login Github, Twitter (optional)
- F/ Dice with categories animation all sides
- F/B Roll Dice
- F/B Profile page (avatar load up) Stats page
- F/B Profile page D3 of stats (if have time)
- B/ Logic to match category with image chosen
- B/ Mongo save content
- F/ add Stars trophies!

## StoryBoard:
### Main screen
- Large SVG logo animation of “Flashlight Duty” - night sky background
- Menu (flashlight switch): Main, About, How to play, login (with Twitter, Github, Facebook, etc)
logo fades back to top center and login/ registration appears - or play now appears
- If Logged in:
menu: Profile, About, How to play, logout
- Have profile page (ability to upload avatar) see stats of games here (D3?), collection of stars won? Expanding graph with it first with points - expand to see categories of points and expand again to see each individual game won-


### Play
- All players are whoever is logged in the chat room
- Default first person in Chat room holds Flash light
- N.io activated to 1st person in room!
- Phone hook up to screen - once flash light hovers over start
- First to type the image name in chat room wins!
- That player gets a star for guessing correctly (best stars from hottest to coldest: Blue (you’re the hottest), White (you’re super hot), Yellow(you’re bright), Orange(your pretty cool), Red(that’s pretty rad))
- Hand off flash light ability to someone else (anyone in chat room)


### Stretch
- Implement dice with categories on each side: People, Animals, Places, Objects, Plants, Everything
- Roll dice with a shake motion (flash light holder)
- Add your own image! pick up to three possible answers
- Have teams!

**Main Page**                       |    |**Trivia Pop-Up**
:----------------------------------:|:--:|:----------------------------------:
![](/src/client/images/main2.png)      |    | ![](/src/client/images/main3.png)


![](/src/client/images/main1.png)

#### References:
- https://www.meteor.com/tutorials/blaze/running-on-mobile
