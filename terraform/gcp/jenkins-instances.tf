#resource "google_compute_instance_from_template" "jenkins-controller" {
#  name                     = "jenkins-controller"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.jenkins-instance-template.self_link
##  desired_status = "TERMINATED"
#}
#
#resource "google_compute_instance_from_template" "jenkins-agent" {
#  name                     = "jenkins-agent"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.jenkins-instance-template.self_link
##  desired_status = "TERMINATED"
#}
#
#resource "google_compute_instance_from_template" "jenkins-docker-cloud-host" {
#  name                     = "jenkins-docker-cloud-host"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.jenkins-instance-template.self_link
##  desired_status = "TERMINATED"
#}