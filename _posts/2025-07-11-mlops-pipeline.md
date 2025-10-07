---
layout: post
title: MLOps Pipeline Deployment
date: 2025-07-11 21:01:00
description: Deployed a machine learning model that predicts patient medical charges based on demographic and health data.
tags: python docker flask azure github-actions
categories:
thumbnail: assets/img/portfolio/insurance-app.png
featured: false
---


## Project

<p style="text-align:center;">
  <a href="https://insurance-predictions.azurewebsites.net/">VIEW DEPLOYED APP</a>
</p>


This project demonstrates a MLOps pipeline for deploying a machine learning model into a production-ready web application. The goal is to help an insurance company forecast patient charges using input like age, BMI, and smoking status.

The solution includes:
- A **machine learning** model trained to predict insurance charges
- A **Flask back-end** to serve predictions
- A **HTML / CSS front-end** for user input
- Containerization with **Docker**
- Cloud deployment on **Microsoft Azure**
- A CI/CD pipeline with **Github Actions**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/insurance-app.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

## Code

{% include repository/repo.liquid repository='PierreExeter/MLOps-Pipeline-Deployment' %}



