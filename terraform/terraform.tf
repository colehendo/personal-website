terraform {
  cloud {
    organization = "colehendo"

    workspaces {
      name = "personal-website"
    }
  }

  required_version = ">= 1.5.0"
}