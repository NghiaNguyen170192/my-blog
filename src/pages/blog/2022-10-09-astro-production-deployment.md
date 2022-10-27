---
layout: ../../layouts/BlogPostLayout.astro
title: "Astro Production Deployment"
description: "How to deploy Astro to Production"
author: "Nghia Nguyen"
date: "09th Oct 2022"
pubDate: "09th Oct 2022"
tags: ["azure", "astro", "pwa", "deployment", "netlify"]
categories: ["deployment"]
---

This is a tutorial to deploy *Astro* static web app to [Azure](https://portal.azure.com/).
<br/>

### Setup Astro repo
Please follow the  [Astro Installation guide](https://portal.azure.com/) with [GitHub](https://github.com/) repo enabled
<br/>

### Setup Domain name
You can buy any domain with cheap price from [Godaddy](https://www.godaddy.com/).

### Deploy your Astro repository to Production
After setting up your Astro repository on GitHub, you are ready to the repository to Production
There are several ways to deploy Astro. I only mention two ways, which are [Netlify](https://app.netlify.com/) and [Azure](https://portal.azure.com/).

#### Deploy to Netlify
Astro already has integration to deploy static web app to Netlify.
Here is the [deployment guide](https://docs.astro.build/en/guides/integrations-guide/netlify/)

##### Add custom domain name in Netlify
Netlify provides default domain name with *site-name.netlify.app*
If you want to add your custom domain, you follow these steps.

1. Go to [Netlify](https://app.netlify.com/)
2. Open *Domain Management* tab
3. Click *Add Custom Domain*
4. Enter your custom domain, click *Verify*

#### Deploy to Azure
Here are steps to deploy to Azure.

1. Go to [Azure Portal](https://portal.azure.com/)
2. Click *App Services*
3. Click *Create*
4. Under *Publish*, choose *Static Web App*
5. Enter *Name*
6. Under *Deployment Details*, choose *GitHub*
7. For *Hosting Plan*, choose *Free: For hobby or personal projects*
8. Link your *Organization* , *Repository* and *Branch*
9. Then click *Create*

![Deploy to Azure image](/image/deploy-to-azure.png)

It will create a deployment *.yml* file under *.github/workflows*

Then navigate to *Actions* in  your  *GitHub repo*. Once the workflow runs successfully, you can check your blog is published publicly to the Internet.  