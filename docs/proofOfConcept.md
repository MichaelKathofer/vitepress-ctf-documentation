![An image](/ProofOfConcept_banner.png)
# Proof of Concept
## Installation documentation Step by Step

###     Solution 1
You can clone the repo, manually install its dependencies using pip on your server, and also configure MySQL and Redis databases manually.

1) Cloning git repository with
   ```bash
   git clone https://github.com/CTFd/CTFd.git

2) Opened the project in vs code

3) Opened a terminal in VS code

4) ```bash
   pip install -r requirements.txt

 ::: danger Error
ERROR: Could not find a version that satisfies the requirement cmarkgfm==0.5.0 (from versions: 0.1.0al, 0.1.0a2, 0.1.0, ...)
ERROR: No matching distribution found for cmarkgfm==0.5.0
:::

5) Changing the `cmarkgfm´ version to 0.6.0 in the config file fixed it.

6) ```bash
   python serve.py

  => This command switches into debugging mode

  ::: danger Error
  * Importing gevent and monkey patching. Use -disable-gevent to disable.
  Traceback (most recent call last) :
  File "serve.py"
  line 16, in module>
  from gevent import monkey
  ImportError: No module named gevent
  :::
7) ```bash
   sudo apt install python3-gevent
  => Then tried step 6) again.

### Solution 2
You can use the docker-compose.yml file present on the CTFd repo to conveniently deploy each component on your server in separate containers.

1) Install Docker and Docker Compose.
::: info
There is no need to download Docker Compose if you download the Desktop Application. It is already included in there.
:::

2) Cloning git repository with
   ```bash
   git clone https://github.com/CTFd/CTFd.git

3) Modify the 'docker-compose.yml' file to your liking. It includes options to name an existing Database URL.

4) Official documentation page suggested, "docker-compose up". This lead to errors and the build failed.
   ```bash
   docker-compose up -d
::: info
Attaching the option **-d** to the **docker-compose up** statement runs the Docker Container in Detach Mode. That fixed the error.
:::

5) Setup is completed.

## Explore existing Feature Set
After the correct setup and exploring the features that come out of the box, many of our [should haves](./#Introduction) are already implemented.
Furthermore, the CTFd platform provides additional plugins to solve further feature requests of some of the remaining form
the initial [feature request](./#Introduction) brainstorming session.
### Updated ToDo List after the initial setup
The following list is the result of a brainstorming session from our 3. weekly
Meeting. The following table documents in-depth feature requests and sums up the needed ToDo's for this project:

| Updated ToDo's                                              | Additional feature requests                                             |
| :---------------------------------------------------------- | :---------------------------------------------------------------------- |
| The possibility to form user groups (That resemble classes) | Question type: order a certain arrangement of words or information      |
| Better statics with deeper insights                         | Question type: hangman inspired                                         |
| Multiple questions within one challenge                     | Send grid for recovering passwords                                      |
| Custom theme for an enhanced visual experience              | Flags should work with regex                                            |
|                                                             | Input automatically formatted to lower cap for example                  |
|                                                             | Simpler setup-process for challenges (Setup possible within one screen) |
|                                                             | Additional input field to indicate the flag structure                   |

The Proof of Concept gave insights on open issues that need to be solved. The sum of those is displayed in the 'Updated ToDo's' table.
The next step is to sequentially implement these ToDo's.
