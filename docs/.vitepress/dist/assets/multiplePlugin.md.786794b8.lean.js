import{_ as t,c as e,o as s,a as n,b as a}from"./app.6aa4d79c.js";var l="/multipleChoicePlugin.png",o="/quizchallenge.png";const L='{"title":"Multiple Choice Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Structure","slug":"structure"},{"level":3,"title":"Assets directory","slug":"assets-directory"},{"level":2,"title":"Create.html","slug":"create-html"},{"level":2,"title":"_init_.py file","slug":"init-py-file"},{"level":3,"title":"ChallengeModel","slug":"challengemodel"},{"level":3,"title":"Template, Scripts and Routs","slug":"template-scripts-and-routs"},{"level":3,"title":"Read-Methode","slug":"read-methode"},{"level":3,"title":"Try-Methode","slug":"try-methode"},{"level":3,"title":"Solve-Methode","slug":"solve-methode"},{"level":3,"title":"Fail-Methode","slug":"fail-methode"}],"relativePath":"multiplePlugin.md","lastUpdated":1642064947867}',c={},i=n("p",null,[n("img",{src:l,alt:"An image"})],-1),p=n("h1",{id:"multiple-choice-plugin",tabindex:"-1"},[a("Multiple Choice Plugin "),n("a",{class:"header-anchor",href:"#multiple-choice-plugin","aria-hidden":"true"},"#")],-1),u=n("h2",{id:"structure",tabindex:"-1"},[a("Structure "),n("a",{class:"header-anchor",href:"#structure","aria-hidden":"true"},"#")],-1),r=n("p",null,[a("The needed Structure of a plugin is shown in the "),n("a",{href:"/plugins.html"},"Plugin"),a(" section. This plugin's structure looks the following:")],-1),d=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`plugins
\u2514\u2500\u2500 assets
\u251C\u2500\u2500 create.html
\u251C\u2500\u2500 create.js
\u251C\u2500\u2500 update.html
\u251C\u2500\u2500 update.js
\u251C\u2500\u2500 delete.html
\u2514\u2500\u2500 delete.js
\u251C\u2500\u2500 __init__.py
\u2514\u2500\u2500 .gitignore
`)])],-1),h=n("h3",{id:"assets-directory",tabindex:"-1"},[a("Assets directory "),n("a",{class:"header-anchor",href:"#assets-directory","aria-hidden":"true"},"#")],-1),k=n("p",null,"The asset directory includes the following files.",-1),g=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`\u251C\u2500\u2500 create.html
// HTML part for the admin view who wants to initially create the challenge
\u251C\u2500\u2500 create.js
// JS part for the admin view who wants to initially create the challenge
\u251C\u2500\u2500 update.html
// HTML part for the admin view who wants to update the challenge
\u251C\u2500\u2500 update.js
// JS part for the admin view who wants to update the challenge
\u251C\u2500\u2500 view.html
// HTML part that gets displayed to the user how opens the challenge
\u2514\u2500\u2500 view.js
// JS part that gets displayed to the user how opens the challenge
`)])],-1),m=n("h2",{id:"create-html",tabindex:"-1"},[a("Create.html "),n("a",{class:"header-anchor",href:"#create-html","aria-hidden":"true"},"#")],-1),_=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`{% extends "admin/challenges/create.html" %}
`)])],-1),v=n("p",null,"With this line the template engine knows, that this builds on the create.html file from the admin base theme.",-1),f=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[a(`{% block value %}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-group"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Value:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("small")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-text text-muted"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            Enter in how many points should be rewarded:
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("small")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("number"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-control"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Enter value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-group"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Variant A:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("string"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-control"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("variant_a"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Variant A"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
...

{% endblock %}
`)])])],-1),b=n("p",null,[a('Important is to use the correct naming ("variant_a"). This needs to be the same as athe naming in the '),n("strong",null,"init"),a(".py file. So once the input gets submitted, the model structures the date the correct way, so the API can receive the data correctly.")],-1),y=n("p",null,"This procedure is the same for the update.html, and the view.html. Waht is diffrent is the vie.js file:",-1),w=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[a("CTFd"),n("span",{class:"token punctuation"},"."),a("_internal"),n("span",{class:"token punctuation"},"."),a("challenge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"submit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"preview"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

    `),n("span",{class:"token comment"},`/* Using DOM to get the information out of the radio buttons
       By adding .checked we recieve a boolean value and can then
       check if the richt variable has the value true for eeing checked.*/`),a(`
    `),n("span",{class:"token keyword"},"var"),a(" challenge_id "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),a("CTFd"),n("span",{class:"token punctuation"},"."),a("lib"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#challenge-id'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"var"),a(" variant_a "),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'challenge-variant-a'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("checked"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"var"),a(" variant_b "),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'challenge-variant-b'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("checked"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"var"),a(" variant_c "),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'challenge-variant-c'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("checked"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"var"),a(" variant_d "),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'challenge-variant-d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("checked"),n("span",{class:"token punctuation"},";"),a(`


    `),n("span",{class:"token keyword"},"var"),a(" body "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string"},"'challenge_id'"),n("span",{class:"token operator"},":"),a(" challenge_id"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string"},"'variant_a'"),n("span",{class:"token operator"},":"),a(" variant_a"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string"},"'variant_b'"),n("span",{class:"token operator"},":"),a(" variant_b"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string"},"'variant_c'"),n("span",{class:"token operator"},":"),a(" variant_c"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string"},"'variant_d'"),n("span",{class:"token operator"},":"),a(" variant_d"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"var"),a(" params "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("preview"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        params`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'preview'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token comment"},"/* Here we send a post request with the variable that has the value true.*/"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" CTFd"),n("span",{class:"token punctuation"},"."),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post_challenge_attempt"),n("span",{class:"token punctuation"},"("),a("params"),n("span",{class:"token punctuation"},","),a(" body"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("response"),n("span",{class:"token punctuation"},"."),a("status "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"429"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token comment"},"// User was ratelimited but process response"),a(`
            `),n("span",{class:"token keyword"},"return"),a(` response
        `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("response"),n("span",{class:"token punctuation"},"."),a("status "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"403"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token comment"},"// User is not logged in or CTF is paused."),a(`
            `),n("span",{class:"token keyword"},"return"),a(` response
        `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token keyword"},"return"),a(` response
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),q=n("h2",{id:"init-py-file",tabindex:"-1"},[n("strong",null,"init"),a(".py file "),n("a",{class:"header-anchor",href:"#init-py-file","aria-hidden":"true"},"#")],-1),x=n("h3",{id:"challengemodel",tabindex:"-1"},[a("ChallengeModel "),n("a",{class:"header-anchor",href:"#challengemodel","aria-hidden":"true"},"#")],-1),C=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`class QuizChallengeModel(Challenges):

__mapper_args__ = {"polymorphic_identity": "quiz"}

id = db.Column(
db.Integer,
db.ForeignKey("challenges.id", ondelete="CASCADE"),
primary_key=True
)

variant_a = db.Column(db.String(100), default="")
variant_b = db.Column(db.String(100), default="")
variant_c = db.Column(db.String(100), default="")
variant_d = db.Column(db.String(100), default="")

correct_variant = db.Column(db.String(1), default="A")

def __init__(self, *args, **kwargs):
super(QuizChallengeModel, self).__init__(**kwargs)
`)])],-1),T=n("h3",{id:"template-scripts-and-routs",tabindex:"-1"},[a("Template, Scripts and Routs "),n("a",{class:"header-anchor",href:"#template-scripts-and-routs","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`class QuizChallenge(BaseChallenge):
id = "quiz" # Unique identifier used to register challenges
name = "quiz" # Name of a challenge type
templates = { # Handlebars templates used for each aspect of challenge editing & viewing
"create": "/plugins/quiz_challenges/assets/create.html",
"update": "/plugins/quiz_challenges/assets/update.html",
"view": "/plugins/quiz_challenges/assets/view.html",
}

scripts = { # Scripts that are loaded when a template is loaded
"create": "/plugins/quiz_challenges/assets/create.js",
"update": "/plugins/quiz_challenges/assets/update.js",
"view": "/plugins/quiz_challenges/assets/view.js",
}

route = "/plugins/quiz_challenges/assets/" # Route at which files are accessible. This must be registered using register_plugin_assets_directory()
blueprint = Blueprint(    # Blueprint used to access the static_folder directory.
"quiz_challenges",
__name__,
template_folder="templates",
static_folder="assets",
)

challenge_model = QuizChallengeModel
`)])],-1),S=n("h3",{id:"read-methode",tabindex:"-1"},[a("Read-Methode "),n("a",{class:"header-anchor",href:"#read-methode","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`@classmethod
def read(cls, challenge):
"""
This method is in used to access the data of a challenge in a format processable by the front end.

:param challenge:
:return: Challenge object, data dictionary to be returned to the user
"""

challenge = QuizChallengeModel.query.filter_by(id=challenge.id).first()
data = {
"id": challenge.id,
"name": challenge.name,
"value": challenge.value,
"description": challenge.description,
"category": challenge.category,
"state": challenge.state,
"max_attempts": challenge.max_attempts,
"type": challenge.type,
"type_data": {
"id": cls.id,
"name": cls.name,
"templates": cls.templates,
"scripts": cls.scripts,
},
"variant_a": challenge.variant_a,
"variant_b": challenge.variant_b,
"variant_c": challenge.variant_c,
"variant_d": challenge.variant_d,
"correct_variant": challenge.correct_variant,
}
return data
`)])],-1),z=n("h3",{id:"try-methode",tabindex:"-1"},[a("Try-Methode "),n("a",{class:"header-anchor",href:"#try-methode","aria-hidden":"true"},"#")],-1),B=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`@classmethod
def attempt(cls, challenge, request):
"""
This method is used to update the information associated with a challenge. This should be kept strictly to the
Challenges table and any child tables.

:param challenge:
:param request:
:return:
"""

data = request.form or request.get_json()
try:
variant = next(filter(lambda x: data[x] is True, filter(lambda x: x.startswith("variant"), data.keys())))
correct = (challenge.correct_variant == variant[-1].upper())
except:
correct = False
return correct, "Correct" if correct else "Incorrect"
`)])],-1),A=n("h3",{id:"solve-methode",tabindex:"-1"},[a("Solve-Methode "),n("a",{class:"header-anchor",href:"#solve-methode","aria-hidden":"true"},"#")],-1),F=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`@classmethod
def solve(cls, user, team, challenge, request):
data = request.form or request.get_json()
provided = ",".join(
map(
lambda x: x.split("_")[-1].upper(),
filter(lambda x: data[x] is True, data)
)
)

solve = Solves(
user_id=user.id,
team_id=team.id
if team
else None,
challenge_id=challenge.id,
ip=get_ip(req=request),
provided=provided,
)
db.session.add(solve)
db.session.commit()
`)])],-1),I=n("h3",{id:"fail-methode",tabindex:"-1"},[a("Fail-Methode "),n("a",{class:"header-anchor",href:"#fail-methode","aria-hidden":"true"},"#")],-1),E=n("div",{class:"language-html"},[n("pre",null,[n("code",null,`@classmethod
def fail(cls, user, team, challenge, request):
data = request.form or request.get_json()
provided = ",".join(
map(
lambda x: x.split("_")[-1].upper(),
filter(lambda x: data[x] is True, data)
)
)
fail = Fails(
user_id=user.id,
team_id=team.id if team else None,
challenge_id=challenge.id,
ip=get_ip(request),
provided=provided,
)
db.session.add(fail)
db.session.commit()
`)])],-1),P=n("p",null,[n("img",{src:o,alt:"An image"})],-1),H=[i,p,u,r,d,h,k,g,m,_,v,f,b,y,w,q,x,C,T,M,S,j,z,B,A,F,I,E,P];function N(Q,R,U,V,$,D){return s(),e("div",null,H)}var W=t(c,[["render",N]]);export{L as __pageData,W as default};
