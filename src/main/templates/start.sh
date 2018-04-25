#!/bin/sh

cd `dirname $0`
java -jar ironvas_EventsToAMQP.jar $*
