import{_ as a,c as n,o as s,a as e,b as t}from"./app.6aa4d79c.js";var o="/CTFdFramework_banner.png";const ne='{"title":"Flask","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is a web framework?","slug":"what-is-a-web-framework"},{"level":2,"title":"WSGI","slug":"wsgi"},{"level":2,"title":"Background story","slug":"background-story"},{"level":2,"title":"Jinja","slug":"jinja"},{"level":3,"title":"Example of the Jinja template engine","slug":"example-of-the-jinja-template-engine"},{"level":2,"title":"Flask more detailed","slug":"flask-more-detailed"},{"level":3,"title":"Routing","slug":"routing"},{"level":3,"title":"HTTP Methods (Get, Post)","slug":"http-methods-get-post"},{"level":3,"title":"Static Files","slug":"static-files"},{"level":3,"title":"Rendering Templates","slug":"rendering-templates"},{"level":2,"title":"Flask","slug":"flask-1"},{"level":2,"title":"Jinja","slug":"jinja-1"},{"level":2,"title":"Bootstrap","slug":"bootstrap-1"}],"relativePath":"ctfdframework.md","lastUpdated":1642064842540}',i={},l=e("p",null,[e("img",{src:o,alt:"An image"})],-1),r=e("h1",{id:"flask",tabindex:"-1"},[t("Flask "),e("a",{class:"header-anchor",href:"#flask","aria-hidden":"true"},"#")],-1),c=e("p",null,"Flask is a web framework for Python that consists of a small core, but is easy to extend. It is developed by Armin Ronacher and is based on the WSGI toolkit and the Jinja2 template engine. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. Applications that use the Flask framework are for example Pinterest and LinkedIn.",-1),p=e("h2",{id:"what-is-a-web-framework",tabindex:"-1"},[t("What is a web framework? "),e("a",{class:"header-anchor",href:"#what-is-a-web-framework","aria-hidden":"true"},"#")],-1),d=e("p",null,"In simple terms, a web framework is a collection of libraries and modules that enables a web application developer to write applications. The main advantage ist, that developers don't have to bother about low-level details such as protocols or thread management.",-1),h=e("h2",{id:"wsgi",tabindex:"-1"},[t("WSGI "),e("a",{class:"header-anchor",href:"#wsgi","aria-hidden":"true"},"#")],-1),u=e("p",null,"WSGI stands for Web Server Gateway Interface. It established itself as a standard for Python web application development. WSGI is a specification for a universal interface between the web server and the web applications.",-1),k=e("h2",{id:"background-story",tabindex:"-1"},[t("Background story "),e("a",{class:"header-anchor",href:"#background-story","aria-hidden":"true"},"#")],-1),f=e("p",null,"Flask was created by Armin Ronacher of Pocoo, an international group of Python enthusiasts formed in 2004. According to Ronacher, the idea was originally an April Fool's joke that was popular enough to make into a serious application. The name is a play on the earlier Bottle framework. When Ronacher and Georg Brandl created a bulletin board system written in Python in 2004, the Pocoo projects Werkzeug and Jinja were developed. In April 2016, the Pocoo team was disbanded and the development of Flask and related libraries was passed to the newly formed Pallets project. Flask has become popular among Python enthusiasts. As of October 2020, it has second-most stars on GitHub among Python web-development frameworks, only slightly behind Django, and was voted the most popular web framework in the Python Developers Survey 2018.",-1),m=e("h2",{id:"jinja",tabindex:"-1"},[t("Jinja "),e("a",{class:"header-anchor",href:"#jinja","aria-hidden":"true"},"#")],-1),g=e("p",null,"Jinja2 is a full-featured template engine for Python. It has full Unicode support, an optional integrated sandboxed execution environment, widely used and BSD licensed. Jinja2 is one of the most used template engines for Python. It is inspired by Django's templating system but extends it with an expressive language that gives template authors a more powerful set of tools. On top of that, it adds sandboxed execution and optional automatic escaping for applications where security is important.",-1),_=e("p",null,"It is internally based on Unicode and runs on a wide range of Python versions from 2.5 to current versions including Python 3.",-1),b=e("h3",{id:"example-of-the-jinja-template-engine",tabindex:"-1"},[t("Example of the Jinja template engine "),e("a",{class:"header-anchor",href:"#example-of-the-jinja-template-engine","aria-hidden":"true"},"#")],-1),w=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("span")]),t(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("challenge-connection-info"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
    {% block connection_info %}
        {% set conn = challenge.connection_info %}
        {% if not conn %}
        {% elif conn.startswith("http") %}
            {{ conn | urlize(target="_blank") }}
        {% else %}
            `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("code")]),e("span",{class:"token punctuation"},">")]),t("{{ conn }}"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("code")]),e("span",{class:"token punctuation"},">")]),t(`
        {% endif %}
    {% endblock %}
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("span")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),v=e("h2",{id:"flask-more-detailed",tabindex:"-1"},[t("Flask more detailed "),e("a",{class:"header-anchor",href:"#flask-more-detailed","aria-hidden":"true"},"#")],-1),y=e("p",null,"This section aims to provide an explanation for the most important syntax of flask",-1),j=e("h3",{id:"routing",tabindex:"-1"},[t("Routing "),e("a",{class:"header-anchor",href:"#routing","aria-hidden":"true"},"#")],-1),x=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[t("@app"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"route"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'/'"),e("span",{class:"token punctuation"},")"),t(`
def `),e("span",{class:"token function"},"index"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token operator"},":"),t(`
    `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token string"},"'Index Page'"),t(`

@app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"route"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'/FirstCTFdRoute'"),e("span",{class:"token punctuation"},")"),t(`
def `),e("span",{class:"token function"},"hello"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token operator"},":"),t(`
    `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token string"},"'Hello, this is the first CTFd page'"),t(`
`)])])],-1),P=e("h3",{id:"http-methods-get-post",tabindex:"-1"},[t("HTTP Methods (Get, Post) "),e("a",{class:"header-anchor",href:"#http-methods-get-post","aria-hidden":"true"},"#")],-1),F=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[t("@app"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"route"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'/login'"),e("span",{class:"token punctuation"},","),t(" methods"),e("span",{class:"token operator"},"="),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'GET'"),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token string"},"'POST'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),t(`
def `),e("span",{class:"token function"},"login"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token operator"},":"),t(`
    `),e("span",{class:"token keyword"},"if"),t(" request"),e("span",{class:"token punctuation"},"."),t("method "),e("span",{class:"token operator"},"=="),t(),e("span",{class:"token string"},"'POST'"),e("span",{class:"token operator"},":"),t(`
        `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token function"},"do_the_login"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(`
    `),e("span",{class:"token keyword"},"else"),e("span",{class:"token operator"},":"),t(`
        `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token function"},"show_the_login_form"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),S=e("h3",{id:"static-files",tabindex:"-1"},[t("Static Files "),e("a",{class:"header-anchor",href:"#static-files","aria-hidden":"true"},"#")],-1),I=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"url_for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'static'"),e("span",{class:"token punctuation"},","),t(" filename"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'style.css'"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),T=e("h3",{id:"rendering-templates",tabindex:"-1"},[t("Rendering Templates "),e("a",{class:"header-anchor",href:"#rendering-templates","aria-hidden":"true"},"#")],-1),J=e("p",null,"Flask makes usage of the template engine Jinja to avoid the complicated way over the native Python way. to render out a template you can call the method",-1),A=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"render_template"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),B=e("p",null,"This method needs the name of the template and the variables you want to pass to the template engine as keyword arguments:",-1),R=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[t("@app"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"route"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'/hello/<name>'"),e("span",{class:"token punctuation"},")"),t(`
def `),e("span",{class:"token function"},"hello"),e("span",{class:"token punctuation"},"("),t("name"),e("span",{class:"token operator"},"="),t("None"),e("span",{class:"token punctuation"},")"),e("span",{class:"token operator"},":"),t(`
    `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token function"},"render_template"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'hello.html'"),e("span",{class:"token punctuation"},","),t(" name"),e("span",{class:"token operator"},"="),t("name"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),G=e("h1",{id:"bootstrap",tabindex:"-1"},[t("Bootstrap "),e("a",{class:"header-anchor",href:"#bootstrap","aria-hidden":"true"},"#")],-1),W=e("p",null,"The CTFd platform makes usage of the Bootstrap Framework. It is used to quickly design and customize responsive mobile-first sites. It is the world\u2019s most popular front-end open-source toolkit that also features Sass variables and mixins, a responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. In order to use it, you can utilise npm to download it via the following command in your terminal:",-1),L=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"npm"),t(),e("span",{class:"token function"},"install"),t(` bootstrap
`)])])],-1),O=e("p",null,"#SQL Alchemy SQL Alchemy is a Python SQL toolkit and Object Relational Mapper, which gives application developers the full power and flexibility of SQL. SQL databases behave less like object collections the more size and performance start to matter. Object collections behave less like tables and rows the more abstraction starts to matter. SQLAlchemy aims to accommodate both of these principles.",-1),Q=e("p",null,"SQLAlchemy is most famous for its object-relational mapper (ORM), an optional component that provides the data mapper pattern, where classes can be mapped to the database in open-ended, multiple ways - allowing the object model and database schema to develop in a cleanly decoupled way from the beginning.",-1),D=e("h1",{id:"resources",tabindex:"-1"},[t("Resources "),e("a",{class:"header-anchor",href:"#resources","aria-hidden":"true"},"#")],-1),q=e("h2",{id:"flask-1",tabindex:"-1"},[t("Flask "),e("a",{class:"header-anchor",href:"#flask-1","aria-hidden":"true"},"#")],-1),z=e("h4",{id:"https-flask-palletsprojects-com-en-2-0-x",tabindex:"-1"},[e("a",{href:"https://flask.palletsprojects.com/en/2.0.x/",target:"_blank",rel:"noopener noreferrer"},"https://flask.palletsprojects.com/en/2.0.x/"),t(),e("a",{class:"header-anchor",href:"#https-flask-palletsprojects-com-en-2-0-x","aria-hidden":"true"},"#")],-1),C=e("h4",{id:"https-www-tutorialspoint-com-flask-flask-overview-htm",tabindex:"-1"},[e("a",{href:"https://www.tutorialspoint.com/flask/flask_overview.htm",target:"_blank",rel:"noopener noreferrer"},"https://www.tutorialspoint.com/flask/flask_overview.htm"),t(),e("a",{class:"header-anchor",href:"#https-www-tutorialspoint-com-flask-flask-overview-htm","aria-hidden":"true"},"#")],-1),E=e("h4",{id:"https-en-wikipedia-org-wiki-flask-web-framework",tabindex:"-1"},[e("a",{href:"https://en.wikipedia.org/wiki/Flask_(web_framework)",target:"_blank",rel:"noopener noreferrer"},"https://en.wikipedia.org/wiki/Flask_(web_framework)"),t(),e("a",{class:"header-anchor",href:"#https-en-wikipedia-org-wiki-flask-web-framework","aria-hidden":"true"},"#")],-1),H=e("h2",{id:"jinja-1",tabindex:"-1"},[t("Jinja "),e("a",{class:"header-anchor",href:"#jinja-1","aria-hidden":"true"},"#")],-1),M=e("h4",{id:"https-pypi-org-project-jinja2",tabindex:"-1"},[e("a",{href:"https://pypi.org/project/Jinja2/",target:"_blank",rel:"noopener noreferrer"},"https://pypi.org/project/Jinja2/"),t(),e("a",{class:"header-anchor",href:"#https-pypi-org-project-jinja2","aria-hidden":"true"},"#")],-1),$=e("h2",{id:"bootstrap-1",tabindex:"-1"},[t("Bootstrap "),e("a",{class:"header-anchor",href:"#bootstrap-1","aria-hidden":"true"},"#")],-1),N=e("h4",{id:"https-getbootstrap-com",tabindex:"-1"},[e("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},"https://getbootstrap.com/"),t(),e("a",{class:"header-anchor",href:"#https-getbootstrap-com","aria-hidden":"true"},"#")],-1),U=[l,r,c,p,d,h,u,k,f,m,g,_,b,w,v,y,j,x,P,F,S,I,T,J,A,B,R,G,W,L,O,Q,D,q,z,C,E,H,M,$,N];function V(K,X,Y,Z,ee,te){return s(),n("div",null,U)}var se=a(i,[["render",V]]);export{ne as __pageData,se as default};
