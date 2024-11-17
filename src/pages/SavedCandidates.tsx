import Candidate from "../interfaces/Candidate.interface";
import Profile from "../components/Profile";

const SavedCandidates = () => {
  const candidates: Candidate[] = localStorage.getItem('savedList') ? JSON.parse(localStorage.getItem('savedList')!) : [];

  return (
    <>
      <h1>Potential Candidates</h1>
      {
        candidates.map((candidate) => {
          return( 
            <Profile candidate={candidate} />
        )})
      }
    </>
  );
};

export default SavedCandidates;
