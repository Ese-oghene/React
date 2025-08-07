import image from '../assets/images/Bernard.png';

const Hero = ({
  title = 'Become a React Dev',
  subtitle = 'Find the React job that fits your skills and needs',
}) => {
  return (
    <section class="bg-indigo-700 py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center -mt-16">
          {/* Left: Text */}
          <div class="text-center md:text-start">
            <h1 class="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl leading-tight">
              {title}
            </h1>
            <p class="mt-6 text-2xl text-white">
              {subtitle}
            </p>
            <div class="mt-8">
              <a
                href="#"
                class="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold text-lg rounded-xl shadow-md hover:bg-gray-100 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right: Floating Image */}
          <div class="flex justify-center md:justify-start">
            <img
              src={image}
              alt="Floating Graphic"
              class="object-contain animate-bounce-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
