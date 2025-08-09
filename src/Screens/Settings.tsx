import { useState, useRef, type RefObject } from "react";
import MainHeader from "../components/mainHeader";
import Footer from "../components/Footer";
import Switch from "react-switch";

export default function SettingPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [isOn, setIsOn] = useState({
    notifications: false,
    emailNotification: false,
    pushNotification: false,
    smsAlert: false,
    securityAlert: false,
  });

  const section1 = useRef<HTMLDivElement | null>(null);
  const section2 = useRef<HTMLDivElement | null>(null);
  const section3 = useRef<HTMLDivElement | null>(null);
  const section4 = useRef<HTMLDivElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleSwitch = (key: keyof typeof isOn, nextIsOn: boolean) => {
    setIsOn((prev) => ({
      ...prev,
      [key]: nextIsOn,
    }));
  };

  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const NotificationSwitch = ({
    label,
    settingKey,
  }: {
    label: string;
    settingKey: keyof typeof isOn;
  }) => (
    <div className="flex justify-between items-center px-5 py-3 border-b border-gray-300 text-[18px]">
      <label htmlFor={settingKey} className="cursor-pointer select-none text-gray-800">
        {label}
      </label>
      <Switch
        id={settingKey}
        onChange={(checked: boolean) => handleSwitch(settingKey, checked)}
        checked={isOn[settingKey]}
        aria-label={label}
        offColor="#d1d5db"
        onColor="#2563eb"
        uncheckedIcon={false}
        checkedIcon={false}
        height={24}
        width={48}
      />
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto relative bg-gray-50 min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300">
        <MainHeader />
      </header>

      <div className="flex flex-col lg:flex-row w-full pt-[64px]">
        {/* Sidebar */}
        <aside className="fixed top-[64px] left-0 w-[220px] h-[55vh] bg-white border-r border-gray-300 overflow-y-auto z-40 p-4 rounded-b-lg">
          {/* 64px is the height of the header */}
          <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2 mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.2-5.2M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </div>
          <nav className="space-y-3 text-gray-700">
            <button
              onClick={() => handleScroll(section1)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition select-none"
            >
              <img src="/public/IconPac/user (2).png" alt="User" className="w-4 h-4" />
              Account Settings
            </button>
            <button
              onClick={() => handleScroll(section2)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition select-none"
            >
              <img src="/public/IconPac/lock.png" alt="Lock" className="w-4 h-4" />
              Security Settings
            </button>
            <button
              onClick={() => handleScroll(section3)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition select-none"
            >
              <img src="/public/IconPac/bell-notification-social-media.png" alt="Bell" className="w-4 h-4" />
              Notification Preferences
            </button>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition select-none"
            >
              <img src="/public/IconPac/moon.png" alt="Theme" className="w-4 h-4" />
              Theme
            </button>
            <button
              onClick={() => handleScroll(section4)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition select-none"
            >
              <img src="/public/IconPac/user-headset (2).png" alt="Support" className="w-4 h-4" />
              Support & Feedback
            </button>
          </nav>
        </aside>

        {/* Main Settings Area */}
        <main className="ml-[220px] p-6 pr-10 flex-1">
          {/* Account Settings */}
          <section ref={section1}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Account Settings</h2>
            <div className="flex flex-col items-start gap-6">
              <label
                htmlFor="profilePicture"
                className="relative cursor-pointer w-[170px] h-[170px] rounded-full overflow-hidden border border-gray-300 flex justify-center items-center hover:ring-2 hover:ring-blue-400 transition"
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"
                    />
                  </svg>
                )}
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>

              <div className="space-y-4 w-full max-w-md">
                <div>
                  <label className="block font-medium text-gray-800">Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-800">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-800">Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Security Settings */}
          <section ref={section2} className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Security Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Login Activity</h3>
                <div className="w-full max-w-xl h-24 flex items-center justify-center border border-dashed rounded-lg text-gray-500 mt-2 select-none">
                  No activity
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Session Timeout</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["5", "10", "15", "30", "60", "90", "130", "200"].map((time) => (
                    <button
                      key={time}
                      className="w-20 border border-gray-300 px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 transition select-none"
                    >
                      {time} min
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Notification Preferences */}
          <section ref={section3} className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Notification Preferences</h2>
            <div className="border border-gray-300 rounded-lg overflow-hidden max-w-2xl">
              <NotificationSwitch label="Notifications" settingKey="notifications" />
              <NotificationSwitch label="Email Notification" settingKey="emailNotification" />
              <NotificationSwitch label="Push Notification" settingKey="pushNotification" />
              <NotificationSwitch label="SMS Alert" settingKey="smsAlert" />
              <NotificationSwitch label="Security Alert" settingKey="securityAlert" />
            </div>
          </section>

          {/* Support & Feedback */}
          <section ref={section4} className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Support & Feedback</h2>
            <div className="space-y-6 max-w-2xl">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-800 select-none">Help Center: Access FAQs and support articles</p>
                <a
                  href="#"
                  aria-label="Open Help Center"
                  className="text-blue-600 hover:underline"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M7.5 16.5L21 3M21 3h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800">Contact Support</h3>
                <p className="text-sm text-gray-700 select-text">Tel: +27 65 456 7890</p>
                <p className="text-sm text-gray-700 select-text">Email: support@mm.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800">Submit Feedback</h3>
                <textarea
                  maxLength={120}
                  placeholder="Max 120 Characters"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                />
                <div className="mt-3 text-right">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition select-none">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
