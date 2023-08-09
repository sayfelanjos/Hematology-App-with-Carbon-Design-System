# allow http
resource "google_compute_firewall" "custom-firewall" {
  name      = "custom-firewall"
  network   = "default"
  direction = "INGRESS"
  priority  = "1000"
  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }
  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }
  source_ranges = ["0.0.0.0/0"]
}