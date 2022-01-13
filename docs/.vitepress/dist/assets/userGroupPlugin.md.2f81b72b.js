import{_ as t,c as s,o as e,a as n,b as a}from"./app.6aa4d79c.js";var o="/UserGroupPlugin_banner.png";const $='{"title":"User Group Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Issue:","slug":"issue"}],"relativePath":"userGroupPlugin.md","lastUpdated":1642069774357}',c={},l=n("p",null,[n("img",{src:o,alt:"An image"})],-1),p=n("h1",{id:"user-group-plugin",tabindex:"-1"},[a("User Group Plugin "),n("a",{class:"header-anchor",href:"#user-group-plugin","aria-hidden":"true"},"#")],-1),i=n("p",null,'The CTFd platform has built-in USER and TEAM modes. The drawback of the integrated Team mode is, that once one person of the team completes a challenge, all team members get credit. When talking about classrooms, a Team that would resemble a class would all get credited when the first person finishes it, which is not beneficial. Therefore, my proposed solution was to use the Affiliation field in the database, which has no specific usage and utilise it as the classroom affiliation. On the other hand, there is the Admin User, which creates the challenges. The idea is to add a tag with "class=ABCXYZ". Then in the CHallenges view, we search for the affiliation of the user in the tags of the challenges.',-1),u=n("h2",{id:"issue",tabindex:"-1"},[a("Issue: "),n("a",{class:"header-anchor",href:"#issue","aria-hidden":"true"},"#")],-1),r=n("p",null,"No matter where I tried to implement the logic in the challenges.js file, the inner logic of the CTFd seems to overwrite it and it simply never affects the placement of the challenges. For example in CTFd>themes>vives-theme>assets>js>pages>challenges.js:",-1),h=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`const loadChal = id => {
  const chal = $.grep(challenges, chal => chal.id == id)[0];
  // try to get user affiliation

  if (chal.type === "hidden") {
    ezAlert({
      title: "Challenge Hidden!",
      body: "You haven't unlocked this challenge yet!",
      button: "Got it!"
    });
    return;
  }
  // new if condition to check if challange has any 'group' tag
  if ((chal.tags.includes("group="))){
    displayChal(chal);
  }
};
`)])],-1),g=n("p",null,"I identified no way to affect the loading of the challenges. Even if we try to limit loading only with challenges with a group tag and not specifically searching for group affiliation, this isn't working. further manipulating the loadChals() function didn't result in a change.",-1),k=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[a(`function loadChals() {
  return CTFd.api.get_challenge_list().then(function(response) {
    const categories = [];
    const $challenges_board = $("#challenges-board");
    challenges = response.data;

    if (window.BETA_sortChallenges) {
      challenges = window.BETA_sortChallenges(challenges);
    }

    $challenges_board.empty();

    for (let i = challenges.length - 1; i >= 0; i--) {
      if ($.inArray(challenges[i].category, categories) == -1) {
        
        const category = challenges[i].category;
        categories.push(category);

        const categoryid = category.replace(/ /g, "-").hashCode();
        const categoryrow = $(
          "" +
            '`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{0}-row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pt-5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`'.format(categoryid) +
            '`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("category-header col-md-12 mb-3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`' +
            "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`" +
            '`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("category-challenges col-md-12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`' +
            '`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("challenges-row col-md-12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`' +
            "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`" +
            "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`"
        );
        categoryrow
          .find(".category-header")
          .append($("`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a('" + category + "'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),a(`"));

        $challenges_board.append(categoryrow);
      }
    }

    for (let i = 0; i <= challenges.length - 1; i++) {
      const chalinfo = challenges[i];
      const chalid = chalinfo.name.replace(/ /g, "-").hashCode();
      const catid = chalinfo.category.replace(/ /g, "-").hashCode();
      const chalwrap = $(
        "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("{0}"),n("span",{class:"token punctuation"},"'")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("col-md-3 d-inline-block"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`".format(chalid)
      );
      let chalbutton;

      if (solves.indexOf(chalinfo.id) == -1) {
        
        `),n("span",{class:"token comment"},`<!-- Here is again happening a filtering through, if a challenge which fulfills
         th condition to be not solved, to habe a tag with group="" -->`),a(`
        
        if ((chal.tags.includes("group="))) {
            chalbutton = $(
            "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("btn btn-dark challenge-button w-100 text-truncate pt-3 pb-3 mb-2"),n("span",{class:"token punctuation"},"'")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("{0}"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),a(`".format(
            chalinfo.id
            )
            );
        }
        
      } else {
        chalbutton = $(
          "`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("btn btn-dark challenge-button solved-challenge w-100 text-truncate pt-3 pb-3 mb-2"),n("span",{class:"token punctuation"},"'")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("{0}"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("fas fa-check corner-button-check"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("i")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),a(`".format(
            chalinfo.id
          )
        );
      }

      const chalheader = $("`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("{0}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`".format(chalinfo.name));
      const chalscore = $("`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{0}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`".format(chalinfo.value));
      for (let j = 0; j < chalinfo.tags.length; j++) {
        const tag = "tag-" + chalinfo.tags[j].value.replace(/ /g, "-");
        chalwrap.addClass(tag);
      }

      chalbutton.append(chalheader);
      chalbutton.append(chalscore);
      chalwrap.append(chalbutton);

      $("#" + catid + "-row")
        .find(".category-challenges > .challenges-row")
        .append(chalwrap);
    }

    $(".challenge-button").click(function(_event) {
      loadChal(this.value);
    });
  });
}
`)])])],-1),d=n("p",null,"With the lack of documentation on CTFd and having no resources, this issue took me almost two weeks to give up on. I tried so many combinations and different filtering methods using, that documenting would become repetitive and not beneficial. The steps repeated themselves a lot and the result remained the same: The idea to form user groups in the CTF Vives is not working after the 4 Months on the project.",-1),f=[l,p,i,u,r,h,g,k,d];function m(v,b,w,_,y,C){return e(),s("div",null,f)}var q=t(c,[["render",m]]);export{$ as __pageData,q as default};
