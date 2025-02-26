const Home = () => {
  return (
    <section className="h-screen bg-blue-500 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Student Hack 2025</h1>
      <p className="text-xl mb-6">Countdown: </p>
      <button className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition">
        Apply Now
      </button>
    </section>
  );
};

export default Home;
