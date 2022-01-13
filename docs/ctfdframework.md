![An image](/CTFdFramework_banner.png)
# Flask

Flask is a web framework for Python that consists of a small core, but is easy to extend.
It is developed by Armin Ronacher and is based on the WSGI toolkit and the Jinja2 template engine.
It is classified as a microframework because it does not require particular tools or libraries.
It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries
provide common functions.
Applications that use the Flask framework are for example Pinterest and LinkedIn.

## What is a web framework?

In simple terms, a web framework is a collection of libraries and modules that enables a web application developer to
write applications. The main advantage ist, that developers don't have to bother about low-level details such as
protocols or thread management.

## WSGI

WSGI stands for Web Server Gateway Interface. It established itself as a standard for Python web application development.
WSGI is a specification for a universal interface between the web server and the web applications.

## Background story

Flask was created by Armin Ronacher of Pocoo, an international group of Python enthusiasts formed in 2004.
According to Ronacher, the idea was originally an April Fool's joke that was popular enough to make into a serious application.
The name is a play on the earlier Bottle framework. When Ronacher and Georg Brandl created a bulletin board system
written in Python in 2004, the Pocoo projects Werkzeug and Jinja were developed. In April 2016, the Pocoo team was
disbanded and the development of Flask and related libraries was passed to the newly formed Pallets project. Flask has become
popular among Python enthusiasts. As of October 2020, it has second-most stars on GitHub among Python web-development
frameworks, only slightly behind Django, and was voted the most popular web framework in the Python Developers Survey 2018.

## Jinja

Jinja2 is a full-featured template engine for Python. It has full Unicode support, an optional integrated sandboxed
execution environment, widely used and BSD licensed. Jinja2 is one of the most used template engines for Python.
It is inspired by Django's templating system but extends it with an expressive language that gives template authors
a more powerful set of tools. On top of that, it adds sandboxed execution and optional automatic escaping for
applications where security is important.

It is internally based on Unicode and runs on a wide range of Python versions from 2.5 to current versions
including Python 3.

### Example of the Jinja template engine
```html
<span class="challenge-connection-info">
    {% block connection_info %}
        {% set conn = challenge.connection_info %}
        {% if not conn %}
        {% elif conn.startswith("http") %}
            {{ conn | urlize(target="_blank") }}
        {% else %}
            <code>{{ conn }}</code>
        {% endif %}
    {% endblock %}
</span>
```

## Flask more detailed
This section aims to provide an explanation for the most important syntax of flask

### Routing

```js
@app.route('/')
def index():
    return 'Index Page'

@app.route('/FirstCTFdRoute')
def hello():
    return 'Hello, this is the first CTFd page'
```

### HTTP Methods (Get, Post)

```js
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```

### Static Files

```js
url_for('static', filename='style.css')
```

### Rendering Templates
Flask makes usage of the template engine Jinja to avoid the complicated way over the native Python way.
to render out a template you can call the method

```js
render_template()
```
This method needs the name of the template and the variables you want to pass to the template engine as keyword arguments:

```js
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
```

# Bootstrap
The CTFd platform makes usage of the Bootstrap Framework.
It is used to quickly design and customize responsive mobile-first sites. It is the world’s most popular
front-end open-source toolkit that also features Sass variables and mixins, a responsive grid system, extensive prebuilt components, and powerful
JavaScript plugins. In order to use it, you can utilise npm to download it via the following command in your terminal:

```bash
npm install bootstrap
```

#SQL Alchemy
SQL Alchemy is a Python SQL toolkit and Object Relational Mapper, which gives application developers the full power and
flexibility of SQL. SQL databases behave less like object collections the more size and performance start to matter.
Object collections behave less like tables and rows the more abstraction starts to matter. SQLAlchemy aims to accommodate
both of these principles.

SQLAlchemy is most famous for its object-relational mapper (ORM), an optional component that
provides the data mapper pattern, where classes can be mapped to the database in open-ended, multiple ways - allowing
the object model and database schema to develop in a cleanly decoupled way from the beginning.

# Resources
## Flask
#### https://flask.palletsprojects.com/en/2.0.x/
#### https://www.tutorialspoint.com/flask/flask_overview.htm
#### https://en.wikipedia.org/wiki/Flask_(web_framework)
## Jinja
#### https://pypi.org/project/Jinja2/
## Bootstrap
#### https://getbootstrap.com/
