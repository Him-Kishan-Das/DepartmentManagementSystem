const NotificationPanel = () => {
    return (
        <div className="bg-blue-400 text-white p-4 rounded-lg w-80">
            <h2 className="text-2xl font-bold mb-4 text-center">Notifications</h2>
            <hr className="p-2"/>
            <div className="max-h-48 overflow-y-auto mb-4">
                <div className="mb-2">
                    <p className="text-sm">Posted: 25-Jan, 2025</p>
                    <p className="font-semibold">New Class Routine</p>
                </div>
                <div className="mb-2">
                    <p className="text-sm">Posted: 25-Jan, 2025</p>
                    <p className="font-semibold">New Class Routine</p>
                </div>
                <div className="mb-2">
                    <p className="text-sm">Posted: 25-Jan, 2025</p>
                    <p className="font-semibold">New Class Routine</p>
                </div>
            </div>
            <button className="bg-white text-green-800 font-semibold py-2 px-4 rounded-lg">View All</button>
        </div>
    );
}

export default NotificationPanel;
