# README #

This repo contains random scripts and growth hacks automation codes.

## 1. Linkedin Profile Search Script ##

Used to find contacts based on any input query.

### Preinstall ###
* Nodejs (https://nodejs.org/en/download/)
* NPM  ( It will be installed along with nodejs)
* To make sure that both node and npm installed successfully
* Git/bitbucket accounts
```
- node -v
- npm -v
```

### How to Run ###

* Clone random-script repo
``` 
- git clone git@bitbucket.org:abaziz/random-scripts.git
- cd Linkedin Profile Search Script
- npm install
- run node_modules/.bin/webdriver-manager update --no-ssl --proxy (when we are running the project from scratch)
- npm test

```

### Expected Results ###

* CSV file under Linkedin Profile Search Script/results/
* CSV file will contain links from linkedin based on search query(keywords), search location(log & lat)

### Parameters details" 

* Parameters such as username, password, keywords, location" are located under conf.ts file




