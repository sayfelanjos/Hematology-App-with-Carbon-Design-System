variable "project_id" {
  type        = string
  description = "ID of the Google Project"
}

variable "project_name" {
  type = string
  description = "Name of the project"
}
variable "region" {
  type        = string
  description = "Default Region"
}
variable "zone" {
  type        = string
  description = "Default Zone"
}
variable "server_name" {
  type        = string
  description = "Name of server"
}
variable "machine_type" {
  type        = string
  description = "Machine Type"
}

variable "ubuntu-minimal-2204-lts" {
  type        = string
  description = "ubuntu-minimal-2204-jammy-v20230715"
}
