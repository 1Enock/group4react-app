function PollOption({ option, vote, hasVoted, totalVotes }) {
 const percentage =
   totalVotes === 0
     ? 0
     : Math.round((option.votes / totalVotes) * 100);


 return (
   <div className="bg-white p-4 rounded shadow">
     <div className="flex justify-between mb-2">
       <span className="font-semibold text-gray-800">
         {option.text}
       </span>
       <span className="text-gray-600">
         {option.votes} votes
       </span>
     </div>


     <div className="w-full bg-gray-200 h-3 rounded">
       <div
         className="bg-green-500 h-3 rounded"
         style={{ width: `${percentage}%` }}
       />
     </div>


     <button
       onClick={() => vote(option.id)}
       disabled={hasVoted}
       className={`mt-3 w-full px-3 py-1 rounded text-white ${
         hasVoted
           ? "bg-gray-400 cursor-not-allowed"
           : "bg-green-500 hover:bg-green-600"
       }`}
     >
       Vote ({percentage}%)
     </button>
   </div>
 );
}


export default PollOption;
