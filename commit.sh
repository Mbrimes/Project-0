#!/bin/sh
cd C:/Users/micha/Desktop/Codes/React Projects/Mern
git add --all
timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -am "Working on it bruh $(timestamp)"
git push origin master