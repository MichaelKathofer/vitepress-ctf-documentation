![An image](/Outlook_banner.png)
# Outlook
In this section, I would like to give a perspective on what can be improved. This project is coming to an end for me,
Unfortunately, I still have some open points that I didn't manage to solve. The following points are some recommendations
I would like to give someone plans on further developing this project if this project gets further built out.
If there are any questions, feel free to contact me at any time.

## Timer Plugin
![An image](/timer2.png)
The timer function can be furthered improved ([Timer-Plugin Documentation](/timerPlugin)).
As visile in the documentation, the timer is now integrated as a tag, with the logic directly implemented in the
vives-theme challenge.html file. This can be further improved by creating a new challenge type.
I tried it a few times, but it never worked for me, to the lack of knowledge that I need a migration for this to work.
Check the [Plugin](/plugins) or [Multipel Choce Plugin](/multiplePlugin) for further resources.

## User Groups
The Team mode of the CTFd platform is not suitable for resembling classes. When using that, if a teammate solves a challenge,
everyone from the team gets it displayed as solved. Therefore, I've decided to use the tags the same as I used them in the
timer plugin. I renamed the field affiliation in the user profile to the classroom. So we can filter for each user
the affiliation must be in the tags of a challenge for it to get displayed. The filtering mechanism still has to be implemented
in the challenges.html view.

## Adding Question Types
To further make usage of the platform and make it more interesting, I recommend further adding challenge types.
This gives needed variety and makes it more playful. To give an example, a hangman inspired challenge type would be interesting.

