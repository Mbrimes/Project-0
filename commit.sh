#!/bin/sh
cd C:/Users/micha/Desktop/Codes/React Projects/Mern/Client
git add --all
timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -am "Regular auto-commit $(timestamp)"
git push origin master