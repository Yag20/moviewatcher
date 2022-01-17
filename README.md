# moviewatcher
Movie Lister Application 
LAP2 Extra Assignment 

# Part 1

# install Log 
create GIT repo
GIT clone (remember git will build folder for project)
create .gitignore (touch .gitignore with node_modules)

create requests.rest (for testing) start by 
### 
GET http://localhost:3000/all


create folders
    client
        css
        js
    server 
        models 
        controllers 
        routes (optional)
        dbConfig  (optional)
        tests (optional)
            integration 
            unit 
    db_data or db\migrations (optional)
            .csv files

    Add Files 
        client/index.html - add template + bootstrap if required + link to .js (use defer or but at bottom in body to load HTML first ) and .css 

        client/css/styles.css
        server/server.js
        server/index.js (optional)

   Add Bootstrap and Google Fonts (if required) to each .html file 
   Add styles.css and .js links to headers in .html files    

   dbConfig  (optional)
            init.js
            setup.sql  

# SET UP SERVER EXPRESS
=======================
cd server 
npm init -y (this will build package.json) 
npm install express --save  (may need cors)
npm install nodemon --save-dev (development dependency) 

in package.json add "start" : "nodemon"
in package.json - under scripts add "start": "nodemon server.js"
in terminal npm run start 

make sure .gitignore to stop node_modules going to git 

to start server in terminal 
node server.js or 
node run server (this will run nodemon server.js)

Server wouldn't start but needed cors installed
npm install cors (or set dependency in package json )

For Postgres neeed npm install pg 

# POSTGRES SETUP 
=================

1. Ensure docker desktop running 
2. Download image and start conatainer 
3. Note no spaces in bind statemment 
4. Make sure you are in project's root directory 

docker run --name movies-db --mount type=bind,source="$(pwd)",dst="/code" -e POSTGRES_PASSWORD=password -d postgres

Check if container running 
docker ps - list all running containers
docker ps -a - lists all containers 


5. Start shell for POSTGres

docker exec -it movies-db psql -U postgres

6. Build Database 
 /code = root directory 
run script `\i code/server/db/setup.sql`

Note - couldn't populate tables from script without adding id with should have been auto gen. 
Note - Also ensure no " or ' on string fields

7. \dt - to view tables
















# Could have 


# Wins / Challenges  
