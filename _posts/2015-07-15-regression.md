---
layout: post
title: Boston House Price Prediction
date: 2025-05-12 21:01:00
description: Engineered features and applied regression models (linear, ridge, lasso) to predict prices, addressing overfitting with regularization. Enhanced performance through EDA and ensemble techniques like Random Forest and Gradient Boosting.
tags: python scikit-learn regression supervised-learning
categories:
thumbnail: assets/img/portfolio/regression1.png
featured: false
---

I fitted regression models (linear, ridge, lasso) to predict house prices in the Boston area. I enhanced the models' performance through feature engineering and EDA, addressed overfitting with regularization, and applied ensemble techniques like Random Forest and Gradient Boosting.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Correlation matrix.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/regression2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Pair plots.
</div>

## Code

{% include repository/repo.liquid repository='PierreExeter/kaggle-house-prices' %}


