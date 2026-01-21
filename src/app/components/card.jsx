import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const PersonCard = () => {
  const person = {
    name: "Haji Gul Khan",
    role: "Founder & CEO",
    image: "/productdesigner.png",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    profileUrl: "#"
  };

  const handleProfileClick = () => {
    // 导航到个人资料页面的逻辑
    window.location.href = person.profileUrl;
  };

  const handleSocialClick = (platform, url) => {
    // 处理社交媒体点击
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="person-card bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      role="article"
      aria-label={`${person.name}, ${person.role}`}
    >
      
      {/* 图片部分 */}
      <div className="bg-gradient-to-br bg-white p-4">
        <div className="relative w-full h-[260px]">
          <img
            src={person.image}
            alt={`Portrait of ${person.name}`}
            className="w-full h-full object-contain rounded-xl"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-avatar.png";
            }}
          />
        </div>
      </div>

      {/* 内容部分 */}
      <div className="px-5 bg-gray-200 pt-4 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* 文本信息 */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {person.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {person.role}
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col items-start sm:items-end  gap-3">
          <button
            onClick={handleProfileClick}
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200 flex items-center gap-1 group"
            aria-label={`Visit ${person.name}'s profile`}
          >
            Visit profile
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>

          {/* 社交媒体图标 */}
          <div className="flex gap-4 text-xl" role="group" aria-label="Social media links">
            <button
              onClick={() => handleSocialClick('twitter', person.social.twitter)}
              className="text-gray-400 hover:text-sky-500 cursor-pointer transition-colors duration-200"
              aria-label="Twitter profile"
            >
              <FaTwitter />
            </button>
            
            <button
              onClick={() => handleSocialClick('instagram', person.social.instagram)}
              className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-200"
              aria-label="Instagram profile"
            >
              <FaInstagram />
            </button>
            
            <button
              onClick={() => handleSocialClick('linkedin', person.social.linkedin)}
              className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonCard;