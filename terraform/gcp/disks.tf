resource "google_compute_disk" "jenkins-persistent-disk" {
  name  = "jenkins-persistent-disk"
  image = var.ubuntu-minimal-2204-lts
  size  = 10
  type  = "pd-ssd"
  zone  = var.zone
}