output "instance_ip_addr" {
  value = google_compute_instance.kubernetes-control-plane.network_interface.0.access_config.0.nat_ip
}