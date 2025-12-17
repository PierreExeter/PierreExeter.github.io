---
layout: post
title: Interactive Dashboard with Metabase
date: 2025-12-16 21:01:00
description: Built an interactive dashboard with Metabase to analyse journalist fatalities in the world.
tags: metabase docker data-analytics postgreSQL render
categories:
thumbnail: assets/img/portfolio/metabase/1.png
featured: false
---

<p style="text-align:center;">
  <a href="https://github.com/PierreExeter/journalist-fatalities-dashboard">VIEW CODE</a>
</p>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/3.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/4.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/5.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

## 🎯 Project Overview

An **interactive dashboard** showing global journalist fatalities from 1992-present, leveraging UNESCO's official dataset to uncover critical insights about press safety worldwide. This project demonstrates end-to-end data analytics capabilities from data sourcing to deployment.

**Key Achievement:** Transformed raw UNESCO data into an interactive dashboard serving journalists, researchers, and press freedom organizations with actionable insights about media safety trends.

## 📊 Key Findings & Insights

- The number of journalist fatalities is increasing over time since 1992.
- Most of the journalist killed are middle-aged.
- About 1/4 of the fatalities are in Asia and 1/4 in Latin America.
- Most of the journalist killed are males.
- Being in a conflict zone does not significantly increase the risk to get killed.
- The media most exposed to fatalities are print and TV.

## 🛠️ Technical Implementation

- **Database Architecture**: PostgreSQL
- **Interactive dashboard**: Metabase
- **ETL Pipeline**: Data processing workflows from CSV to production database
- **Cloud Deployment**: Containerized deployment on Render platform

## 🏗️ Project Architecture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/metabase/diagram.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
