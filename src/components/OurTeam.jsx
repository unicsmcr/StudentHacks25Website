
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const OurTeam = () => {
  const members = [{ "name": "Sean bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Lead dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }];
  const [plusSlides, setplusSlides] = useState(0);
  const [carasouel, setCarasouel] = useState(false);


  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="flex flex-col items-center justify-center">
          <button className='text-white mb-10' onClick={() => {setCarasouel(!carasouel); setplusSlides(0);} }> {carasouel ? 'View All' : 'Carousel'}</button>
          {
            carasouel
            &&
            <div className='flex flex-row items-center justify-center'>
              <a  className="  !p-4 !text-black  hover:!text-gray-300 !font-bold !text-3xl !transition !ease-in-out !duration-600 !rounded-r-md select-none" onClick={() => setplusSlides(Math.max(plusSlides-1, 0))}>&#10094;</a>

              <ImageList sx={{ width: 800,  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }} className='items-center justify-center'>
                <ImageListItem>
                  <img
                    src={members[plusSlides].image}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={members[plusSlides].name}
                    subtitle={members[plusSlides].role}
                  />
                </ImageListItem>
            {plusSlides <= members.length-2 &&
                <ImageListItem>
                  <img
                    src={members[plusSlides+1].image}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={members[plusSlides+1].name}
                    subtitle={members[plusSlides+1].role}
                  />
                </ImageListItem>
              }
              </ImageList>
              <a className="  !p-4 !text-black  hover:!text-gray-300 !font-bold !text-3xl !transition !ease-in-out !duration-600 !rounded-r-md select-none" onClick={() => setplusSlides(Math.min(plusSlides+1, members.length-1))}>&#10095;</a>


            </div>
          }

          {!carasouel && <ImageList sx={{ width: 800 }}>

            {members.map((member, index) => (

              <ImageListItem key={index}>
                <img
                  src={member.image}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={member.name}
                  subtitle={member.role}
                />
              </ImageListItem>


            ))}
          </ImageList>
          }
        </div>
      </div>
    </section>
  );
};

export default OurTeam;