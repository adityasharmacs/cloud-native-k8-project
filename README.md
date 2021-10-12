# Creating and Managing Cloud Native Services in Kubernetes

Welcome to the "Creating and Managing Cloud Native Services in Kubernetes" liveProject. This full content for this liveProject can be found here: [Creating and Managing Cloud Native Services in Kubernetes](https://www.manning.com/liveproject/creating-and-managing-cloud-native-services-in-kubernetes)

## Starting Point

The master branch is the starting point for the liveProject.

## Project Layout

* api - API Documentation for the SecurityNewsSource services using Swagger.
* api/postman - Postman tests for APIs.
* k8s - Kubernetes YAML files and other related Kubernetes resources for the SecurityNewsSource services and deployment.
* payments - The source for the `payment` service. This includes the Dockerfile and related files.

Directories for additional services should be added to this top-level directory. Additional Kubernetes YAML files should
be added to the `k8s/manifests` directory. Additional Kubernetes files that are not YAML manifests can be added anywhere
in the `k8s` directory.

## Starting Point Diagram

![Starting Point](diagrams/Milestone1-Start.png)

# Additional Notes 

## Milestone 2 - Starting Point

For those learners who may be unfamiliar with Javascript and Node.js, there is a provided starting point that will provide the base service implementation along with comments for where implementation from the learner should be added. This is an optional starting point.

This starting point can be found on the branch `milestone2/base`: https://github.com/robpacheco/cloud-native-kubernetes-liveproject/tree/milestone2/base


## Helm Chart implementation

I have used the Helm Chart to implement the K8 templates, all the 3 - SUbscriptions, redis and Payments will be implemented as a sub chart inside of the biggerr chart umbrella
This way we dont need to deploy each of them individually and then run it once and it will deploy all 3 resources.

Use ->

helm template name chartName --debug

to check if the helm chart works correctly or not.

1. helm template redis redis-chart --debug
2. helm template subscriptions subscriptions-chart --debug
3. helm template payment payment-chart --debug


For glancing through the final Charts generated from all the subcharts we use the following command:
helm template snsChart charts/sns-chart --debug

and the pwd is -> Root of the Project

## Helm Dependency Building for the subcharts
helm dep build charts/sns-chart/charts/


## Helm check if ghe Subcharts are well formed
helm lint charts/sns-chart/charts/ --with-subcharts


