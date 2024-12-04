import React from "react";

export default function Sidebar() {
    const menuItems = [
        { icon: "🏠", label: "Home", href: "#" },
        { icon: "💼", label: "Projects", href: "#" },
        { icon: "👤", label: "About", href: "#" },
        { icon: "📝", label: "Blog", href: "#" },
        { icon: "📧", label: "Contact", href: "#" },
    ];
    return (
        <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Portfolio
                    </h1>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <span className="text-xl mr-3">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Profile Section */}
                <div className="p-4 border-t">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div>
                            <p className="font-medium text-gray-900">
                                [Your Name]
                            </p>
                            <p className="text-sm text-gray-500">Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
