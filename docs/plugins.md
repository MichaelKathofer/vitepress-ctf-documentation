# Plugins
There are a few plugins openly available on GitHub, and some are only available as paid versions.
The key is to widely cover the needed Todos with plugins that already exist, before covering the rest with custom plugins.
Here is an overview of all the plugins that are available for CTFd: https://github.com/CTFd/plugins

## Multi-questions plugin
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

- ### Proposed solution
  Use the officially supported plugin from the CTFd-store:
  https://ctfd.io/store/
    - Use the plugin to form Collections of Challenges. The drawback is, that the initial Setup is not

## Theme + Styling
No resources about that. https://docs.ctfd.io/docs/settings/themes/
Therefore, I've downloaded an existing theme and tried to get familiar with structure and styling:
- Found a non-payment theme that is compatible with CTFd version 3.3.0: https://github.com/chainflag/ctfd-neon-theme
- Cloning neon-theme into '/themes' directory and started modifying and getting familiar.


## Flag indication

Displaying indicators to give a hint on how long the entered Flag should be:  _ _ _ _ _
- Started with experimenting with how to get the needed data at the specific field





