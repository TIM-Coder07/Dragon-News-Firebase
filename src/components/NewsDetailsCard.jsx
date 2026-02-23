import React from "react";
import { Link } from "react-router";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
  if (!news) return null;

  const {
    category_id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString()
    : "Unknown date";

  const stars = Math.round(rating?.number || 0);

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author Section */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full h-full">
              <img
                src={author?.img || "/avatar.png"}
                alt={author?.name || "Author"}
              />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-sm">{author?.name || "Unknown"}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500 hover:text-primary cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-md h-full"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-accent">{details}</div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(stars)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating?.number || 0}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
        <Link className="btn btn-secondary" to={`/category/${category_id}`}>
          {" "}
          Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
