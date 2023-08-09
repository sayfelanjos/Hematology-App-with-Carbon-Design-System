resource "google_service_account" "default" {
  account_id   = "hematologyapp"
  display_name = "Hematology Service Account"
  description  = "Hematology Engine default service account"
}