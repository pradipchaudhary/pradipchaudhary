"use client";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Settings</h1>

            <div className="bg-[#0a1428] rounded-xl">
                <div className="p-6 border-b border-[#1a2942]">
                    <h2 className="text-lg font-medium text-white mb-4">
                        Profile Settings
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6 border-b border-[#1a2942]">
                    <h2 className="text-lg font-medium text-white mb-4">
                        Password
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Current Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 bg-[#1a2942] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="text-lg font-medium text-white mb-4">
                        Preferences
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white">
                                    Email Notifications
                                </p>
                                <p className="text-sm text-gray-400">
                                    Receive email updates
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-[#243656] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
                    Cancel
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
