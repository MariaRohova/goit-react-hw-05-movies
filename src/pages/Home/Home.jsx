import { getTrending } from 'api/api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListTrends, TrendsWrapper } from './Styled';


function Home() {
  const [trends, setTrends] = useState(null);
  useEffect(() => {
    getTrending()
      .then(({ data }) => {
        setTrends(data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <TrendsWrapper>
      <h1>Trending today</h1>
      <ListTrends>
        {trends !== null &&
          trends.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ListTrends>
    </TrendsWrapper>
  );
}

export default Home;
