#!/usr/bin/env bash
# generate documentation to project

PWD=`pwd`

phpdoc -d "$PWD/backend/src" -t "$PWD/docs/api"
