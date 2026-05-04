import PollOption from "./PollOption";


function PollList({ options, vote, hasVoted }) {
 const totalVotes = options.reduce((sum, o) => sum + o.votes, 0);


 return (
   <div className="space-y-4">
     {options.map((option) => (
       <PollOption
         key={option.id}
         option={option}
         vote={vote}
         hasVoted={hasVoted}
         totalVotes={totalVotes}
       />
     ))}
   </div>
 );
}


export default PollList;
