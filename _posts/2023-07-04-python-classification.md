---
layout: post
title: Exploratory Data Analysis and Classification Predictions with Python
date: 2025-05-29 21:01:00
description: Developed a predictive model to identify factors influencing survival during the Titanic disaster. This project involved a complete machine learning workflow, from data cleaning and feature engineering to fitting a classifier.
tags: python scikit-learn machine-learning
categories:
thumbnail: assets/img/portfolio/regression2.png
featured: false
---


## Code

{% include repository/repo.liquid repository='PierreExeter/data-science-projects' %}


## Project

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Titanic.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Titanic.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
