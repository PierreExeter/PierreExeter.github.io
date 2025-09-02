---
layout: post
title: Data Analysis and Regression Predictions with Python
date: 2025-05-30 21:01:00
description: Built a predictive model in Python to forecast residential home prices, applying machine learning with scikit-learn to solve a supervised regression problem.
tags: python scikit-learn predictive-modeling EDA
categories:
thumbnail: assets/img/portfolio/regression1.png
featured: false
---


## Code

{% include repository/repo.liquid repository='PierreExeter/data-science-projects' %}


## Project

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/House_prices.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/House_prices.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
