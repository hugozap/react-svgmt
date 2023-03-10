#!/usr/bin/env bash
npm run start-test-server &

## poll the server over and over again
## until it's been booted
wait-on http://localhost:8080

## and now run cypress
cypress open
cypress run
