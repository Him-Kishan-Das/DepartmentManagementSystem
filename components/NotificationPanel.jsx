"use client"; // Ensure this is at the very top

import { useEffect, useRef } from "react";

const notifications = [
  { date: "Sep 16, 2024", text: "Letter of AICTE Approval" },
  { date: "Aug 1, 2024", text: "Another Notification" },
  { date: "Aug 23, 2024", text: "Last Another Notification" },
  { date: "Jul 15, 2024", text: "Important Notice" },
  { date: "Jun 10, 2024", text: "Semester Exam Dates Announced" },
  { date: "May 5, 2024", text: "New Course Enrollment Open" },
];

const NotificationPanel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const speed = 1; // Adjust scrolling speed

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollTop += speed;

        // Reset to top when reaching the bottom
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollContainer.scrollTop = 0;
        }
      }
    }, 50); // Adjust scrolling interval

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-blue-400 text-white p-4 rounded-lg w-80">
      <div className="flex justify-center">
        <img src="/images/announcement.png" alt="Announcement" className="w-7 h-7"/>
        <h2 className="text-2xl font-bold mb-4 text-center ml-2">Notifications</h2>
      </div>
      <hr className="p-2" />
      
      {/* Scrollable container */}
      <div ref={scrollRef} className="h-56 overflow-hidden ">
        <div className="space-y-2">
          {notifications.map((notification, index) => (
            <div key={index} className="mb-2 border-b border-white pb-2">
              <p className="text-sm">Posted: {notification.date}</p>
              <p className="font-semibold">{notification.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="bg-white text-green-800 font-semibold py-2 px-4 rounded-lg mt-4">
        View All
      </button>
    </div>
  );
};

export default NotificationPanel;
