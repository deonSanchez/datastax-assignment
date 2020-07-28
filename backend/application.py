import boto3
import os
from botocore.exceptions import ClientError
from flask import Flask, jsonify, request, render_template

application = Flask(__name__, static_folder="build/static", template_folder="build")


@application.route("/")
@application.route("/get")
def index():
    """ Renders Website """
    return render_template("index.html")


@application.route('/post-file', methods=['POST'])
def s3_post():
    """ Post request to insert file to s3 bucket """
    file = request.files["file"]
    try:
        client = boto3.client(
            service_name='s3',
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_KEY'),
            region_name='us-east-1'
        )

        client.put_object(
            Body=file,
            Bucket='datastax-assignment-folder',
            Key=file.filename,
            ContentType=request.mimetype)
    except ClientError as error:
        raise error

    return "file uploaded"


@application.route('/get-list', methods=['GET'])
def s3_get_list():
    """ Get request to view contents in s3 bucket """
    bucket_items = list()
    try:
        session = boto3.Session(
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_KEY'),
            region_name='us-east-1'
        )
        s3 = session.resource('s3')
        bucket = s3.Bucket('datastax-assignment-folder')

        for file in bucket.objects.all():
            bucket_items.append(file.key)
    except ClientError as error:
        raise error

    return jsonify(items=bucket_items)


@application.route('/put-url', methods=['PUT'])
def s3_put_url():
    """ Put request to generate temporary URL from s3 bucket"""
    file = request.form["file"]
    try:
        client = boto3.client(
            service_name='s3',
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_KEY'),
            region_name='us-east-1'
        )
        response = client.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': 'datastax-assignment-folder', 'Key': file},
            ExpiresIn=60)  # 60 second expiration
    except ClientError as error:
        raise error
    return response


if __name__ == "__main__":
    application.run()
