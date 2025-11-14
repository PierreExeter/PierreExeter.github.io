---
layout: post
title: Exploratory Data Analysis and Classification Predictions with Python
date: 2025-07-03 21:01:00
description: Developed a predictive model to identify factors influencing survival during the Titanic disaster. This project involved a complete machine learning workflow, from data cleaning and feature engineering to fitting a classifier.
tags: python scikit-learn machine-learning classification
categories:
thumbnail: assets/img/portfolio/titanic1.png
featured: false
---

## Code

{% include repository/repo.liquid repository='PierreExeter/data-science-projects/tree/main/1_titanic' %}

## Project

This project predicts the survival during the titanic disaster based on socio-economic passengers data. It is a supervised classification problem.

The projects features data cleaning, feature engineering, one-hot encoding, feature selection and classifier fitting. The best classifier is Random Forest, with a train accuracy of 0.98 and an F1-score of 0.98. The kaggle submission scores 0.77 on the test set.
