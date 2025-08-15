---
layout: post
title: Customer Data Cleaning with SQL
date: 2025-05-18 21:01:00
description: Processed raw customer data using SQL by removing duplicates, handling missing values, standardizing formats, and splitting columns for better analysis. Ensured data integrity and prepared it for actionable insights.
tags: sql data-analysis
categories:
thumbnail: assets/img/customer_data_sql_img/Selection_012.png
featured: false
---

Data cleaning is the foundational step in any data analysis process. In this project, I cleaned customer data using SQL by removing duplicates, handling missing values, standardizing formats, and splitting columns for better usability.


## Code

{% include repository/repo.liquid repository='PierreExeter/SQL_projects' %}

## Create the database

```sql
DROP DATABASE IF EXISTS `customers`;
CREATE DATABASE `customers`;
USE `customers`;
```

## Create an empty table
```sql
CREATE TABLE customer_data (
`id` int,
`customer_id` int,
`phone` text,
`birth_date` text,
`address` text,
`total_money_spent` int,
`income` text,
`Are you over 18?` text,
`favorite_color` text,
PRIMARY KEY (id));
```

## Import the Data

- Using MySQL Workbench, go to Schemas tab > customers data base > Table > right click on customer_data. 
- Select 'Table Data Importation Wizard'
- Select customer_data.csv

Note that it's good practice to create a staging or back up table in case we make a mistake in the data cleaning process.


Let's look at the data.
```sql
SELECT * 
FROM customer_data;
```


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_000.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>


## 1. Drop the Duplicates

Let's check if there are any duplicates by counting the number of customer_id.


#### Method 1 : using COUNT
```sql
SELECT customer_id, COUNT(customer_id)
FROM customer_data
GROUP BY customer_id;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_001.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Then, we identify the duplicates by filtering the entries having more than 1 customer_id.
```sql
SELECT customer_id, COUNT(customer_id)
FROM customer_data
GROUP BY customer_id
HAVING COUNT(customer_id) > 1;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_002.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

#### Method 2 : using a window function
Let's check if there are any duplicates by partitioning by customer_id and adding row number.
```sql
SELECT customer_id,
ROW_NUMBER() OVER(PARTITION BY customer_id) AS row_num
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_003.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Then, we identify the duplicates by using the previous query as sub-query and filtering the row where the row_num > 1.
```sql
SELECT *
FROM (
	SELECT customer_id,
	ROW_NUMBER() OVER(PARTITION BY customer_id) AS row_num
	FROM customer_data) AS table_row
WHERE row_num > 1;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_004.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>
We then need to identify the id number of the row having more than 1 customer_id.
```sql
SELECT id
FROM (
	SELECT id,
	ROW_NUMBER() OVER(PARTITION BY customer_id) AS row_num
	FROM customer_data) AS table_row
WHERE row_num > 1;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_005.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>
Let's delete the duplicates by using the filtered id previously identified.
```sql
DELETE FROM customer_data
WHERE id IN (
	SELECT id
	FROM (
		SELECT id,
		ROW_NUMBER() OVER(PARTITION BY customer_id) AS row_num
		FROM customer_data) AS table_row
	WHERE row_num > 1);
```

NOTE : if the deletion didn't work in MySQL Workbench, go to Edit > Preferences... > SQL editor. At the bottom, uncheck the box 'Safe update'.


## 2. STANDARDIZE DATA

Let's remove unwanted characters in the phone numbers.
```sql
SELECT phone, REGEXP_REPLACE(phone, '[()-/+]', '') 
FROM customer_data;
```
<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_004.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Let's update the table with the clean phone numbers.
```sql
UPDATE customer_data
SET phone = REGEXP_REPLACE(phone, '[()-/+]', '') ;
```

Let's Format the phone numbers by adding a '-' at the right place except when the phone numbers are blank.
```sql
SELECT 
phone, 
CONCAT(
	SUBSTRING(phone, 1, 3), '-',
	SUBSTRING(phone, 4, 3), '-',
	SUBSTRING(phone, 7, 4)) 
FROM customer_data
WHERE phone != '';
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_005.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>
Let's update the phone numbers with the new format.
```sql
UPDATE customer_data
SET phone = CONCAT(
	SUBSTRING(phone, 1, 3), '-',
	SUBSTRING(phone, 4, 3), '-',
	SUBSTRING(phone, 7, 4))
WHERE phone != '';
```

