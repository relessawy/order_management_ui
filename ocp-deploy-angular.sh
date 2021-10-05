#!/bin/bash

project_name="rhpam-mod1"
oc project ${project_name}
oc delete all -l app=procurement-process-web

oc new-app --strategy="source" \
--name="procurement-process-web" \
--code="https://github.com/relessawy/order_management_ui"

oc expose svc/procurement-process-web
