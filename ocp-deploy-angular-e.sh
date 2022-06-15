#!/bin/bash

project_name="rhpam-mod1"
oc project ${project_name}

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
--code="https://github.com/relessawy/order_management_ui

oc set env dc/order-management-ui KIE=http://kieserver-http-rhpam-mod1.apps.cluster-crv6x.crv6x.sandbox1458.opentlc.com/

oc expose svc/order-management-ui
