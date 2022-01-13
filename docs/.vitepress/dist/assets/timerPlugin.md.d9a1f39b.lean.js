import{_ as a,c as e,a as n,t as o,b as s,o as c}from"./app.6aa4d79c.js";import{_ as p}from"./timer2.f8011f3b.js";var l="/TimerPlugin_banner.png",i="/TimerFunction.png",u="/createChallengeScreen1.png",r="/createChallengeScreen2.png",k="/fehler1.png";const un='{"title":"Building a Timer Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Concept","slug":"concept"},{"level":3,"title":"Styling","slug":"styling"},{"level":3,"title":"The idea in code","slug":"the-idea-in-code"},{"level":3,"title":"Animation","slug":"animation"},{"level":2,"title":"Plugin","slug":"plugin"},{"level":2,"title":"create challenge adaptation","slug":"create-challenge-adaptation"},{"level":3,"title":"Before","slug":"before"},{"level":3,"title":"After","slug":"after"},{"level":2,"title":"error handling","slug":"error-handling"},{"level":2,"title":"Second iteration","slug":"second-iteration"}],"relativePath":"timerPlugin.md","lastUpdated":1642065299780}',d={},h=n("p",null,[n("img",{src:l,alt:"An image"})],-1),g=n("h1",{id:"building-a-timer-plugin",tabindex:"-1"},[s("Building a Timer Plugin "),n("a",{class:"header-anchor",href:"#building-a-timer-plugin","aria-hidden":"true"},"#")],-1),m=n("p",null,"The final plugin should show a progress bar that indicates how much time is left at the current question.",-1),f=n("h2",{id:"concept",tabindex:"-1"},[s("Concept "),n("a",{class:"header-anchor",href:"#concept","aria-hidden":"true"},"#")],-1),_=n("h3",{id:"styling",tabindex:"-1"},[s("Styling "),n("a",{class:"header-anchor",href:"#styling","aria-hidden":"true"},"#")],-1),v=n("p",null,"The styling of the component should look like the following screenshots:",-1),b=n("p",null,[n("img",{src:i,alt:"An image"})],-1),w=n("h3",{id:"the-idea-in-code",tabindex:"-1"},[s("The idea in code "),n("a",{class:"header-anchor",href:"#the-idea-in-code","aria-hidden":"true"},"#")],-1),y=n("p",null,"At first the HTML:",-1),T=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border m-5 p-2 rounded-lg bg-white"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Time left "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("progress")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progress-indicator w-100"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("0"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("10"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progressBar"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("progress")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),x=n("p",null,"This basic countdown function counts down from 10 and sets the progress HTML element according to the value of the value of the timer function var",-1),A=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" timeToCountDown "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" timerFunction "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("timeToCountDown "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),s("downloadTimer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.challenge-submit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"progressBar"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"-"),s(" timeleft"),n("span",{class:"token punctuation"},";"),s(`
    timeToCountDown `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),B=n("p",null,"The problem with this solution is that the progress bar is jumpy with no animations.",-1),I=n("h3",{id:"animation",tabindex:"-1"},[s("Animation "),n("a",{class:"header-anchor",href:"#animation","aria-hidden":"true"},"#")],-1),j=n("p",null,"The change of the different states in the progressbar (0% -> 10% -> 20%-> ... -> 100%)",-1),q=n("p",null,"After a lot of experimentation with different @keyframe progress animations, the solution was to give the progress bar more states (from 10 to 1000). This required also the change of how long the function gets to wait before getting executed again.",-1),P=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" time input "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" timeleft "),n("span",{class:"token operator"},"="),s(" timeInput "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"var"),s(" downloadTimer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("timeleft "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),s("downloadTimer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.challenge-submit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"progressBar"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"-"),s(" timeleft"),n("span",{class:"token punctuation"},";"),s(`
    timeleft `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),C=n("h2",{id:"plugin",tabindex:"-1"},[s("Plugin "),n("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#")],-1),$=n("p",null,"CTFd plugins are implemented as Python modules and include some CTFd specific files. The structure looks like the following visualisation:",-1),M=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`CTFd
\u2514\u2500\u2500 plugins
\u2514\u2500\u2500 CTFd-plugin
\u251C\u2500\u2500 README.md          # README file
\u251C\u2500\u2500 __init__.py        # Main code file loaded by CTFd
\u251C\u2500\u2500 requirements.txt   # Any requirements that need to be installed
\u2514\u2500\u2500 config.json        # Plugin configuration file
`)])],-1),D=n("p",null,"CTFd is looking into the Plugin folder after the internal routes are established. If it finds a load() function, it will execute it.",-1),E=n("ul",null,[n("li",null,"config.json: Includes attributes like the name of the plugin or the route. in our case the name is TimerProgressbar.")],-1),F=n("h2",{id:"create-challenge-adaptation",tabindex:"-1"},[s("create challenge adaptation "),n("a",{class:"header-anchor",href:"#create-challenge-adaptation","aria-hidden":"true"},"#")],-1),S=n("p",null,"At this part, there must be an input field when creating the challenge, where the Administrator can enter in the amount of time.",-1),N=n("h3",{id:"before",tabindex:"-1"},[s("Before "),n("a",{class:"header-anchor",href:"#before","aria-hidden":"true"},"#")],-1),W=n("p",null,[n("img",{src:u,alt:"An image"})],-1),H=n("h3",{id:"after",tabindex:"-1"},[s("After "),n("a",{class:"header-anchor",href:"#after","aria-hidden":"true"},"#")],-1),L=n("p",null,[s("At the bottom there is the newly added input field: "),n("img",{src:r,alt:"An image"})],-1),R=n("h2",{id:"error-handling",tabindex:"-1"},[s("error handling "),n("a",{class:"header-anchor",href:"#error-handling","aria-hidden":"true"},"#")],-1),U=n("p",null,[s("After the implementation and the connection to the Database, errors started to occur. "),n("img",{src:k,alt:"An image"})],-1),V=n("div",{class:"danger custom-block"},[n("p",{class:"custom-block-title"},"Error"),n("p",null,"typeerror: Integer() takes no arguments")],-1),z=n("p",null,"The mistake was that I used the 'type=Integer' instead of 'type=number'",-1),G=n("h2",{id:"second-iteration",tabindex:"-1"},[s("Second iteration "),n("a",{class:"header-anchor",href:"#second-iteration","aria-hidden":"true"},"#")],-1),J=n("p",null,'This version includes the time left and is now dynamic to the "TimeInMinutes" variable.',-1),K=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("challenge-tags text-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    {% block tags %}
        {% for tag in tags %}
            `),n("span",{class:"token comment"},"<!-- Sorting for tags that start with timer-->"),s(`
            {% if tag.startswith('timer=') %}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border m-5 p-2 rounded-lg bg-white"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progressBar"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bar rounded-lg text-white"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(` 
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
                    `),n("span",{class:"token comment"},"// Using slice to cut off 'timer=' and everything unwanted after the two digits"),s(`
                    `),n("span",{class:"token keyword"},"var"),s(" TimeInMinutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("tag"),n("span",{class:"token operator"},"|"),s("tojson"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},";"),s(`
                `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
            {% else %}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("badge badge-info challenge-tag"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("{{ tag }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            {% endif %}    
        {% endfor %}
    {% endblock %}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),O=n("p",null,"When going through the tags, we look for a tag that includes 'timer='.",-1),Q=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token keyword"},"if"),s(" tag"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startswith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'timer='"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),X=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" TimeInMinutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("tag"),n("span",{class:"token operator"},"|"),s("tojson"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),Y=n("p",null,"Now we have the amount of time the challenge should run. we feed this now into our function:",-1),Z=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"progress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("timeleft"),n("span",{class:"token punctuation"},","),s(" timetotal"),n("span",{class:"token punctuation"},","),s(" $progressBar")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"var"),s(" widthProgress "),n("span",{class:"token operator"},"="),s(" timeleft "),n("span",{class:"token operator"},"*"),s(" $progressBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"width"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" timetotal"),n("span",{class:"token punctuation"},";"),s(`

    $progressBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"animate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" width"),n("span",{class:"token operator"},":"),s(" widthProgress "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"html"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("timeleft"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'":"'),n("span",{class:"token operator"},"+"),s(" timeleft"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("timeleft "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"progress"),n("span",{class:"token punctuation"},"("),s("timeleft "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" timetotal"),n("span",{class:"token punctuation"},","),s(" $progressBar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.challenge-submit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"progress"),n("span",{class:"token punctuation"},"("),s("TimeInMinutes"),n("span",{class:"token punctuation"},","),s(" TimeInMinutes"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#progressBar'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),nn=n("p",null,[s("The finished result after some styling update looks like that: "),n("img",{src:p,alt:"An image"})],-1);function sn(t,tn,an,en,on,cn){return c(),e("div",null,[h,g,m,f,_,v,b,w,y,T,x,A,B,I,j,q,P,C,$,M,D,E,F,S,N,W,H,L,R,U,V,z,G,J,K,O,Q,n("p",null,"When this is true, the progress bar gets displayed. Additionally, we use "+o(t.tag|t.tojson)+" to access the amount of time that got entered. We then have to slice off the 'timer=' and save it in a variable:",1),X,Y,Z,nn])}var rn=a(d,[["render",sn]]);export{un as __pageData,rn as default};