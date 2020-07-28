import boto3
from botocore.exceptions import ClientError
from flask import Flask, jsonify, request, render_template

app = Flask(__name__, static_folder="build/static", template_folder="build")


@app.route("/")
@app.route("/get")
def index():
    """ Renders Website """
    return render_template("index.html")


@app.route('/post-file', methods=['POST'])
def s3_post():
    """ Post request to insert file to s3 bucket """
    file = request.files["file"]
    try:
        client = boto3.client('s3')
        client.put_object(
            Body=file,
            Bucket='datastax-assignment-folder',
            Key=file.filename,
            ContentType=request.mimetype)
    except ClientError as error:
        raise error

    return "file uploaded"


@app.route('/get-list', methods=['GET'])
def s3_get_list():
    """ Get request to view contents in s3 bucket """
    bucket_items = list()
    try:
        resource = boto3.resource('s3')
        bucket = resource.Bucket('datastax-assignment-folder')

        for file in bucket.objects.all():
            bucket_items.append(file.key)
    except ClientError as error:
        raise error

    return jsonify(items=bucket_items)


@app.route('/put-url', methods=['PUT'])
def s3_put_url():
    """ Put request to generate temporary URL from s3 bucket"""
    file = request.form["file"]
    try:
        client = boto3.client('s3')
        response = client.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': 'datastax-assignment-folder', 'Key': file},
            ExpiresIn=60)  # 60 second expiration
    except ClientError as error:
        raise error
    return response


if __name__ == "__main__":
    app.run()
