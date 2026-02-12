---
layout: about
title: about
permalink: /
subtitle: AI Engineer

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info:
    # <p>555 your office number</p>
    # <p>123 your address street</p>
    # <p>Your City, State 12345</p>

selected_papers: false # true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

AI Engineer transitioning from academia, with proven expertise in developing autonomous **AI agents**, deploying **machine learning** models, and implementing **RAG-based systems**.

## Tech Stack

- **AI Engineering**

  - Agents Orchestration : [LangChain](https://www.langchain.com/) • [LlamaIndex](https://www.llamaindex.ai/)
  - LLM Inference : [HuggingFace](https://huggingface.co/) • [Ollama](https://ollama.com/)
  - Vector Database : [Chroma DB](https://www.trychroma.com/)
  - RAG systems<br />
    <br>

- **Machine Learning**

  - Predictive Modeling : [Scikit-learn](https://scikit-learn.org/) • [XGBoost](https://xgboost.ai/) • [Pytorch](https://pytorch.org/)
  - Reinforcement Learning : [Stable-Baselines3](https://stable-baselines3.readthedocs.io/)
  - Anomaly Detection
  - Evolutionary Optimisation<br />
    <br>

- **Software Engineering**

  - Programming : [Python](https://www.python.org/)
  - API : [FastAPI](https://fastapi.tiangolo.com/) • [Flask](https://flask.palletsprojects.com/en/stable/)
  - Databases : [PostgreSQL](https://www.postgresql.org/) • [DuckDB](https://duckdb.org/) • [SQLAlchemy](https://www.sqlalchemy.org/)
  - Agentic Coding : [Claude Code](https://claude.com/product/claude-code)
  - DevOps : [Git](https://git-scm.com/) • [Github Actions](https://github.com/features/actions) • [Docker](https://www.docker.com/) • [Pytest](https://pytest.org/) • [uv](https://docs.astral.sh/uv/) • [ruff](https://docs.astral.sh/ruff/) • [pyright](https://microsoft.github.io/pyright/#/)<br />
    <br>

- **Data Engineering**

  - Data Warehouse : [Snowflake](https://www.snowflake.com/)
  - Data Transformation : [dbt](https://www.getdbt.com/)
  - ETL Pipeline : [Airbyte](https://airbyte.com/)
  - Data Orchestration : [Airflow](https://airflow.apache.org/)
  - Cloud : [Azure](https://azure.microsoft.com/)<br />
    <br>

- **Data Analytics**
  - Data Cleaning : [Numpy](https://numpy.org/) • [Pandas](https://pandas.pydata.org/) • [Polars](https://pola.rs/)
  - Process Monitoring : [Grafana](https://grafana.com/) • [Prometheus](https://prometheus.io/)
  - Data Visualisation : [Tableau](https://www.tableau.com/) • [Metabase](https://www.metabase.com/) • [Streamlit](https://streamlit.io/) • [Plotly](https://plotly.com/)

<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.


OLD :
I specialise in applying machine learning methods to engineering problems. My research interests include :
- reinforcement learning for robotics
- anomaly detection for manufacturing processes
- evolutionary optimisation of numerical models
- machine learning and data science

I also maintain a blog on machine learning applications -- <a href="http://datasparked.com/">datasparked.com</a>.




Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
 -->

 <div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
  {% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | relative_url }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      
      <!-- comment by Pierre
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      -->
      <p class="post-tags">
      
      <!-- comment by Pierre
        <a href="{{ year | prepend: '/blog/' | relative_url }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
	-->

          {% if tags != "" %}

          <!-- comment by Pierre
          &nbsp; &middot; &nbsp;
          -->

            {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}

          {% if categories != "" %}
          &nbsp; &middot; &nbsp;
            {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}
    </p>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

# [CV](/cv)

# [portfolio](/portfolio)

# [publications](/publications)

# [blog](/blog)

# [outdoors](/outdoors)
