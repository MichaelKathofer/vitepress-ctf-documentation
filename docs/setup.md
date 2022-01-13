![An image](/Setup_banner.png)
# Set up

## With cloning the VIVES CTFd Plattform Github
1) Cole the GitHub repository from here: https://github.com/MichaelKathofer/CTF-Project-Vives-main
2) use docker: docker-compose up
3) Start with the Set-up instructions: Important points are 1) User mode 2) adding the logo from Vives
   -> Logo available in "CTFd>public/contentForPages": "Logo.png" + "small_icon.png"
   ![An image](/setup4.png)

![An image](/setup1.png)

Upload these logos in the admin panel -> config -> Theme. Don't forget to press the blue upload button directly next to
the upload field!

4) Then add black as the base Theme Color
5) Theme Header paste the following code:
``` html
        <style id="theme-color">
        :root {--theme-color: #000000;}
        .navbar{background-color: var(--theme-color) !important;}
        .jumbotron{background-color: var(--theme-color) !important;}
    </style>
```
![An image](/setup2.png)
6) If these files are not created, create these files with the exact specification

   a)  Index (route:"index"; - ; - ; published)

   b)  _Imprint (route:"imprint"; - ; hidden ; published)

   c)  Admin Tutorial (route:"admin/tutorial"; required ; hidden ; published)

   d)  User Tutorial (route:"tutorial"; - ; hidden ; published)

7) Next, post the HTML content from the files available in the folder in your code editor: "CTFd>public/contentForPages" with the same name in the Content section.
   The content for the files are located under "CTFd>public/contentForPages"
   ![An image](/setup4.png)
   For example, we open the file index.html from the folder and copy the code. Then we go Into the admin/pages and
   click on the Index page. Then we paste the HTML content into the "content" section:
   ![An image](/setup3.png)
   
This step in other words: 
a) Paste the content from index.html from your code editor into the content section of the index
page in CTFd.
b) Paste the content from imprint.html from your code editor into the content section of the imprint
page in CTFd.
c) Paste the content from AdminTutorial.html from your code editor into the content section of the Admin Tutorial
page in CTFd.
d) Paste the content from UserTutorial.html from your code editor into the content section of the User Tutorial
page in CTFd.

This process should get repeated until the content from the provided files is pasted in the pages created in the CTFd instance.

8) With this step the basic setup is completed