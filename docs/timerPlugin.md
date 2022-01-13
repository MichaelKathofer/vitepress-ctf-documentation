![An image](/TimerPlugin_banner.png)
# Building a Timer Plugin
The final plugin should show a progress bar that indicates how much time is left at the current question.

## Concept
### Styling
The styling of the component should look like the following screenshots:

![An image](/TimerFunction.png)

### The idea in code

At first the HTML:


```html
<div class="border m-5 p-2 rounded-lg bg-white">
    <p>Time left </p>
    <progress class="progress-indicator w-100"value="0" max="10" id="progressBar"></progress>
</div>
```

This basic countdown function counts down from 10 and sets the progress HTML element according to the value of the
value of the timer function var

```js
var timeToCountDown = 10;
var timerFunction = setInterval(function(){
    if(timeToCountDown <= 0){
        clearInterval(downloadTimer);
        $('.challenge-submit').trigger('click');
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeToCountDown -= 1;
}, 1000);
```
The problem with this solution is that the progress bar is jumpy with no animations.

### Animation
The change of the different states in the progressbar (0% -> 10% -> 20%-> ... -> 100%)

After a lot of experimentation with different @keyframe progress animations, the solution was to give the
progress bar more states (from 10 to 1000). This required also the change of how long the function gets to
wait before getting executed again.
```js
var time input = 10;
var timeleft = timeInput * 100;

var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        $('.challenge-submit').trigger('click');
    }
    document.getElementById("progressBar").value = 1000 - timeleft;
    timeleft -= 1;
}, 10);
```

## Plugin
CTFd plugins are implemented as Python modules and include some CTFd specific files.
The structure looks like the following visualisation:
```html
CTFd
└── plugins
└── CTFd-plugin
├── README.md          # README file
├── __init__.py        # Main code file loaded by CTFd
├── requirements.txt   # Any requirements that need to be installed
└── config.json        # Plugin configuration file
```
CTFd is looking into the Plugin folder after the internal routes are established. If it finds a load() function, it will execute it.

- config.json: Includes attributes like the name of the plugin or the route. in our case the name is TimerProgressbar.

## create challenge adaptation
At this part, there must be an input field when creating the challenge, where the Administrator can enter in the amount of time.
### Before
![An image](/createChallengeScreen1.png)
### After
At the bottom there is the newly added input field:
![An image](/createChallengeScreen2.png)
## error handling
After the implementation and the connection to the Database, errors started to occur.
![An image](/fehler1.png)

::: danger Error
typeerror: Integer() takes no arguments
:::

The mistake was that I used the 'type=Integer' instead of 'type=number'
## Second iteration
This version includes the time left and is now dynamic to the "TimeInMinutes" variable.
```html
<div class="challenge-tags text-center">
    {% block tags %}
        {% for tag in tags %}
            <!-- Sorting for tags that start with timer-->
            {% if tag.startswith('timer=') %}
                <div class="border m-5 p-2 rounded-lg bg-white">
                    <div id="progressBar">
                        <div class="bar rounded-lg text-white"></div>
                    </div> 
                </div>
                <script>
                    // Using slice to cut off 'timer=' and everything unwanted after the two digits
                    var TimeInMinutes = ({{tag|tojson}}.slice(6,8))*60;
                </script>
            {% else %}
                <span class='badge badge-info challenge-tag'>{{ tag }}</span>
            {% endif %}    
        {% endfor %}
    {% endblock %}
</div>
```

When going through the tags, we look for a tag that includes 'timer='.
```js
{% if tag.startswith('timer=') %}
```
When this is true, the progress bar gets displayed. Additionally, we use {{tag|tojson}} to access the amount of time that
got entered. We then have to slice off the 'timer=' and save it in a variable:

```js 
var TimeInMinutes = ({{tag|tojson}}.slice(6,8))*60;
```

Now we have the amount of time the challenge should run. we feed this now into our function:


```js
function progress(timeleft, timetotal, $progressBar) {

    var widthProgress = timeleft * $progressBar.width() / timetotal;

    $progressBar.find('div').animate({ width: widthProgress }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $progressBar);
        }, 1000);
    }
    else {
        $('.challenge-submit').trigger('click');
    }
};

progress(TimeInMinutes, TimeInMinutes, $('#progressBar'));
```

The finished result after some styling update looks like that:
![An image](/timer2.png)
