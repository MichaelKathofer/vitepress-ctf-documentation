![An image](ctfflagLOGO.png)
# CTF Report Page

This page is dedicated to the documentation of a VIVES University Final Year CTF project by Michael Kathofer.


# Introduction

This project aims to build a CTF learning platform. **CTF** stands for **C**apture **t**he **F**lag and is a well-known
formate in cybersecurity competitions. The objective for participants is to enter in flags, which are embedded within
each challenge. The scoring system is based on how long it takes to enter the flag, and also how many hints they
requested.
This concept forms the basis for this Project.

## Defining features
Categorizing features according to their relevancy for the success of the project:
### Must haves
- multiple modules that each can contain different challenges
- editable questions
- score system for optional grading
- good usability
- access control
- different user groups and privileges
- analytics
- view result page
- password reset


### Should haves
- different question types
- level / ranking system
- option for multiple tries
- timer function
- system to organize classes (form user groups)
  :::

###  Nice to haves
- dark mode
- achievements
- results to PDF/CSV download
- terminal integration
- Email notification system
- mobile access

## Defining pages
### Sign in / Register
To manage access control, enable login from different devices and to assign data to their users.

### Dashboard
Helps users track the progress: How many challenges they’ve completed,
the number of lessons left in the current course, learning streak...
It therefore provides an overview of all challenges with each status (red)


### Leaderboard
Provides an overall ranking to show users their positioning.

### Question page
Tells the user the task and provides an input field for the flag after the challenge as been solved.
It also provides the option for hints if users get stuck.