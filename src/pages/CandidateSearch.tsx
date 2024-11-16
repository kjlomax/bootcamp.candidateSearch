import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import Profile from "../components/Profile";
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  useEffect(() => {
    const getCandidate = async () => {
      const person = await searchGithub();
      setCandidate(person);
    };
  }, []);
  const example: Candidate = {
    name: 'John Doe',
    username: 'johndoe',
    location: 'New York, NY',
    avatar: 'https://www.example.com/avatar.jpg',
    email: 'example@why.com',
    html_url: 'https://www.example.com',
    company: 'Example, Inc.',
  }
  return (
  <>
   <h1>CandidateSearch</h1>
  <Profile candidate={example} />

  </>
  );
 
};

export default CandidateSearch;
