#!/bin/sh
BASEDIR=`dirname $0`/..
JSDOCDIR=`dirname $0`/jsdoc-toolkit
java -Djsdoc.dir=$JSDOCDIR -jar $JSDOCDIR/jsrun.jar $JSDOCDIR/app/run.js -t=$JSDOCDIR/templates/jsdoc -d=$BASEDIR/doc/html $BASEDIR/MochiKit
