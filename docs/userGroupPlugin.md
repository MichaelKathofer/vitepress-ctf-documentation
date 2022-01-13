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
For example in CTFd>themes>vives-theme>assets>js>pages>challenges.js:

```html
const loadChal = id => {
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
```
I identified no way to affect the loading of the challenges. Even if we try to limit loading only with challenges with a
group tag and not specifically searching for group affiliation, this isn't working.
further manipulating the loadChals() function didn't result in a change.

```html
function loadChals() {
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
            '<div id="{0}-row" class="pt-5">'.format(categoryid) +
            '<div class="category-header col-md-12 mb-3">' +
            "</div>" +
            '<div class="category-challenges col-md-12">' +
            '<div class="challenges-row col-md-12"></div>' +
            "</div>" +
            "</div>"
        );
        categoryrow
          .find(".category-header")
          .append($("<h3>" + category + "</h3>"));

        $challenges_board.append(categoryrow);
      }
    }

    for (let i = 0; i <= challenges.length - 1; i++) {
      const chalinfo = challenges[i];
      const chalid = chalinfo.name.replace(/ /g, "-").hashCode();
      const catid = chalinfo.category.replace(/ /g, "-").hashCode();
      const chalwrap = $(
        "<div id='{0}' class='col-md-3 d-inline-block'></div>".format(chalid)
      );
      let chalbutton;

      if (solves.indexOf(chalinfo.id) == -1) {
        
        <!-- Here is again happening a filtering through, if a challenge which fulfills
         th condition to be not solved, to habe a tag with group="" -->
        
        if ((chal.tags.includes("group="))) {
            chalbutton = $(
            "<button class='btn btn-dark challenge-button w-100 text-truncate pt-3 pb-3 mb-2' value='{0}'></button>".format(
            chalinfo.id
            )
            );
        }
        
      } else {
        chalbutton = $(
          "<button class='btn btn-dark challenge-button solved-challenge w-100 text-truncate pt-3 pb-3 mb-2' value='{0}'><i class='fas fa-check corner-button-check'></i></button>".format(
            chalinfo.id
          )
        );
      }

      const chalheader = $("<p>{0}</p>".format(chalinfo.name));
      const chalscore = $("<span>{0}</span>".format(chalinfo.value));
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
```

With the lack of documentation on CTFd and having no resources, this issue took me almost two weeks to give up on.
I tried so many combinations and different filtering methods using, that documenting would become repetitive and not beneficial.
The steps repeated themselves a lot and the result remained the same: The idea to form user groups in the CTF Vives is not working after
the 4 Months on the project.

