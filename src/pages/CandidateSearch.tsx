import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import Profile from "../components/Profile";
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  
  const getCandidate = async () => {
    let data = await searchGithub();
    setCandidate({
      name: data[0].login,
      username: data[0].login,
      location: data[0].location,
      avatar: data[0].avatar_url,
      email: data[0].email,
      html_url: data[0].html_url,
      company: data[0].company,
    });
  };

  useEffect(() => { getCandidate() }, []);

  if (!candidate) {
    return <div>Loading...</div>;
  }

  return (
  <>
   <h1>CandidateSearch</h1>
  <Profile candidate={candidate} />
  <button onClick={() => getCandidate()}>Pass</button>

  </>
  );
 
};

export default CandidateSearch;