Let's format the birthdate from text to date format.
```sql
SELECT 
birth_date, 
STR_TO_DATE(birth_date, '%m/%d/%Y'),
STR_TO_DATE(birth_date, '%Y/%d/%m')  
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_006.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

We notice that some dates are formatted in 2 different ways. We use a CASE statement to update the incorrect dates in their correct format order.
```sql
SELECT 
birth_date, 
CASE 
WHEN STR_TO_DATE(birth_date, '%m/%d/%Y') IS NOT NULL THEN STR_TO_DATE(birth_date, '%m/%d/%Y')
WHEN STR_TO_DATE(birth_date, '%m/%d/%Y') IS NULL THEN STR_TO_DATE(birth_date, '%Y/%d/%m')
END
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_007.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Note that we cannot use IF or CASE statements in the UPDATE function. We will use substrings to format the date. First, we format the dates that are in the incorrect format (id 9 and 11) with the following format : m/d/Y.
```sql
SELECT 
birth_date, CONCAT(
SUBSTRING(birth_date, 9, 2), '/',
SUBSTRING(birth_date, 6, 2), '/',
SUBSTRING(birth_date, 1, 4))
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_008.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

First, let's update the birthdate with id 9 and 11.
```sql
UPDATE customer_data
SET birth_date = CONCAT(
SUBSTRING(birth_date, 9, 2), '/',
SUBSTRING(birth_date, 6, 2), '/',
SUBSTRING(birth_date, 1, 4))
WHERE id IN (9, 11);
```

Now, all the dates are in the same format. We just need to convert them from a text to a date format.
```sql
UPDATE customer_data
SET birth_date = STR_TO_DATE(birth_date, '%m/%d/%Y');
```

Let's rename the column name `Are you over 18?` to get rid of the unwanted space.
```sql
ALTER TABLE customer_data RENAME COLUMN `Are you over 18?` TO `over_18`;
```

Let's format the over_18 column to only show Y and N using a CASE statement.
```sql
SELECT 
over_18, 
CASE 
	WHEN over_18 = 'Yes' THEN 'Y'
	WHEN over_18 = 'NO' THEN 'N'
	ELSE over_18
END
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_009.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Let's update over_18 column with the correct format.
```sql
UPDATE customer_data
SET over_18 = CASE 
	WHEN over_18 = 'Yes' THEN 'Y'
	WHEN over_18 = 'NO' THEN 'N'
	ELSE over_18
END;
```

Let's break out the address column into multiple columns. This makes more sense if we want to group by street, city or state in the future. We use SUBTRING_INDEX to identify the index of the comma delimiter in the address.
```sql
SELECT address, 
SUBSTRING_INDEX(address,',',1) AS Street,
SUBSTRING_INDEX(SUBSTRING_INDEX(address,',',2),',',-1) AS City,
SUBSTRING_INDEX(address,',',-1) AS State
FROM customer_data;
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_010.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

Let's create some empty street, city and state columns after the address column. They are strings data type of less than 50 characters.
```sql
ALTER TABLE customer_data
ADD COLUMN street VARCHAR(50) AFTER address,
ADD COLUMN city VARCHAR(50) AFTER street,
ADD COLUMN state VARCHAR(50) AFTER city;
```

Let's populate the empty street, city and state columns with the correct data.
```sql
UPDATE customer_data
SET street = SUBSTRING_INDEX(address,',',1);

UPDATE customer_data
SET city = SUBSTRING_INDEX(SUBSTRING_INDEX(address,',',2),',',-1);

UPDATE customer_data
SET state = SUBSTRING_INDEX(address,',',-1);
```

Let's trim the blank spaces around the state and city string.
```sql
UPDATE customer_data
SET state = TRIM(state);

UPDATE customer_data
SET city = TRIM(city);
```

Let's capitalize the state string.
```sql
UPDATE customer_data
SET state = UPPER(state);
```

Let's delete address column, as it is was broken down into other columns.
```sql
ALTER TABLE customer_data
DROP COLUMN address;
```

Let's also delete the favorite color column, as the information is not relevant.
```sql
ALTER TABLE customer_data
DROP COLUMN favorite_color;
```

Let's replace the blank values in phone and income columns with NULL. This makes sure that the future aggregate function calculations are not corrupted by the blank values.
```sql
UPDATE customer_data
SET phone = NULL
WHERE phone = '';

UPDATE customer_data
SET income = NULL
WHERE income = '';
```

Let's check if the customer declaring that they are over 18 are really over 18, by filtering the entries where 18 years from now is higher than their birthdate.
```sql
SELECT birth_date, over_18
FROM customer_data
WHERE (YEAR(NOW()) - 18) > YEAR(birth_date);
```

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_011.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
  </div>
</div>

We saw that 2 customers declaring being over 18. Let's update these 2 entries with 'N' and the rest of the entries with 'Y'.
```sql
UPDATE customer_data
SET over_18 = 'N'
WHERE (YEAR(NOW()) - 18) < YEAR(birth_date);

UPDATE customer_data
SET over_18 = 'Y'
WHERE (YEAR(NOW()) - 18) > YEAR(birth_date);
```

Let's look at the final cleaned up data.
```sql
SELECT * 
FROM customer_data;
```

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/customer_data_sql_img/Selection_012.png" title="SQL" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>



