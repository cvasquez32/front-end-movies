import { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const allowedTypes = ["image/jpeg", "image/png"];

  const handleFileInput = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PNG or JPEG Images");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    console.log("Got file: ", selectedFile);
  };

  const handleUpload = async () => {
    setUploading(true);

    const client = new S3Client({
      region: process.env.REACT_APP_AWS_REGION,
      credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      },
      requestChecksumCalculation: "WHEN_REQUIRED",
    });

    const params = {
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const command = new PutObjectCommand(params);
      const response = await client.send(command);
      console.log("Upload Successfully: ", response);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-gray-700 font-semibold mb-2"
        >
          File Upload
        </label>
        <input
          type="file"
          required
          onChange={handleFileInput}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
        />
        <button
          onClick={() => handleUpload(file)}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
      </div>
    </>
  );
};

export default FileUpload;
