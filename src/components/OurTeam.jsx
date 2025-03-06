const OurTeam = () => {
    return (
      <section id="OurTeam" className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <p className="font-semibold">John Doe</p>
              <p>Lead Developer</p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <p className="font-semibold">Jane Smith</p>
              <p>Designer</p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <p className="font-semibold">Chris Lee</p>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeam;
  