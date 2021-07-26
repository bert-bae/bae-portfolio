upload_to_s3() {
  echo "Uploading to S3 bucket name $S3_BUCKET..."
  aws s3 cp ./build/ s3://$S3_BUCKET/build/ --recursive --cache-control max-age=0
}

upload_to_s3