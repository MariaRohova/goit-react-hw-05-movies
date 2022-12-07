import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledNavLink, StyledNav } from './App.styled';

const MovieInfo = lazy(() => import('./pages/MovieInfo/MovieInfo'));

export const App = () => {
  return (
    <div
      style={{
        marginLeft: 20,
        padding: 50,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
      <Suspense fallback={<p>Wait, page is downloading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieInfo />} />
        </Routes>
      </Suspense>
    </div>
  );
};
