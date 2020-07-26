import os
import boto3

from flask import Flask, jsonify, request

app = Flask(__name__)
BUCKET_NAME = os.environ.get('BUCKET_NAME')


@app.route('/post-file', methods=['POST'])
def s3_post():
    if request.method == "POST":
        file = request.files["file"]
        client = boto3.client('s3')
        client.put_object(Body=file,
                          Bucket=BUCKET_NAME,
                          Key=file.filename,
                          ContentType=request.mimetype)
    return "file uploaded"


@app.route('/get-list', methods=['GET'])
def s3_get_list():
    bucket_items = list()
    s3 = boto3.resource('s3')
    bucket = s3.Bucket(BUCKET_NAME)
    for file in bucket.objects.all():
        bucket_items.append(file.key)
    return jsonify(items=bucket_items)


@app.route('/put-url', methods=['PUT'])
def s3_put_url():
    if request.method == "PUT":
        file = request.form["file"]
        client = boto3.client('s3')
        response = client.generate_presigned_url(ClientMethod='get_object',
                                                 Params={'Bucket': BUCKET_NAME, 'Key': file},
                                                 ExpiresIn=60)
        return response


if __name__ == "__main__":
    app.run()
