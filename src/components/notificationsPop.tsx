import React from "react";

const notifications = [
  {
    id: 1,
    icon: "📄",
    title: "Document Uploaded",
    description: "Your ID has been successfully uploaded.",
    color: "#3376F3",
  },
  {
    id: 2,
    icon: "✅",
    title: "Verification Complete",
    description: "Your Smart ID is verified.",
    color: "#34D399",
  },
  {
    id: 3,
    icon: "⚠️",
    title: "Verification Failed",
    description: "Bank statement not accepted.",
    color: "#F97316",
  },
];

export default function NotificationDropdown() {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4 border-b font-semibold text-sm text-gray-700">Notifications</div>
      <ul className="divide-y">
        {notifications.map((notif) => (
          <li key={notif.id} className="flex items-start gap-3 p-4 hover:bg-gray-50">
            <div
              className="flex items-center justify-center w-6 h-6"
              style={{ color: notif.color }}
            >
              <span className="text-base leading-none">{notif.icon}</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">{notif.title}</div>
              <div className="text-xs text-gray-500">{notif.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
