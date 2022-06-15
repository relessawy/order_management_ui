#!/bin/bash

oc project rhpam-user6


oc delete deployment order-management-ui
oc delete rs -l deployment=order-management-ui
oc delete po -l deployment=order-management-ui
oc delete bc order-management-ui
oc delete svc order-management-ui
oc delete route order-management-ui
oc delete deployment order-management-ui
oc delete is order-management-ui

oc new-app --strategy="source" \
--name="order-management-ui" \
--code="https://github.com/relessawy/order_management_ui"


oc expose svc/order-management-ui
