import{_ as s,c as a,o as i,a as e,b as t}from"./app.6aa4d79c.js";var o="/UserGroupPlugin_banner.png";const v='{"title":"User Group Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Issue:","slug":"issue"}],"relativePath":"userGroupPlugin.md","lastUpdated":1642065520306}',n={},r=e("p",null,[e("img",{src:o,alt:"An image"})],-1),l=e("h1",{id:"user-group-plugin",tabindex:"-1"},[t("User Group Plugin "),e("a",{class:"header-anchor",href:"#user-group-plugin","aria-hidden":"true"},"#")],-1),h=e("p",null,'The CTFd platform has built-in USER and TEAM modes. The drawback of the integrated Team mode is, that once one person of the team completes a challenge, all team members get credit. When talking about classrooms, a Team that would resemble a class would all get credited when the first person finishes it, which is not beneficial. Therefore, my proposed solution was to use the Affiliation field in the database, which has no specific usage and utilise it as the classroom affiliation. On the other hand, there is the Admin User, which creates the challenges. The idea is to add a tag with "class=ABCXYZ". Then in the CHallenges view, we search for the affiliation of the user in the tags of the challenges.',-1),c=e("h2",{id:"issue",tabindex:"-1"},[t("Issue: "),e("a",{class:"header-anchor",href:"#issue","aria-hidden":"true"},"#")],-1),d=e("p",null,"No matter where I tried to implement the logic in the challenges.js file, the inner logic of the CTFd seems to overwrite it and it simply never affects the placement of the challenges.",-1),u=[r,l,h,c,d];function p(f,m,g,_,w,b){return i(),a("div",null,u)}var x=s(n,[["render",p]]);export{v as __pageData,x as default};
