![An image](/HeroForVite.png)

This page is dedicated to the documentation of a VIVES University Final Year CTF :triangular_flag_on_post: project by Michael Kathofer.

# Introduction
This project aims to build a CTF learning platform. CTF stands for Capture the Flag and is a well-known formate in cybersecurity competitions.
The objective for participants is to enter in flags, which are embedded within each challenge.
The scoring system is based on how long it takes to enter the flag, and also how many hints they requested.
This concept forms the basis for this Project. Github: https://github.com/MichaelKathofer/CTF-Project-Vives


## Defining features
![An image](/Hero3ForVite.png)

| Must haves                                                 | Should haves                                  | Nice to haves              |
| :--------------------------------------------------------: |:---------------------------------------------:|:--------------------------:|
| Multiple modules that each can contain different challenges| system to organize classes (form user groups) | dark mode                  |
| editable questions                                         | different question types                      | achievements               |
| score system for optional grading                          | level / ranking system                        | results to PDF/CSV download|
| good usability                                             | option for multiple tries                     | terminal integration       |
|access control                                              | timer function                                | Email notification system  |
|different user groups and privileges                        |                                               | mobile access              |
|analytics                                                   ||
|view result page                                            ||
|password reset                                              ||


## Defining pages
### Sign in / Register
To manage access control, enable login from different devices and assign data to their users.

### Dashboard
Helps users track the progress: How many challenges they’ve completed,
the number of lessons left in the current course, learning streaks and others.
It, therefore, provides an overview of all challenges with each status.

### Leaderboard
Provides an overall ranking to show users their positioning compared to other participants.

### Question page
Tells the user the task and provides an input field for the flag after the challenge has been solved.
It also provides the option for hints if users get stuck.