---

# Securing Business Certifications and Licenses Project

This is a software for easy access, upload and verification of Business Documents.


## About 

This software for verifying documents and approving licenses can be useful for all types of businesses varying from small retail stores to even large business firms.
---
* A business user can signup with its basic business details.

* After specifying the type of business,he can upload reuired documents for license verification.
* The admins at their ends will verify the uploaded documents at their respective stages .
* In the meanwhile, users can track the status of their verification applications.
* After successful verfication at all stages , the license gets approved.


##           Team-Name:  Demons

##           Team Members

* [Yash Chindhe](https://github.com/staryash25) - yashschindhe@gmail.com
---

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/asphalke07/BusinessCertificateLicenses.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/iaincollins/nextjs-starter/blob/master/.env.example) over to '.env' and fill in the options) you can configure a range of options.

See the [AUTHENTICATION.md](https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md) for how to set up oAuth if you want to do that. It suggested you start with Twitter as it's the easiest to get working.

## Deploying to the cloud with now.sh

To deploy to production on [Zeit's now.sh cloud platform](https://zeit.co) you will need to install the `Now` desktop app on your computer. If you don't want to install the `Now` desktop app, you can use the following command to install it (either approach is fine):

    sudo npm i -g --unsafe-perm now

Once installed, open `now.json` and set a `name` and `alias` for your site.

To deploy, just run `now` in the working directory:

    npm install -g now
    now

If you configure a .env file `now` will include it when deploying if you use the -E option to deploy:

    now -E

If you want to have your local `.env` file have variables for local development and have a different sent of variables you use in production, you can create additional .env files and tell `now` to use a specific file when deploying:

    now -E production.env



----




