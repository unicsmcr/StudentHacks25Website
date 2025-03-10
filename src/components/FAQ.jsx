import React from 'react'
import { Divider, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const FAQ = () => {
    const questionData= [{"question": "Blah blah blah?", "answer": "Yes"}, {"question": "Blah blah bloo?", "answer": "No"}];
    const [open, setOpen] = useState(() => Array(questionData.length).fill(false));


    // Inverses the open state of the clicked button
    const handleToggle = (index) => {
      setOpen((oldOpen) => {
        const newOpen = [...oldOpen];
        newOpen[index] = !newOpen[index];
        return newOpen;
      });
    };

    return (
      <section className="py-16 px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">

            {questionData.map((item, index) => (        <div key={index} className="flex flex-col justify-center items-center">
              <button onClick={() => handleToggle(index)} className= 'text-white w-full '>{item.question}</button> {/* click to show box containing answer*/}
              {open[index] && 
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="bg-white p-6 shadow-lg rounded-3xl max-w-2xl mt-2 w-full text-center" >
            <p className="text-lg font-semibold">{item.question}</p>
            <Divider sx={{ bgcolor: "gray", height: 3, width: "100%", marginTop: "10px" , marginBottom: "10px" }} />
            <p className="text-gray-700">{item.answer}</p>
            {/* <Divider sx={{ bgcolor: "red", height: 2, width: "100%", marginTop: "10px" }} /> */}
          </Box>
        }
        </div>
      ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  