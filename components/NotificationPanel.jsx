const notifications = [
  { date: "Sep 16, 2024", text: "Letter of AICTE Approval" },
  { date: "Aug 1, 2024", text: "Another Notification" },
  { date: "Aug 23, 2024", text: ":ast Another Notification" },
  // Add more notifications as needed
];

const NotificationPanel = () => {
  return (
    <div className="bg-blue-400 text-white p-4 rounded-lg w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">Notifications</h2>
      <hr className="p-2" />
      <div className="h-57 overflow-y-auto mb-4">
        {notifications.map((notification, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm">Posted: {notification.date}</p>
            <p className="font-semibold">{notification.text}</p>
          </div>
        ))}
      </div>
      <button className="bg-white text-green-800 font-semibold py-2 px-4 rounded-lg">
        View All
      </button>
    </div>
  );
};

export default NotificationPanel;
