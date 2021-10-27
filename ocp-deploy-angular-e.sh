#!/bin/bash

project_name="rhpam-mod1"
oc project ${project_name}
oc delete all -l app=order-management-ui

oc new-app --strategy="source" \
--name="order-management-ui" \
--code="https://github.com/relessawy/order_management_ui"
-e KIE="http://execserver-rhpam-mod1.apps.cluster-e305.e305.sandbox405.opentlc.com/"


oc expose svc/order-management-ui
