import io
import boto3
import unittest

from api import app


class TestAPIResponse(unittest.TestCase):

    def test_post(self):
        client = app.test_client()
        # Creates test data
        post_data = dict(file=(io.BytesIO(b"Test Text"), 'Test.txt'))
        # Response for HTML method
        post_response = client.post('/post-file', data=post_data, content_type='multipart/form-data')
        # Test for response methods
        self.assertEqual(post_response.status_code, 200)

    def test_put(self):
        client = app.test_client()
        # Creates test data
        put_data = dict(file='Test.txt')
        # Response for HTML method
        put_response = client.put('/put-url', data=put_data, content_type='multipart/form-data')
        # Test for response methods
        self.assertEqual(put_response.status_code, 200)

    def test_get(self):
        client = app.test_client()
        # Response for HTML method
        get_response = client.get('/get-list')
        # Test for response methods
        self.assertEqual(get_response.status_code, 200)

    @classmethod
    def tearDown(cls):
        s3 = boto3.resource('s3')
        s3.Object('datastax-assignment-folder', 'Test.txt').delete()


if __name__ == '__main__':
    unittest.main(warnings='ignore')
