import React from 'react'
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';

const FAQ = () => {
    const questionData= [{"question": "Blah blah blah?", "answer": "Yes"}];

    return (
      <section className="py-16 px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {questionData.map((item, index) => (< div key={index} className='justify-center items-center'>
              {/* <Paper elevation={3} /> */}
              <p className="text-lg font-semibold">{item.question}</p>
              <p>{item.answer}</p>
              {/* <Paper /> */}
              {/* <Divider className='bg-red-100 max-w-7xl mx-auto '/> */}
              {/* <Divider flexItem sx={{ borderRightWidth: 5, height:4 }}/> */}
              <Divider sx={{ height:2}}/>
              
            </div>))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  