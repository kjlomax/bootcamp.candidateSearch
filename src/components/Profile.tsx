import Candidate from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API';


import { useState, useEffect } from 'react';

type ProfileProps = { candidate: Candidate };

const Profile = ({candidate}: ProfileProps) => {
    // const [candidate, setCandidate] = useState<Candidate | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await searchGithub();
    //         setCandidate(result);
    //     };
    //     fetchData();
    // }, []);

    // if (!candidate) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <img src={candidate.avatar} ></img>
            <h3>{candidate.name} / {candidate.username}</h3>
            
            <p>{candidate.location}</p>
            <a href={candidate.email}>{candidate.email}</a>
            <p>{candidate.company}</p>
            <a href={candidate.html_url}>{candidate.html_url}</a>
            <p>bio</p>
        </div>
    );
};
export default Profile;