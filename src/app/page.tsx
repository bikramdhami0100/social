"use client"
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

export default function Home() {

  return (
  <div>
     <div>
 hello world
    </div>
       <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  </div>
  );
}
