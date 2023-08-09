resource "google_compute_instance_template" "jenkins-instance-template" {
  name        = "jenkins-instance-template"
  description = "This templates is used to create Jenkins Cluster instances in GCP."
  provider    = google
  tags        = ["http-server", "https-server"]
  metadata    = google_compute_project_metadata.default.metadata

  labels = {
    environment = "dev"
  }

  machine_type = var.machine_type

  disk {
    auto_delete  = true
    boot         = true
    source_image = var.ubuntu-minimal-2204-lts
  }

  network_interface {
    network = "default"
#    network    = google_compute_network.vpc-network.name
#    subnetwork = google_compute_subnetwork.network_subnet.name
    access_config {
      // Ephemeral public IP
    }
  }

  service_account {
    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    email  = google_service_account.default.email
    scopes = ["cloud-platform"]
  }
}

