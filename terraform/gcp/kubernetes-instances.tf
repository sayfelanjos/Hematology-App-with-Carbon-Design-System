resource "google_compute_address" "k8s-control-plane-ip-address" {
  name         = "k8s-control-plane-ip-address"
  region = var.region
}

resource "google_compute_address" "k8s-node-01-ip-address" {
  name         = "k8s-node-01-ip-address"
  region = var.region
}

resource "google_compute_instance" "kubernetes-control-plane" {
  provider     = google
  name         = "kubernetes-control-plane"
  zone         = var.zone
  tags         = ["http-server", "https-server"]
  metadata     = google_compute_project_metadata.default.metadata
  machine_type = "custom-2-2048"
#  desired_status = "TERMINATED"
  boot_disk {
    initialize_params {
      image = var.ubuntu-minimal-2204-lts
    }
  }

  network_interface {
    network = "default"
#    network    = google_compute_network.vpc-network.name
#    subnetwork = google_compute_subnetwork.network_subnet.name
    access_config {
      nat_ip = google_compute_address.k8s-control-plane-ip-address.address
    }
  }

  service_account {
    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    email  = google_service_account.default.email
    scopes = ["cloud-platform"]
  }
}

resource "google_compute_instance" "kubernetes-node-01" {
  provider     = google
  name         = "kubernetes-node-01"
  zone         = var.zone
  tags         = ["http-server", "https-server"]
  metadata     = google_compute_project_metadata.default.metadata
  machine_type = var.machine_type
  #  desired_status = "TERMINATED"
  boot_disk {
    initialize_params {
      image = var.ubuntu-minimal-2204-lts
    }
  }

  network_interface {
    network = "default"
    #    network    = google_compute_network.vpc-network.name
    #    subnetwork = google_compute_subnetwork.network_subnet.name
    access_config {
      nat_ip = google_compute_address.k8s-node-01-ip-address.address
    }
  }

  service_account {
    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    email  = google_service_account.default.email
    scopes = ["cloud-platform"]
  }
}