#!/usr/bin/env bash
# generate documentation to project

PWD=`pwd`;
BACKEND="/Backend/Src";
OUTPUT_DOC="/docs/api";
phpdoc -d "$PWD$BACKEND" -t "$PWD$OUTPUT_DOC"
