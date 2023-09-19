locals {
  s3_domain_name = "${var.s3_bucket_name}.s3.${var.region}.amazonaws.com"
}

resource "aws_cloudfront_distribution" "colehendo" {
  enabled             = true
  default_root_object = "index.html"

  http_version    = "http2and3"
  price_class     = "PriceClass_100"
  is_ipv6_enabled = true
  web_acl_id      = data.aws_wafv2_web_acl.colehendo.arn

  origin {
    domain_name              = local.s3_domain_name
    origin_id                = var.s3_bucket_name
    origin_access_control_id = aws_cloudfront_origin_access_control.colehendo.id
  }

  default_cache_behavior {
    target_origin_id = var.s3_bucket_name

    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    cache_policy_id        = data.aws_cloudfront_cache_policy.Managed-CachingOptimized.id
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_control" "colehendo" {
  name                              = var.s3_bucket_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "Managed-CachingOptimized" {
  name = "Managed-CachingOptimized"
}

data "aws_wafv2_web_acl" "colehendo" {
  name  = "CreatedByCloudFront-4d5844bd-dcf3-43bf-a563-5a2cd03b8a8d"
  scope = "CLOUDFRONT"
}
