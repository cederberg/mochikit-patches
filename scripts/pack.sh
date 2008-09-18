#!/bin/sh
#
# custom_rhino.jar from:
#   http://svn.dojotoolkit.org/src/trunk/buildscripts/lib/custom_rhino.jar

BASEDIR=`dirname $0`/..
SCRATCH=$BASEDIR/_scratch.js
PACKED=$BASEDIR/packed.js
rm -f $SCRATCH $PACKED
cat $BASEDIR/trunk.js $BASEDIR/MochiKit/*.js > $SCRATCH
java -jar $BASEDIR/scripts/custom_rhino.jar -c $SCRATCH > $PACKED
rm -f $SCRATCH
