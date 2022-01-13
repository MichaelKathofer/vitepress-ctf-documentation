![An image](/PluginsOverview_banner.png)
# Plugins
Plugins can extend the feature set of the basic CTFd framework. If functions that you plan on using aren't built-in,
there are two options:
## 1) use an already existing plugin

There are two main places to look for Plugins. The official CTFd page sells a few ones and then there is the option to look
into the GitHub community section. There are a few plugins openly available on GitHub, and some are only available as
paid versions. Here is an overview of all the plugins that are available for CTFd in the community repo: https://github.com/CTFd/plugins

The key is to widely cover the needed Todos with plugins that already exist before we start covering the rest with custom plugins.
The first aspect that is already covered within a community plugin is a multiple question plugin
### Multiple choice plugin
credits: https://github.com/tamuctf/CTFd-multi-question-plugin

The installation process should be simple: Just clone the repository into the /plugins folder

::: danger Error
File "/opt/CTFd/CTFd/plugins/CTFd-multi-question-plugin/__init__.py", line 1
from CTFd.plugins import register_plugin_assets_directory, challenges, keys
ImportError: cannot import name 'keys' from 'CTFd.plugins' "(/opt/CTFd/CTFd/plugins/__init__.py)"
:::

- Tried to update the plugin to fix compatibility issues with the current CTFd version.

- Error displays that it can't import 'keys'. It shows, that newer versions use 'get_flag_class' instead of 'get_key_class'.
  Couldn't fix the issue after hours.

#### Proposed solution
Due to an update of CTFd to a newer version, variables and structure changed. Therefore, the plugin is no longer working
at the newest version of CTFd and all try to quick-fix the plugin failed.

### Timer plugin
credits: https://github.com/alokmenghrajani/ctfd-timed-releases-plugin/tree/b5577c1a2e6b801d394d23dda808abbd68b46a7e

This is the closest to a time-limited question plugin there is after research. This leads to developing an own solution
due to the additional error, this plugin throws due to compatibility issues.
After researching more this was an occurring error and left us with the only option to develop our solutions for the
requested features

## 2) developing a new plugin
This section covers the documentation on How-to develop a plugin for CTFd. Due to the lack of in-depth documentation,
this process was quite a challenge. In this section, I will try to cover how to start programming a plugin

### Structure

``` js
CTFd
└── plugins
   └── CTFd-plugin
       ├── README.md          Classic ReadMe files with basic setup instructions
       ├── __init__.py        Main code
       ├── requirements.txt   Includes requirements that are not yet installed
       └── config.json        Plugin configuration file
```

### Development

After setting up the needed structure of the plugin, the code can be written in the __init__.py file.
The most essential thing that is needed in this file is the load function.

::: info
When then CTFd instance tries to load a plugin, it searches the for the load() function and executes it with itself
load(app) as a parameter.
:::

#### Adding routes
This section is also covered in the CTFd documentation.

``` py
from flask import render_template

def load(app):
    @app.route('/newPlugin', methods=['GET'])
    
```

#### Adding database tables

``` py
from CTFd.models import db

class Avatars(db.Model):
    id = db.Column(
        db.Integer,
        db.ForeignKey("challenges.id", ondelete="CASCADE"),
        primary_key=True
    )

    def __init__(self, *args, **kwargs):
        super(QuizChallengeModel, self).__init__(**kwargs)


def load(app):
    app.db.create_all()
    CHALLENGE_CLASSES["quiz"] = QuizChallenge
    register_plugin_assets_directory(
        app,
        base_path="/plugins/quiz_challenges/assets/"
    )
    
```
