import { useState } from "react";


function PollForm({ addOption }) {
 const [input, setInput] = useState("");


 const handleSubmit = (e) => {
   e.preventDefault();
   if (!input.trim()) return;


   addOption(input);
   setInput("");
 };

 return (
   <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
     <input type="text" placeholder="Add student candidate" value={input}onChange={(e) => setInput(e.target.value)}
       className="flex-1 p-2 border rounded"/>
     <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
       Add
     </button>
   </form>
 );
}


export default PollForm;

