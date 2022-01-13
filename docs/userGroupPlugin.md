![An image](/UserGroupPlugin_banner.png)
# User Group Plugin

The CTFd platform has built-in USER and TEAM modes. The drawback of the integrated Team mode is, that once one
person of the team completes a challenge, all team members get credit. When talking about classrooms, a Team
that would resemble a class would all get credited when the first person finishes it, which is not beneficial.
Therefore, my proposed solution was to use the Affiliation field in the database, which has no specific usage
and utilise it as the classroom affiliation. On the other hand, there is the Admin User, which creates the challenges.
The idea is to add a tag with "class=ABCXYZ". Then in the CHallenges view, we search for the affiliation of the user
in the tags of the challenges.

## Issue:

No matter where I tried to implement the logic in the challenges.js file, the inner logic of the CTFd seems to overwrite
it and it simply never affects the placement of the challenges.
