locals {
  user_name = "devops"
}

resource "google_compute_project_metadata" "default" {
  metadata = {
    ssh-keys : <<EOF
      ${local.user_name}:${file("~/.ssh/devops-rsa-access-key.pub")}
    EOF
  }
}