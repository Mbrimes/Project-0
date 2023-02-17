#!/bin/sh
cd C:/Users/micha/Desktop/Codes/ReactProjects/Mern
git add --all
timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -am "Working on this Project $(timestamp)"
git push origin master