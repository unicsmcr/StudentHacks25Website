
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

const OurTeam = () => {
    const members= [{"name": "Sean bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Lead dev", "linkedin": "", "github":""}, {"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""},{"name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github":""}];
    return (
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="flex flex-col items-center justify-center">
          <ImageList sx={{ width: 800}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
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
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeam;
  