![An image](/CustomTheme_banner.png)
# VIVES Theme
The goal is to have a custom theme for the CTFd framework that is directly tailored towards the corporate design of
VIVES University and our use-case to have a learning platform.

## Resources
No resources are provided on the official documentation page of CTFd (04.01.22) and also there is almost no
documentation is also available on the internet. https://docs.ctfd.io/docs/settings/themes/
Therefore, I've downloaded an existing theme and tried to get familiar with structure and styling:
- Found a non-payment theme that is compatible with CTFd version 3.3.0: https://github.com/chainflag/ctfd-neon-theme
- Cloning neon-theme into '/themes' directory and started modifying and getting familiar.

### Reverse engineering
Due to the lack of documentation, the process of creating a new theme was to reverse engineer an existing theme.
Doing that I came up with the following structure each theme follows:

- assets
  - css
    - includes
    - [ scss files ]
  - js
    - pages
      - [ js files tht are named like the page they belong to. For example login.js ]
    - [ js files that are not specific to a page ]
- static
  - css
    - [ folder includes bootstrap files ]
  - fonts
    - [ folder includes all font related files ]
  - img
    - [ folder includes all images that where uses in the theme ]
  - js
  - sounds
- tempaltes
  - components
  - errors
  - macros
  - teams
  - users
  - [ base.html ]
  - [ challenge.html ]
  - [ challenges.html ]
  - [ config.html ]
  - [ confirm.html ]
  - [ login.html ]
  - [ notification.html ]
  - [ page.html ]
  - [ register.html ]
  - [ reset_password.html ]
  - [ scoreboard.html ]
  - [ settings.html ]
  - [ setup.html ]

So the first step was to create a folder in the themes directory and give it the name of our theme: vives-theme.
Then I copied over the base theme into the folder, so the vives theme follows the needed structure.
The following step was to create a design that we can then code:

## Design
It is important to me that the design fits into the language of the other VIVES pages and their corporate identity.
Therefore, it is crucial to identify what signature elements are used in the current VIVES homepage.
IN the following section are some of them listed.

### Identifying design language
![An image](/analyse.png)

![An image](/colors.png)

## Design Iteration 1
### Components
#### Logo
With the input and analysis of the current VIVES homepage, I designed a logo for this CTF project. It features a cubic
design that felt more modern to me than the standard CTFd logo. The idea to incorporate a flag within the logo didn't
find its way into the new logo. Nevertheless,  I wanted to include it somewhere so I used it in the Hero image which later in the process
got replaced by the astronaut mascot who also holds the flag.

![An image](/logoRedesign.png)
![An image](/Logo_vite.png)
#### Hero image
The CTFd framework in its standard configuration wants a Hero image that gets placed on the front side of the landing page.
The framework provides an upload field in the config settings to do so.
![An image](/logo_1.png)
#### graphical elements
![An image](/styleComponent.png)
#### Bullet points desing
![An image](/lists.png)
#### Userboard design
![An image](/Userboard.png)
#### Section design
![An image](/sectionDesing.png)

## Design Iteration 2
The goal of this Iteration was to make the Styling more professional. The first design was too plain and didn't seem to
be inviting enough. Therefore, I tried to make the Landingpage more colourful and playful, while keeping it professional.
As a design language, I choose the style of "Kurzgesagt": Colourful SVG with reduced detailing and shapes. The first step
was to rethink the overall Theme. Capture the Flag and moon landing felt like a good idea after a lot of brainstorming.
The reason being, that I can make the styling darker because of the dark sky, and I can implement the Vives red as the
surface of a planet.

#### Section design 1
This is the transition between the first section with the hero image, and the second one with the explaining video.
![An image](/waves1.svg)

#### Section design 2
This section design marks the transition between the video section and the footer.
![An image](/waves2.svg)

#### Hero image redesign
![An image](/astronaut_flag.svg)

# Animations
The next step following the design was to bring it to life. Good design a good basis but tasty animations enhance the
user experience and elevate an 'ok' site to a 'good' site. There are a few different kinds of animation, from small hovers
to SVG animations. In this section, I want to focus on the animation of the main SVG at the landing page since standard
animations on buttons are common and resources are easy to find.

## SVG Animation
The landing page shows the mascot of the page which is an astronaut holding the VIVES flag. In the animation, the astronaut
should wave it in an infinite loop. The software I used was After Effects, but a free there is the trial version of SVGator.
First of all, load the SVG in the chosen software.
![An image](/animationTutorial.png)
The first step is to group all the elements that
should move in conjunction. In our case, it is the flag. That includes the stick, the flag and the font itself.
Then select properties that should change from the group and make a keyframe at the beginning at the desired end time.
The animation should take 3 seconds in our case so at 0s and 3s a keyframe with the same value. This makes sure that it
creates a perfect loop without jumping. The second step is to change the value of the chosen property, for example, rotation
to a different value. For example 30° at 1,5s. So the flag now rotates from 0° at 0s to 30° at 1,5s and back to 0° as second 3.
This step can be repeated with different properties and groups to come up with the desired loop. When exporting the SVG
don't forget to select the loop style, whether it should repeat itself once or x many times. The final result can be seen
on the landing page.

https://www.svgator.com/

### Result after the second design iteration
#### Final section 1
![An image](/fullSection1.png)
#### Final section 2
![An image](/fullSection2.png)
#### Final section 3
![An image](/fullSection3.png)



