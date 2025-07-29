import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home with #contact anchor
    navigate('/#contact', { replace: true });

    // Scroll manually (needed because navigate doesn't trigger smooth scroll)
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null; // Nothing to render
}
