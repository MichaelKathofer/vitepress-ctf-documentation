![An image](/multipleChoicePlugin.png)
# Multiple Choice Plugin

## Structure

The needed Structure of a plugin is shown in the [Plugin](/plugins) section. This plugin's structure looks the following:
```html
plugins
└── assets
├── create.html
├── create.js
├── update.html
├── update.js
├── delete.html
└── delete.js
├── __init__.py
└── .gitignore
```

### Assets directory
The asset directory includes the following files.
```html
├── create.html
// HTML part for the admin view who wants to initially create the challenge
├── create.js
// JS part for the admin view who wants to initially create the challenge
├── update.html
// HTML part for the admin view who wants to update the challenge
├── update.js
// JS part for the admin view who wants to update the challenge
├── view.html
// HTML part that gets displayed to the user how opens the challenge
└── view.js
// JS part that gets displayed to the user how opens the challenge
```
## Create.html
```html
{% extends "admin/challenges/create.html" %}
```
With this line the template engine knows, that this builds on the create.html file from the admin base theme.
```html
{% block value %}
<div class="form-group">
    <label for="value">Value:<br>
        <small class="form-text text-muted">
            Enter in how many points should be rewarded:
        </small>
    </label>
    <input type="number" class="form-control" name="value" placeholder="Enter value" required>
</div>

<div class="form-group">
    <label for="value">Variant A:<br>
    </label>
    <input type="string" class="form-control" name="variant_a" placeholder="Variant A" required>
</div>
...

{% endblock %}
```
Important is to use the correct naming ("variant_a"). This needs to be the same as athe naming in the __init__.py file.
So once the input gets submitted, the model structures the date the correct way, so the API can receive the data correctly.

This procedure is the same for the update.html, and the view.html.
Waht is diffrent is the vie.js file:
```js
CTFd._internal.challenge.submit = function (preview) {

    /* Using DOM to get the information out of the radio buttons
       By adding .checked we recieve a boolean value and can then
       check if the richt variable has the value true for eeing checked.*/
    var challenge_id = parseInt(CTFd.lib.$('#challenge-id').val());
    var variant_a = document.getElementById('challenge-variant-a').checked;
    var variant_b = document.getElementById('challenge-variant-b').checked;
    var variant_c = document.getElementById('challenge-variant-c').checked;
    var variant_d = document.getElementById('challenge-variant-d').checked;


    var body = {
        'challenge_id': challenge_id,
        'variant_a': variant_a,
        'variant_b': variant_b,
        'variant_c': variant_c,
        'variant_d': variant_d,
    }
    var params = {}
    if (preview) {
        params['preview'] = true
    }
    /* Here we send a post request with the variable that has the value true.*/
    return CTFd.api.post_challenge_attempt(params, body).then(function (response) {
        if (response.status === 429) {
            // User was ratelimited but process response
            return response
        }
        if (response.status === 403) {
            // User is not logged in or CTF is paused.
            return response
        }
        return response
    });
```

## __init__.py file
### ChallengeModel
```html
class QuizChallengeModel(Challenges):

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
```
### Template, Scripts and Routs
```html
class QuizChallenge(BaseChallenge):
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
```
### Read-Methode
```html
@classmethod
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
```
### Try-Methode
```html
@classmethod
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
```
### Solve-Methode
```html
@classmethod
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
```
### Fail-Methode
```html
@classmethod
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
```

![An image](/quizchallenge.png)

