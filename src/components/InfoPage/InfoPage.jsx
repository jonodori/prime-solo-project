import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect }  from 'react';
import { useParams } from 'react-router-dom'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is



function InfoPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_DETAILS',
    })
  }, [])

  return (
    <div className="container">
      <p>Info Page</p>
      <h2></h2>
    </div>
  );
}

export default InfoPage;
