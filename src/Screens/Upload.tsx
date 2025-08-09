import React, { useRef, useState } from "react";
import MainHeader from "../components/mainHeader";
import { CloudUpload } from "lucide-react";

export default function Upload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [typeOfFile, setTypeOfFile] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleBrowseClick = () => { //No change
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleTypeSelect = (type: string) => {
    setTypeOfFile(type);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !typeOfFile) {
      setError("Please select a file and document type.");
      return;
    }

    setUploading(true);
    setResult(null);
    setError(null);

    // Simulated upload
    setTimeout(() => {
      setUploading(false);
      setResult("Upload successful!");
      setFile(null);
      setTypeOfFile("");
    }, 2000);
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      <MainHeader />

      <main className="max-w-6xl mx-auto p-8 bg-white mt-10 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload Document</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Box */}
          <div
            className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg cursor-pointer hover:border-gray-500"
            onClick={handleBrowseClick}
          >
            <CloudUpload className="mx-auto h-10 w-10 text-gray-500 mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            {file ? (
              <p className="mt-2 text-green-600 font-medium">{file.name}</p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">PDF, PNG, JPG under 10MB</p>
            )}
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </div>

          {/* Document Type Blocks */}
          <div className="w-full flex flex-row mt-5 gap-5 flex-wrap">
            {/* Proof of Identity */}
            <div
              onClick={() => handleTypeSelect("identity")}
              className={`cursor-pointer border w-[330px] h-[350px] p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 ${
                typeOfFile === "identity" ? "bg-blue-100 border-black" : "bg-gray-100 border-gray-300"
              }`}
            >
              <h2 className="text-[20px] font-medium mb-2">Proof of Identity</h2>
              <ul className="list-disc pl-5 text-sm">
                <li>South African Smart ID Card</li>
                <li>Green Barcoded ID Book</li>
                <li>Valid Passport (for South African citizens and foreign nationals)</li>
                <li>Drivers License</li>
              </ul>
            </div>

            {/* Proof of Residence */}
            <div
              onClick={() => handleTypeSelect("residence")}
              className={`cursor-pointer border w-[330px] h-[350px] p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 ${
                typeOfFile === "residence" ? "bg-blue-100 border-black" : "bg-gray-100 border-gray-300"
              }`}
            >
              <h2 className="text-[20px] font-medium mb-2">Proof of Residence</h2>
              <ul className="list-disc pl-5 text-sm">
                <li>Utility Bills (e.g, electricity, water, or rates bills)</li>
                <li>Bank Statements</li>
                <li>Lease or Rental Agreements</li>
                <li>Municipal Rates and Taxes Iinvoices</li>
                <li>TelePhone or Cellular Account Statements</li>
                <li>Insurance Policy Documents</li>
                <li>Motor Vehicle License Documents</li>
                <li>Retail Store Account Statements</li>
              </ul>
            </div>

            {/* Additional Documents */}
            <div
              onClick={() => handleTypeSelect("additional")}
              className={`cursor-pointer border w-[330px] h-[350px] p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 ${
                typeOfFile === "additional" ? "bg-blue-100 border-black" : "bg-gray-100 border-gray-300"
              }`}
            >
              <h2 className="text-[20px] font-medium mb-2">Additional Documents</h2>
              <ul className="list-disc pl-5 text-sm">
                <li>Affidavit or Police Statement</li>
                <li>Proof of INcome Tax Number</li>
                <li>Cancelled Cheque or Bank Statement</li> {/*repeated document */}
                <li>Tax Clearance Certificate</li>
                <li>Pay Slips or Employment Contracts</li>
                <li>Authority Documents(if acting on behalf of another)</li>
              </ul>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className={`w-full bg-black text-white py-2 px-4 rounded-lg font-medium ${
              uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>

          {/* Result Message */}
          {result && <p className="text-green-600 text-sm"></p>}
        </form>
      </main>
    </div>
  );
}
