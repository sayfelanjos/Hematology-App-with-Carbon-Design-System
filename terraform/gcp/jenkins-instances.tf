#resource "google_compute_instance_from_template" "pipeline-controller" {
#  name                     = "pipeline-controller"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.pipeline-instance-template.self_link
##  desired_status = "TERMINATED"
#}
#
#resource "google_compute_instance_from_template" "pipeline-agent" {
#  name                     = "pipeline-agent"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.pipeline-instance-template.self_link
##  desired_status = "TERMINATED"
#}
#
#resource "google_compute_instance_from_template" "pipeline-docker-cloud-host" {
#  name                     = "pipeline-docker-cloud-host"
#  zone                     = var.zone
#  source_instance_template = google_compute_instance_template.pipeline-instance-template.self_link
##  desired_status = "TERMINATED"
#}