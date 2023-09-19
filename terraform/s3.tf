resource "aws_s3_bucket" "colehendo" {
  bucket = var.s3_bucket_name
}

resource "aws_s3_bucket_policy" "colehendo" {
  bucket = aws_s3_bucket.colehendo.id
  policy = data.aws_iam_policy_document.colehendo.json
}

data "aws_iam_policy_document" "colehendo" {
  statement {
    sid       = "AllowCloudFrontServicePrincipal"
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${var.s3_bucket_name}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = [aws_cloudfront_distribution.colehendo.arn]
    }

  }
}
