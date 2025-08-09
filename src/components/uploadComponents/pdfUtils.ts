import { jsPDF } from "jspdf";

export function generatePDF(canvas: HTMLCanvasElement, fileName = "file") {
  const A4_width = 595;
  const A4_height = 842;
  const margin = 20;

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [A4_width, A4_height],
  });

  const aspectRatio = canvas.width / canvas.height;
  const maxWidth = A4_width - margin * 2;
  const maxHeight = A4_height - margin * 2;

  let imageWidth = maxWidth;
  let imageHeight = maxWidth / aspectRatio;

  if (imageHeight > maxHeight) {
    imageHeight = maxHeight;
    imageWidth = maxHeight * aspectRatio;
  }

  const x = (A4_width - imageWidth) / 2;
  const y = (A4_height - imageHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, imageWidth, imageHeight);
  pdf.save(fileName + ".pdf");
}
