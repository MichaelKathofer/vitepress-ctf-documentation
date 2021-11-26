import{_ as a,c as e,o as n,d as t}from"./app.31e8653d.js";const m='{"title":"Flask","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is a web framework?","slug":"what-is-a-web-framework"},{"level":2,"title":"WSGI","slug":"wsgi"},{"level":2,"title":"Background story","slug":"background-story"},{"level":2,"title":"Jinja","slug":"jinja"},{"level":3,"title":"Example of the Jinja template engine","slug":"example-of-the-jinja-template-engine"},{"level":2,"title":"Flask more detailed","slug":"flask-more-detailed"},{"level":3,"title":"Routing","slug":"routing"},{"level":3,"title":"HTTP Methods (Get, Post)","slug":"http-methods-get-post"},{"level":3,"title":"Static Files","slug":"static-files"},{"level":3,"title":"Rendering Templates","slug":"rendering-templates"},{"level":2,"title":"Flask","slug":"flask-1"},{"level":2,"title":"Jinja","slug":"jinja-1"},{"level":2,"title":"Bootstrap","slug":"bootstrap-1"}],"relativePath":"ctfdframework.md","lastUpdated":1637912307983}',s={},o=t(`<h1 id="flask" tabindex="-1">Flask <a class="header-anchor" href="#flask" aria-hidden="true">#</a></h1><p>Flask is a web framework for Python that consists of a small core, but is easy to extend. It is developed by Armin Ronacher and is based on the WSGI toolkit and the Jinja2 template engine. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. Applications that use the Flask framework are for example Pinterest and LinkedIn.</p><h2 id="what-is-a-web-framework" tabindex="-1">What is a web framework? <a class="header-anchor" href="#what-is-a-web-framework" aria-hidden="true">#</a></h2><p>In simple terms, a web framework is a collection of libraries and modules that enables a web application developer to write applications. The main advantage ist, that developers don&#39;t have to bother about low-level details such as protocols or thread management.</p><h2 id="wsgi" tabindex="-1">WSGI <a class="header-anchor" href="#wsgi" aria-hidden="true">#</a></h2><p>WSGI stands for Web Server Gateway Interface. It established itself as standard for Python web application development. WSGI is a specification for a universal interface between the web server and the web applications.</p><h2 id="background-story" tabindex="-1">Background story <a class="header-anchor" href="#background-story" aria-hidden="true">#</a></h2><p>Flask was created by Armin Ronacher of Pocoo, an international group of Python enthusiasts formed in 2004. According to Ronacher, the idea was originally an April Fool&#39;s joke that was popular enough to make into a serious application. The name is a play on the earlier Bottle framework. When Ronacher and Georg Brandl created a bulletin board system written in Python in 2004, the Pocoo projects Werkzeug and Jinja were developed. In April 2016, the Pocoo team was disbanded and development of Flask and related libraries passed to the newly formed Pallets project. Flask has become popular among Python enthusiasts. As of October 2020, it has second most stars on GitHub among Python web-development frameworks, only slightly behind Django, and was voted the most popular web framework in the Python Developers Survey 2018.</p><h2 id="jinja" tabindex="-1">Jinja <a class="header-anchor" href="#jinja" aria-hidden="true">#</a></h2><p>Jinja2 is a full-featured template engine for Python. It has full unicode support, an optional integrated sandboxed execution environment, widely used and BSD licensed. Jinja2 is one of the most used template engines for Python. It is inspired by Django&#39;s templating system but extends it with an expressive language that gives template authors a more powerful set of tools. On top of that it adds sandboxed execution and optional automatic escaping for applications where security is important.</p><p>It is internally based on Unicode and runs on a wide range of Python versions from 2.5 to current versions including Python 3.</p><h3 id="example-of-the-jinja-template-engine" tabindex="-1">Example of the Jinja template engine <a class="header-anchor" href="#example-of-the-jinja-template-engine" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>challenge-connection-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {% block connection_info %}
        {% set conn = challenge.connection_info %}
        {% if not conn %}
        {% elif conn.startswith(&quot;http&quot;) %}
            {{ conn | urlize(target=&quot;_blank&quot;) }}
        {% else %}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>{{ conn }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
        {% endif %}
    {% endblock %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="flask-more-detailed" tabindex="-1">Flask more detailed <a class="header-anchor" href="#flask-more-detailed" aria-hidden="true">#</a></h2><p>This section aims to provide explanation for the most important syntax of flask</p><h3 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>@app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
def <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Index Page&#39;</span>

@app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/FirstCTFdRoute&#39;</span><span class="token punctuation">)</span>
def <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, this is the first CTFd page&#39;</span>
</code></pre></div><h3 id="http-methods-get-post" tabindex="-1">HTTP Methods (Get, Post) <a class="header-anchor" href="#http-methods-get-post" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>@app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
def <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">do_the_login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token function">show_the_login_form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="static-files" tabindex="-1">Static Files <a class="header-anchor" href="#static-files" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">url_for</span><span class="token punctuation">(</span><span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span> filename<span class="token operator">=</span><span class="token string">&#39;style.css&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="rendering-templates" tabindex="-1">Rendering Templates <a class="header-anchor" href="#rendering-templates" aria-hidden="true">#</a></h3><p>Flask makes usage of the template engine Jinja to avoid the complicated way over the native Python way. to render out a template you can call the methode</p><div class="language-js"><pre><code><span class="token function">render_template</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>This methode needs the name of the template and the variables you want to pass to the template engine as keyword arguments:</p><div class="language-js"><pre><code>@app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/hello/&lt;name&gt;&#39;</span><span class="token punctuation">)</span>
def <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token operator">=</span>None<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token function">render_template</span><span class="token punctuation">(</span><span class="token string">&#39;hello.html&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span>name<span class="token punctuation">)</span>
</code></pre></div><h1 id="bootstrap" tabindex="-1">Bootstrap <a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a></h1><p>The CTFd plattform makes usage of the Bootstrap Framework. It is used to quickly design and customize responsive mobile-first sites. It is the world\u2019s most popular front-end open source toolkit that also featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. In order to use it, you can utalise npm to download it via the following command in your terminal:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> bootstrap
</code></pre></div><p>#SQL Alchemy SQL Alchemy is a Python SQL toolkit and Object Relational Mapper, wich gives application developers the full power and flexibility of SQL. SQL databases behave less like object collections the more size and performance start to matter. Object collections behave less like tables and rows the more abstraction starts to matter. SQLAlchemy aims to accommodate both of these principles.</p><p>SQLAlchemy is most famous for its object-relational mapper (ORM), an optional component that provides the data mapper pattern, where classes can be mapped to the database in open ended, multiple ways - allowing the object model and database schema to develop in a cleanly decoupled way from the beginning.</p><h1 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h1><h2 id="flask-1" tabindex="-1">Flask <a class="header-anchor" href="#flask-1" aria-hidden="true">#</a></h2><p><a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noopener noreferrer">https://flask.palletsprojects.com/en/2.0.x/</a><a href="https://www.tutorialspoint.com/flask/flask_overview.htm" target="_blank" rel="noopener noreferrer">https://www.tutorialspoint.com/flask/flask_overview.htm</a><a href="https://en.wikipedia.org/wiki/Flask_(web_framework)" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Flask_(web_framework)</a></p><h2 id="jinja-1" tabindex="-1">Jinja <a class="header-anchor" href="#jinja-1" aria-hidden="true">#</a></h2><p><a href="https://pypi.org/project/Jinja2/" target="_blank" rel="noopener noreferrer">https://pypi.org/project/Jinja2/</a></p><h2 id="bootstrap-1" tabindex="-1">Bootstrap <a class="header-anchor" href="#bootstrap-1" aria-hidden="true">#</a></h2><p><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">https://getbootstrap.com/</a></p>`,38),p=[o];function i(r,l,c,d,h,u){return n(),e("div",null,p)}var f=a(s,[["render",i]]);export{m as __pageData,f as default};
