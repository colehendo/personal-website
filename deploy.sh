CLOUDFRONT_DISTRIBUTION='E1XZ6A2CIKDD6J'

GREEN='\033[0;32m'
BLANK='\033[0m'

function create_dist() {
    printf "${GREEN}Packaging the website for distribution...${BLANK}\n\n"

    ng build 'personal-website'
}

function upload_dist() {
    printf "${GREEN}Uploading the packaged website to S3...${BLANK}\n\n"

    aws s3 sync 'dist/personal-website' 's3://colehendo.com' --delete
}

function invalidate_dist {
    printf "${GREEN}Invalidating the CloudFront Distribution to globally distribute the latest files...${BLANK}\n\n"

    local invalidation_info=$(
        aws cloudfront create-invalidation \
        --distribution-id "${CLOUDFRONT_DISTRIBUTION}" \
        --paths "/index.html" "/assets/cole-henderson-resume.pdf"
    )

    invalidation_id=$(echo "${invalidation_info}" | jq -r '.Invalidation.Id')
}

function wait_for_invalidation_to_complete {
    printf "${GREEN}Waiting for the CloudFront Distribution Invalidation to complete...${BLANK}\n\n"

    aws cloudfront wait invalidation-completed --distribution-id "${CLOUDFRONT_DISTRIBUTION}" --id "${invalidation_id}"
}

create_dist
upload_dist
invalidate_dist
wait_for_invalidation_to_complete
