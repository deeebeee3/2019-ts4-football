# ts4-19-football

TS Reusable code project

1. npm init -y
2. tsc --init
3. npm install nodemon concurrently --save
4. create build and src dirs in root
5. index.ts in src
6. in ts.config:

"outDir": "./build"
"rootDir": "./src"

7. in package.json add:

"scripts": {
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:\*"
}

8.  run npm start - will get an error in console,
    do ctrl+c, then npm start again - error will go away.

9.  add football csv file to root of project :)

https://nodejs.org/docs/latest/api/fs.html#fs_fs_readfilesync_path_options

10. anytime want to work with 3rd party js library, we need to install that type
    definition file (@types/{library}) unless it is included by default with library itself

11. anytime using anything inside node standard library we are going to install:
    npm install @types/node - i.e. to use 'fs' or 'os' or 'http' etc etc...
