---
layout: post
title: Classifier Visualisation
date: 2025-07-05 21:01:00
description: Developed an intuitive Python tool to train, evaluate, and visualize decision boundaries of multiple classifiers (SVM, Random Forest, Logistic Regression) on 2D datasets. Implemented hyperparameter tuning to optimize model performance while providing visual explanations of model behavior and trade-offs.
tags: python scikit-learn classification supervised-learning
categories:
thumbnail: assets/img/portfolio/classification1.png
featured: false
---

I developed an intuitive Python tool to train, evaluate, and visualize decision boundaries of multiple classifiers (SVM, Random Forest, Logistic Regression) on 2D datasets. I also implemented hyperparameter tuning to optimize model performance while providing visual explanations of model behavior and trade-offs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/classification1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    K-nearest neighbors classifier fitted on a 2D dataset.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/classification2.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Optimising the regularization parameter of the Support Vector Classifier.
</div>

## Code

{% include repository/repo.liquid repository='PierreExeter/classifier_visualizations' %}
