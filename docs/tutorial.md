![An image](/TutorialContent_banner.png)
# Tutorial Content
## Tutorial Content for normal Users
![An image](/TUT1.png)
![An image](/TUT2.png)
![An image](/TUT3.png)
![An image](/TUT4.png)
![An image](/TUT5.png)
![An image](/TUT6.png)

## Final Result
The landing page included a placeholder for an introduction video. The previously shown screen demonstrates the visual
underlying. To further explain the content, I recorded a voiceover. I further explain the features and use the
visuals as an underlay.
![An image](/timeStamps.png)
The image above shows the timeline of the video editor. After all the adjustments and the addition of music, the video
can be uploaded. Therefore, a new YT Channel had to be made: https://www.youtube.com/channel/UCy8cFQhs4jRlqQgOEI9o5qg
Then the video got uploaded. I decided to opt for "unlisted", so the video only shows up to people that own the link.
The next step was to embed the video into the landing page. In the share function under the video, there is the button
"embedded". This generates a link that you can copy into your HTML code:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/X28Niknp4oA"
        title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen> </iframe>
```
![An image](/uploaded.png)
The final video is now watchable via this link: https://www.youtube.com/watch?v=X28Niknp4oA
## Tutorial Content for Admin Users

### Set-up a new Challenge
1) Click on the Admin panel in the nav-bar
2) Go into Challenges
3) Click on the big plus (+) next to the word "Challenges"
4) Select a challenge Type.
5) Fill in the shown input fields and click on save
6) Go back to the challenges list view by clicking 'challenges'(in the Admin Panel) in the navbar
7) Select the created challenge and click the "Pencil"-button. By doing so, you can further make settings for the challenge.
8) Special: IN the "Tag"-category, if entered in "timer=5", then the challenge will be limited to a 5-minute minimum.
9) Important! Don't forget to set the challenge from "hidden" to "visible".

### Rest
Most of the stuff is easy findable/self-explanatory. In the rare case something isn't found, check out the official
the documentation page for further information: https://docs.ctfd.io/.