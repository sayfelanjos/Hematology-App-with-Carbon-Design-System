resource "google_project_service" "enable-iam-api" {
  project = var.project_id
  service = "iam.googleapis.com"
  disable_on_destroy = false
  disable_dependent_services = false
}

resource "google_project_service" "enable-cloudresourcemanager-api" {
  project = var.project_id
  service = "cloudresourcemanager.googleapis.com"
  disable_on_destroy = false
  disable_dependent_services = false
}

resource "google_project_service" "enable-container-api" {
  project = var.project_id
  service = "container.googleapis.com"
  disable_on_destroy = false
  disable_dependent_services = false
}