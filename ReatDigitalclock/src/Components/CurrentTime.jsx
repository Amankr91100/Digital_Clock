let CurrentTime = () =>{
   let time=new Date();
   return (
   <p>
      The is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}

       </p>
   );
};
export default CurrentTime;