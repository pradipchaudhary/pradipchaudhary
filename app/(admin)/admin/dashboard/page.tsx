export default function DashboardPage() {
    const stats = [
        { id: 1, label: "Projects", value: "12" },
        { id: 2, label: "Clients", value: "24" },
        { id: 3, label: "Experience", value: "5 years" },
        { id: 4, label: "Awards", value: "3" },
    ];
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Hi, I'm [Your Name]
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            A passionate full-stack developer specializing in
                            modern web technologies.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                            View Projects
                        </button>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto"></div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="bg-white rounded-lg shadow-sm p-6"
                    >
                        <dt className="text-sm font-medium text-gray-500">
                            {stat.label}
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Recent Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((project) => (
                        <div key={project} className="group relative">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 overflow-hidden">
                                {/* Add project thumbnail here */}
                            </div>
                            <h4 className="mt-2 text-lg font-medium text-gray-900">
                                Project {project}
                            </h4>
                            <p className="text-sm text-gray-500">
                                Brief project description goes here.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
