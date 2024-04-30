import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";
import { FileUploadProps } from "../utils/types";

const FileUpload = ({ images, onImageChange }: FileUploadProps) => {
  // 사진 끌어오기 함수
  const handleDrop = async (files: File[]) => {
    const formData = new FormData();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    formData.append("file", files[0]);

    try {
      const response = await axiosInstance.post(
        "/products/image",
        formData,
        config
      );

      onImageChange([...images, response.data.filename]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="min-w-[300px] h-[300px] border flex items-center justify-center">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="text-3xl">+</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="flex-grow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
        {images.map((image: string, index: number) => (
          <div key={index}>
            <img
              className="min-w-[300px] h-[300px]"
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt="image"
              key={Date.now()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
