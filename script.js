document.addEventListener('DOMContentLoaded', () => {
  const industries = [
      { name: 'Technology', color: '#488BCE' },
      { name: 'Healthcare', color: '#488BCE' },
      { name: 'Finance', color: '#39CBBA' },
      { name: 'Education', color: '#FF4E4E' },
      { name: 'Retail', color: '#FF4E4E' },
      { name: 'Energy', color: '#39CBBA' },
      { name: 'Manufacturing', color: '#488BCE' },
      { name: 'Real Estate', color: '#FF4E4E' },
      { name: 'Transportation', color: '#488BCE' },
      { name: 'Entertainment', color: '#FF4E4E' }
  ];

  const bubbles = document.querySelectorAll('.bubble');

  bubbles.forEach(bubble => {
      const industry = industries[Math.floor(Math.random() * industries.length)];
      bubble.textContent = industry.name;
      bubble.style.backgroundColor = industry.color;
  });
});
