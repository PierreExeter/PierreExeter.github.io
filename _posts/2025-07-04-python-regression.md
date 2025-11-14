---
layout: post
title: Data Analysis and Regression Predictions with Python
date: 2025-07-04 21:01:00
description: Built a predictive model in Python to forecast residential home prices, applying machine learning with scikit-learn to solve a supervised regression problem.
tags: python scikit-learn predictive-modelling EDA regression
categories:
thumbnail: assets/img/portfolio/regression1.png
featured: false
---

## Code

{% include repository/repo.liquid repository='PierreExeter/data-science-projects/tree/main/2_house_prices' %}

## Project

The goal of this project is to predict the sales price of residential homes in Ames, Iowa, USA based on various house characteristics. It is a supervised regression problem.

The project features exploratory data analysis, data cleaning (handling outliers and missing values), feature engineering, target encoding, feature selection and model validation, hyperparameter tuning and regularization. The best regression model is Gradient Boosting, with a Root Mean Square Error of 0.12 on the train set.

A Streamlit app is provided for performing exploratory data analysis.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression3.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression4.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression5.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
