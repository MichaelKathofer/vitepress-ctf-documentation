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

5)	Changing the `cmarkgfm´ version to 0.6.0 in the config file fixed it.

6) ```bash
   python serve.py

  => This command to switches into debugging mode

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

3) Modify the 'docker-compose.yml' file to your liking. It includes options to name a existing Database URL.

4) Official documentation page suggested "docker-compose up". This lead to errors and the build failed.
   ```bash
   docker-compose up -d
::: info
Attaching the option **-d** to the **docker-compose up** statement runs the Docker Container in Detach Mode. That fixed the error.
:::

5) Setup is completed.
