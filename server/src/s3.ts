import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { S3 } from 'aws-sdk';

dotenv.config();

const bucketName: string = process.env.AWS_BUCKET_NAME || '';
const region: string = process.env.AWS_BUCKET_REGION || '';
const accessKeyId: string = process.env.AWS_ACCESS_KEY || '';
const secretAccessKey: string = process.env.AWS_SECRET_KEY || '';

const s3: S3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

interface File {
    path: string;
    filename: string;
}

// uploads a file to s3
function uploadFile(file: File): Promise<S3.ManagedUpload.SendData> {
    const fileStream: fs.ReadStream = fs.createReadStream(file.path);

    const uploadParams: S3.PutObjectRequest = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    };

    return s3.upload(uploadParams).promise();
}

// downloads a file from s3
function getFileStream(fileKey: string): NodeJS.ReadableStream {
    const downloadParams: AWS.S3.GetObjectRequest = {
        Key: fileKey,
        Bucket: bucketName
    };
    
    return s3.getObject(downloadParams).createReadStream();
}

export { uploadFile, getFileStream };
