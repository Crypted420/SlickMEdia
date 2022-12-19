import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from 'react';


export async function getServerSideProps(context) {
  const get_action_movies = await fetch('http://omdbapi.com/?i=tt3896198&apikey=7828c8c9&s=maze&page=10');
  const action_movies = await get_action_movies.json();
  const get_comedy_movies = await fetch('http://omdbapi.com/?i=tt3896198&apikey=7828c8c9&s=comedy&page=10');
  const comedy_movies = await get_comedy_movies.json();
  return {
    props: {
      action_movies,
      comedy_movies
    },
  }
}

export default function Main(props) {
  const [startSearch, setStartSearch] = useState(false);
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([])
  const { action_movies, comedy_movies } = props;


  const action_moviesElement = action_movies.Search.map(result => {
    return (
      <div className="movie">
        <div className='poster--container' style={{ background: `url(${result.Poster})` }}>
          <p>{result.Title}</p>
        </div>
      </div >
    )
  })

  const comedy_moviesElement = comedy_movies.Search.map(result => {
    return (
      <div className="movie">
        <div className='poster--container' style={{ background: `url(${result.Poster})` }}>
          <p>{result.Title}</p>
        </div>
      </div>
    )
  })


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = async () => {
    setStartSearch(prev => !prev);
    const getSearch = await fetch('http://omdbapi.com/?i=tt3896198&apikey=7828c8c9&s=maze&page=10');
    const result = await getSearch.json();
    setSearchResult(result.Search)
  }
  const createSearchElement = searchResult.map(result => {
    return (
      <div className="container">
        <p>{result.Title}</p>
      </div>
    )
  })
  return (
    <Container>
      <Header>
        <h2>MyTestApp</h2>
      </Header>

      <Hero>
        <p>
          Watch something incrediable
        </p>
      </Hero>

      {
        !startSearch &&
        <Content>
          <div className="search--bar">
            <label htmlFor="search">Search</label>
            <input type="search" onChange={(e) => handleChange(e)} />
            <button onClick={() => handleSearch()}>Search</button>
          </div>

          <section className='categories'>
            <div className="category">
              <h3>Action movies</h3>
              <div className="movies--container">
                {action_moviesElement}

              </div>

            </div>

            <div className="category">
              <h3>Comedy</h3>
              <div className="movies--container">
                {comedy_moviesElement}
              </div>

            </div>
          </section>
        </Content>
      }

      {
        startSearch &&
        <SearchResult>
          {/* <h3>Search Results</h3> */}
          {createSearchElement}
        </SearchResult>
      }
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
`
const Header = styled.header`
  width: 100%;
  height:22vh;
  background-color: black;
  display: flex;
  align-items: center;
  padding-left:5.875rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
  }
  h2{
    width: 12rem;
    height:3.75rem;
    color:white;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Hero = styled.section`
  width: 100%;
  height: 78vh;
  background-image:url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p{
    width: min-content;
    letter-spacing: -5%;
    font-weight: bold;
    font-size: 4.5rem;
    color: white;
    margin-left:4.8rem;
    line-height:93.74px;
    @media screen and (max-width: 768px) {
      font-size:3rem;
      width:100%;
      text-align: center;
      margin-left: 0;
      padding: 1rem;
    }
  }

`

const Content = styled.section`
  width: 100%;
  height: auto;
  padding-top:3.938rem;
  .search--bar{
    width: 90%;
    padding-left:4.813rem;
    @media screen and (max-width: 768px) {
      padding-left: 2.5rem;
    }
    input{
      width: 100%;
      height:3.375rem;
      border: 1px solid black;
      margin-top:.5rem;
    }
    button{
      display: inline-block;
      padding: 1rem;
      margin-top:1rem;
      width: 8rem;
      background-color: black;
      border:0;
      color: white;
    }
  }
.categories{
  margin-top:3rem;
  padding-left:4.188rem;
  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
  .category{
    width: 100%;
    margin-top: 1rem;
    .movies--container{
      width: 100%;
      height: auto;
      overflow-x: scroll;
      white-space: nowrap;

      .movie{
        width: 18.75rem;
        height: 18.75rem;
        display: inline-flex;
        background-color: black;
        border-radius: 12px;
        margin: 13px;
        color: white;
        align-items: center;
        justify-content: center;
        .poster--container{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          p{
            color: white;
            max-width: 50%;
            text-align: center;
            background-color: black;
            font-size:1.1rem;
            word-break: break-all;
            white-space: normal;
          }
        }
      }
    }
  }
}
`

const SearchResult = styled.section`
  width: 100%;
  height:auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: .5rem;
    width: 15rem;
    height: 20rem;
    background-color: black;
    p{
      text-align: center;
    }
  }
`