#!/bin/bash

project_name="rhpam-user1"
oc project ${project_name}
oc delete all -l app=order-management-ui

oc new-app --strategy="source" \
--name="order-management-ui" \
--code="https://github.com/relessawy/order_management_ui"


oc expose svc/order-management-ui
