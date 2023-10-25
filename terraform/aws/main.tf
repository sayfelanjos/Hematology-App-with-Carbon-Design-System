resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = "westeurope"
}
resource "azurerm_public_ip" "pip" {
  name                         = "bookip"
  location                     = "westeurope"
  resource_group_name          = azurerm_resource_group.rg.name
  public_ip_address_allocation = "Dynamic"
  domain_name_label            = "bookdevops"
  allocation_method            = ""
}