import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const shareOnSocialMedia = (platform) => {
    const url = window.location.href;
    const text = 'Check out this amazing flashcard app for learning!';

    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="social-media-container">
      <h3>Share with Friends</h3>
      <div className="social-icons">
        <button
          onClick={() => shareOnSocialMedia('twitter')}
          className="social-icon twitter"
          aria-label="Share on Twitter"
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          onClick={() => shareOnSocialMedia('facebook')}
          className="social-icon facebook"
          aria-label="Share on Facebook"
        >
          <i className="fab fa-facebook"></i>
        </button>
        <button
          onClick={() => shareOnSocialMedia('linkedin')}
          className="social-icon linkedin"
          aria-label="Share on LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </button>
        <button
          onClick={() => shareOnSocialMedia('whatsapp')}
          className="social-icon whatsapp"
          aria-label="Share on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  );
};

export default SocialMedia; 