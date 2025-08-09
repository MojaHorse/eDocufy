import { generatePDF } from "./pdfUtils";

export default function SubmitButtons({ uploading, cvReady, canvasRef, fileName }: any) {
  return (
    <div className="flex flex-row gap-4">
      <button className="bg-red-500">Cancel</button>
      <button disabled={uploading || !cvReady}>Submit</button>
      <button onClick={() => generatePDF(canvasRef.current, fileName)}>Download PDF</button>
    </div>
  );
}
