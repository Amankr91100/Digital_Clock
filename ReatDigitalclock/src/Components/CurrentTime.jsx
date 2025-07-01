let CurrentTime = () =>{
   let time=new Date();
   return (
   <p>
      The is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
       <p>hello</p>
       </p>
   );
};
export default CurrentTime;
