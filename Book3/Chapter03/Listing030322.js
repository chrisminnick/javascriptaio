import { useState, useEffect } from 'react';

export default function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState('idle');

  useEffect(() => {
    const getRepos = async () => {
      try {
        setIsLoading(true);
        let response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        let data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRepos();
    setIsLoading(false);
  }, [username]);

  return [repos, isLoading];
}
