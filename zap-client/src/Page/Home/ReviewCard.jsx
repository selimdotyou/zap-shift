const ReviewCard = ({ item }) => {
    const {
        userName,  
        review,
       user_photoURL
    } = item || {};
   
  return (
    <div className="bg-gray-100 rounded-2xl p-6 max-w-sm shadow-sm">
      
      {/* Quote icon */}
      <div className="text-4xl text-gray-300 mb-4">“</div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {review}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-900">
            <img src={user_photoURL} className="rounded-full" alt={userName} />
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;