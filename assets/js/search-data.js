// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-portfolio",
          title: "portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "My personal blog",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/www.datasparked.com/";
          },
        },{id: "nav-outdoors",
          title: "outdoors",
          description: "Aside from work, I find fulfillment in outdoor adventures, international volunteering and personal development courses—experiences that challenge me while contributing to meaningful causes. From 2021 to 2025, I dedicated most of my time to the following projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outdoors/";
          },
        },{id: "post-rag-powered-textbook-assistant",
        
          title: "RAG-Powered Textbook Assistant",
        
        description: "Built a RAG-based AI tutor for textbooks. Ingests PDF or web sources into ChromaDB, answers questions via LlamaIndex.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/textbook-ai-tutor/";
          
        },
      },{id: "post-ai-powered-email-and-calendar-assistant",
        
          title: "AI-Powered Email and Calendar Assistant",
        
        description: "Built an AI-powered email and calendar assistant that manages Gmail inbox and Google Calendar. Built with Streamlit, LangChain, and HuggingFace LLMs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/email-calendar-ai-assistant/";
          
        },
      },{id: "post-reinforcement-learning-for-robotic-arm-control",
        
          title: "Reinforcement Learning for Robotic Arm Control",
        
        description: "Trained a reinforcement learning agent in a custom Gymnasium environment to solve a robotic reach task using PyBullet physics. This project demonstrates my ability to implement RL algorithms, simulate robotic systems, and optimize control policies for real-world applications.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/rl-reach/";
          
        },
      },{id: "post-interactive-dashboard-with-metabase",
        
          title: "Interactive Dashboard with Metabase",
        
        description: "Built an interactive dashboard with Metabase to analyse journalist fatalities in the world.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/metabase-unesco-dashboard/";
          
        },
      },{id: "post-mlops-pipeline-deployment",
        
          title: "MLOps Pipeline Deployment",
        
        description: "Deployed a machine learning model that predicts patient medical charges based on demographic and health data.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/mlops-pipeline/";
          
        },
      },{id: "post-performance-monitoring-with-grafana",
        
          title: "Performance Monitoring with Grafana",
        
        description: "Monitored performance metrics of a predictive regression model using Grafana and automated alerts.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/grafana/";
          
        },
      },{id: "post-deployment-of-a-large-language-model-web-application",
        
          title: "Deployment of a Large Language Model Web Application",
        
        description: "Deployed a chatbot prototype to explore the capabilities of large language models. This project involved integrating the Llama 2 API from Replicate into a responsive front-end web application built with Streamlit.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/llama2-chatbot/";
          
        },
      },{id: "post-customer-data-cleaning-with-sql",
        
          title: "Customer Data Cleaning with SQL",
        
        description: "Processed raw customer data using SQL by removing duplicates, handling missing values, standardizing formats, and splitting columns for better analysis. Ensured data integrity and prepared it for actionable insights.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/customer-data-cleaning/";
          
        },
      },{id: "post-data-visualisation-with-tableau",
        
          title: "Data Visualisation with Tableau",
        
        description: "A collection of data visualisation dashboards with Tableau.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/tableau-dashboards/";
          
        },
      },{id: "post-classifier-visualisation",
        
          title: "Classifier Visualisation",
        
        description: "Developed an intuitive Python tool to train, evaluate, and visualize decision boundaries of multiple classifiers (SVM, Random Forest, Logistic Regression) on 2D datasets. Implemented hyperparameter tuning to optimize model performance while providing visual explanations of model behavior and trade-offs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/classifier-visualisation/";
          
        },
      },{id: "post-data-analysis-and-regression-predictions-with-python",
        
          title: "Data Analysis and Regression Predictions with Python",
        
        description: "Built a predictive model in Python to forecast residential home prices, applying machine learning with scikit-learn to solve a supervised regression problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/python-regression/";
          
        },
      },{id: "post-exploratory-data-analysis-and-classification-predictions-with-python",
        
          title: "Exploratory Data Analysis and Classification Predictions with Python",
        
        description: "Developed a predictive model to identify factors influencing survival during the Titanic disaster. This project involved a complete machine learning workflow, from data cleaning and feature engineering to fitting a classifier.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/python-classification/";
          
        },
      },{id: "post-custom-reinforcement-learning-environments",
        
          title: "Custom Reinforcement Learning Environments",
        
        description: "Developed modular Gymnasium environments for training RL agents, integrating physics-based robotics simulations via PyBullet and ROS.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/rl-envs/";
          
        },
      },{id: "post-multi-objective-optimization-in-python",
        
          title: "Multi-Objective Optimization in Python",
        
        description: "A collection of practical examples and visualizations demonstrating evolutionary algorithms, constraint handling, and Pareto front analysis using the PYMOO framework.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/optimisation/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-courses",
          title: 'Courses',
          description: "I’m passionate about personal growth, exploring the connection between mind and body and learning how to adopt a more sustainable lifestyle. Here are some courses I’ve completed to deepen my understanding in these areas.",
          section: "Projects",handler: () => {
              window.location.href = "/outdoors/courses/";
            },},{id: "projects-treks",
          title: 'Treks',
          description: "I love mountains and outdoors. Here are some of my most memorable hikes and treks around the world.",
          section: "Projects",handler: () => {
              window.location.href = "/outdoors/treks/";
            },},{id: "projects-volunteering",
          title: 'Volunteering',
          description: "I find fulfillment in volunteering abroad and contributing to meaningful causes. Between 2021 and 2025, I dedicated my time to the following projects.",
          section: "Projects",handler: () => {
              window.location.href = "/outdoors/volunteering/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PierreExeter", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pierreaumjaud", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9939-5537", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Pierre-Aumjaud/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cWpc7XYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
