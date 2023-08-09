resource "google_compute_network" "default" {
  name = "default-vpc-network"
}

resource "google_compute_network" "vpc-network" {
  name                    = "custom-vpc-network"
  auto_create_subnetworks = "false"
  routing_mode            = "GLOBAL"
}

resource "google_compute_subnetwork" "network_subnet" {
  name                     = "custom-network-subnet"
  region                   = var.region
  ip_cidr_range            = var.network-subnet-cidr
  network                  = google_compute_network.vpc-network.name
  private_ip_google_access = true
}