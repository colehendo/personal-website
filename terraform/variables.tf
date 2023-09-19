####
# Global
####

variable "region" {
  type        = string
  default     = "us-east-1"
  description = "Default AWS Region to deploy resources into"
}


####
# S3
####

variable "s3_bucket_name" {
  type        = string
  default     = "colehendo.com"
  description = "The name of the S3 bucket used to host the website files"
}