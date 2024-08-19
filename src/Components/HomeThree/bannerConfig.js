// bannerConfig.js

const banners = [
  {
    image: require('../../assets/img/landing-page/background.png'),
    title: 'Get Your Instant Roof Quote',
    subtitle: 'Enter Your Address for an Instant Estimate',
    text: 'Simply enter your address to receive an instant quote on the cost of replacing your roof. Our easy-to-use tool provides accurate estimates based on your location and roof size.',
    buttonText: 'Get Instant Roof Quote!',
    buttonLink: '/landing-page' // Usaremos este identificador para abrir el widget
  },
  {
    image: require('../../assets/img/landing-page/background1.jpg'),
    title: 'Roofing Services',
    subtitle: 'Quality Roof Installations',
    text: 'Our team provides top-notch roofing services to ensure your home is protected. Get a free estimate for our roofing services today.',
    buttonText: 'Learn More About Roofing',
    buttonLink: '/services/roofing-services'
  },
  {
    image: require('../../assets/img/landing-page/background3.jpg'),
    title: 'Siding Services',
    subtitle: 'Enhance Your Home\'s Exterior',
    text: 'Upgrade your home with our professional siding services. Discover the best options for your home’s exterior with our experts.',
    buttonText: 'Explore Siding Options',
    buttonLink: '/services/siding-services'
  }
];

export default banners;
