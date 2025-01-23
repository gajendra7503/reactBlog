import React from "react";
import "./Dashboard.css";

const travelBlogs = [
  {
    id: 1,
    title: "Exploring the Backwaters of Kerala",
    description:
      "Discover the serene beauty of Kerala's backwaters, houseboats, and lush greenery.",
    image: "/assets/images/Kerala-backwaters.jpg",
  },
  {
    id: 2,
    title: "The Golden City of Jaisalmer",
    description:
      "Unveil the charm of Jaisalmer with its golden sand dunes and magnificent forts.",
    image: "/assets/images/jaisalmer.jpg",
  },
  {
    id: 3,
    title: "A Spiritual Journey to Varanasi",
    description:
      "Experience the spiritual essence of India with a trip to Varanasi's ghats and temples.",
    image: "/assets/images/varanasi.jpg",
  },
  {
    id: 4,
    title: "Mesmerizing Landscapes of Ladakh",
    description:
      "Embark on an adventure to Ladakh's stunning landscapes and Buddhist monasteries.",
    image: "/assets/images/ladakh.jpg",
  },
  {
    id: 4,
    title: "Mesmerizing Landscapes of Ladakh",
    description:
      "Embark on an adventure to Ladakh's stunning landscapes and Buddhist monasteries.",
    image: "/assets/images/ladakh.jpg",
  },
  {
    id: 4,
    title: "Mesmerizing Landscapes of Ladakh",
    description:
      "Embark on an adventure to Ladakh's stunning landscapes and Buddhist monasteries.",
    image: "/assets/images/ladakh.jpg",
  },
];

const Dashboard = ({ onLogout }) => {
    const handleLogout = () => {
      onLogout();
    };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Indian Travel Blogs</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main className="dashboard-content">
        {travelBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </main>
      {/* <h2>Coming Soon: Amazing Travel Blogs!</h2> */}
    </div>
  );
};

export default Dashboard;
