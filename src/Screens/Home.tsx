import { useState, useEffect } from "react";
import MainHeader from "../components/mainHeader";
import { useNavigate } from "react-router-dom";

type DocumentStatus = "Verified" | "Checking" | "Not verified" | "Fraud detected";

interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
}

const statusStyles: Record<DocumentStatus, { color: string; icon: string }> = {
  "Verified":       { color: "text-green-700", icon: "/public/IconPac/shield-trust.png" },
  "Checking":       { color: "text-yellow-700", icon: "/public/IconPac/circle-dashed.png" },
  "Not verified":   { color: "text-gray-700", icon: "/public/IconPac/cross-circle.png" },
  "Fraud detected": { color: "text-red-700", icon: "/public/IconPac/exclamation.png" },
};

const documents: Document[] = [
  { id: "1", name: "Sine’s Id.pdf", status: "Verified" },
  { id: "2", name: "Police affidavit.pdf", status: "Checking" },
  { id: "3", name: "Proof of residence.pdf", status: "Not verified" },
  { id: "4", name: "Bank statement.pdf", status: "Fraud detected" },
  { id: "5", name: "Utility Bill.pdf", status: "Verified" },
  { id: "6", name: "Tax Return 2023.pdf", status: "Checking" },
  { id: "7", name: "Employment Contract.pdf", status: "Verified" },
  { id: "8", name: "Vehicle Registration.pdf", status: "Not verified" },
  { id: "9", name: "Medical Report.pdf", status: "Fraud detected" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const navigate = useNavigate();

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(query.toLowerCase())
  );

  const checkingDoc = documents.find((doc) => doc.status === "Checking");

  useEffect(() => {
    if (!checkingDoc || !isTracking) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 10);
        return next >= 100 ? 100 : next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [checkingDoc, isTracking]);

  const handleUploadClick = () => {
    navigate("/upload");
  };

  const startTracking = () => {
    setProgress(0);
    setIsTracking(true);
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <MainHeader />

      {/* Search & Upload */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md bg-white">
          <img src="/public/IconPac/search (2).png" alt="Search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search documents..."
            className="ml-2 flex-1 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          onClick={handleUploadClick}
        >
          Upload
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[500px] pr-2 flex-1">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-gray-300 rounded-xl p-4 min-w-[200px] flex flex-col items-center"
            >
              <div className="text-5xl">📄</div>
              <div className="text-sm text-center mt-2 font-medium">{doc.name}</div>
              <div className={`text-xs mt-1 flex items-center gap-1 ${statusStyles[doc.status].color}`}>
                <img src={statusStyles[doc.status].icon} alt={doc.status} className="w-4 h-4" />
                {doc.status}
              </div>
              <div className="flex mt-3 gap-2">
                <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                  <img src="/public/IconPac/download (1).png" alt="Download" className="w-3 h-3 inline-block mr-1" />
                  Download
                </button>
                <button className="text-xs px-2 py-1 rounded border border-gray-400">
                  <img src="/public/IconPac/share.png" alt="Share" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Tracker */}
        {checkingDoc && (
          <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 w-full h-36 max-w-sm">
            <h3 className="text-blue-900 font-semibold mb-2">Tracking Document</h3>
            <div className="text-sm mb-2 text-blue-900 font-medium">{checkingDoc.name}</div>

            <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden mb-1">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-blue-800 mb-2">{progress}% complete</div>

            {!isTracking && (
              <button
                className="bg-blue-600 text-white px-4 py-1 text-xs rounded hover:bg-blue-700 transition"
                onClick={startTracking}
              >
                Start Tracking
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
