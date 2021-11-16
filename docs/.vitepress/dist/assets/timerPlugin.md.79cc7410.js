import{_ as s,c as a,o as e,a as n,b as t}from"./app.3ee486f3.js";var o="/TimerFunction.png";const R='{"title":"Building a Timer Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Concept","slug":"concept"},{"level":3,"title":"Styling","slug":"styling"},{"level":3,"title":"The idea in code","slug":"the-idea-in-code"},{"level":3,"title":"Animation","slug":"animation"},{"level":2,"title":"Plugin","slug":"plugin"},{"level":2,"title":"Combining concept and Plugin","slug":"combining-concept-and-plugin"}],"relativePath":"timerPlugin.md","lastUpdated":1636973227880}',c={},l=n("h1",{id:"building-a-timer-plugin",tabindex:"-1"},[t("Building a Timer Plugin "),n("a",{class:"header-anchor",href:"#building-a-timer-plugin","aria-hidden":"true"},"#")],-1),i=n("p",null,"The final plugin should show progress bar that indicates how much time is till left at the current question.",-1),p=n("h2",{id:"concept",tabindex:"-1"},[t("Concept "),n("a",{class:"header-anchor",href:"#concept","aria-hidden":"true"},"#")],-1),u=n("h3",{id:"styling",tabindex:"-1"},[t("Styling "),n("a",{class:"header-anchor",href:"#styling","aria-hidden":"true"},"#")],-1),r=n("p",null,"The styling of the component should look like the following screenshots:",-1),k=n("p",null,[n("img",{src:o,alt:"An image"})],-1),d=n("h3",{id:"the-idea-in-code",tabindex:"-1"},[t("The idea in code "),n("a",{class:"header-anchor",href:"#the-idea-in-code","aria-hidden":"true"},"#")],-1),h=n("p",null,"At first the HTML:",-1),g=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("border m-5 p-2 rounded-lg bg-white"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Time left "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("progress")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-indicator w-100"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progressBar"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("progress")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),m=n("p",null,"This basic countdown function counts down from 10 and sets the progress html element according to the value of the value of the timerFunction var",-1),f=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),t(" timeToCountDown "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"var"),t(" timerFunction "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),t("timeToCountDown "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),t("downloadTimer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.challenge-submit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"progressBar"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token operator"},"-"),t(" timeleft"),n("span",{class:"token punctuation"},";"),t(`
    timeToCountDown `),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])])],-1),_=n("p",null,"The problem with this solution is that the progress-bar is jumpy with no animations.",-1),b=n("h3",{id:"animation",tabindex:"-1"},[t("Animation "),n("a",{class:"header-anchor",href:"#animation","aria-hidden":"true"},"#")],-1),v=n("p",null,"The change of the different states in the progressbar (0% -> 10% -> 20%-> ... -> 100%)",-1),w=n("p",null,"After a lot of experimentation with different @keyframe progress animations the solution was to give the progressbar more states (from 10 to 1000). This required also the change of how long the function gets to wait before getting reexecuted.",-1),T=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),t(" timeInput "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"var"),t(" timeleft "),n("span",{class:"token operator"},"="),t(" timeInput "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),t(`
	
	`),n("span",{class:"token keyword"},"var"),t(" downloadTimer "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),t("timeleft "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),t("downloadTimer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.challenge-submit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"progressBar"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1000"),t(),n("span",{class:"token operator"},"-"),t(" timeleft"),n("span",{class:"token punctuation"},";"),t(`
		timeleft `),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])])],-1),y=n("h2",{id:"plugin",tabindex:"-1"},[t("Plugin "),n("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#")],-1),x=n("p",null,"CTFd plugins are implemented as Python modules and include some CTFd specific files. The structure looks like the following visualisation:",-1),C=n("div",{class:"language-"},[n("pre",null,[n("code",null,`CTFd
\u2514\u2500\u2500 plugins
   \u2514\u2500\u2500 CTFd-plugin
       \u251C\u2500\u2500 README.md          # README file
       \u251C\u2500\u2500 __init__.py        # Main code file loaded by CTFd
       \u251C\u2500\u2500 requirements.txt   # Any requirements that need to be installed
       \u2514\u2500\u2500 config.json        # Plugin configuration file
`)])],-1),P=n("p",null,"CTFd is looking into the Plugin folder, after the internal routs are established. If it finds a load() function, it will executed it.",-1),B=n("ul",null,[n("li",null,"config.json: Includes attributes like the name of the plugin or the route. in our case the name is TimerProgressbar.")],-1),I=n("h2",{id:"combining-concept-and-plugin",tabindex:"-1"},[t("Combining concept and Plugin "),n("a",{class:"header-anchor",href:"#combining-concept-and-plugin","aria-hidden":"true"},"#")],-1),q=[l,i,p,u,r,k,d,h,g,m,f,_,b,v,w,T,y,x,C,P,B,I];function F(A,E,j,D,$,M){return e(),a("div",null,q)}var S=s(c,[["render",F]]);export{R as __pageData,S as default};