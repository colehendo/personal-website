data "aws_route53_zone" "colehendo" {
  name = "colehendo.com"
}

resource "aws_route53_record" "colehendo" {
  zone_id = data.aws_route53_zone.colehendo.zone_id
  name    = data.aws_route53_zone.colehendo.name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.colehendo.domain_name
    zone_id                = aws_cloudfront_distribution.colehendo.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_colehendo" {
  zone_id = data.aws_route53_zone.colehendo.zone_id
  name    = "www.${data.aws_route53_zone.colehendo.name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.colehendo.domain_name
    zone_id                = aws_cloudfront_distribution.colehendo.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "colehendo_cert" {
  domain_name       = data.aws_route53_zone.colehendo.name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
