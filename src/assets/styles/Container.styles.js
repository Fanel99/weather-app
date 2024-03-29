import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  text-align: center;
  margin: 0 auto;

  .app {
    background-size: 50%;
    background-position: bottom;
    transition: 0.4 ease;
  }

  main {
    min-height: 80vh;
    margin-top: 100px;
    background: rgb(181, 223, 91);
    background: linear-gradient(
      107deg,
      rgba(181, 223, 91, 1) 0%,
      rgba(93, 209, 68, 1) 27%,
      rgba(0, 212, 255, 1) 100%
    );
    padding: 25px;
  }

  .search-box {
    width: 100%;
    margin: 0 0 75px;
  }

  .search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 0px 16px 16px;
    margin-top: -25px;

    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

    color: #313131;
    font-size: 20px;

    transition: 0.4s ease;
  }

  .search-box .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }

  .location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }

  .location-box .date {
    color: #fff;
    font-size: 20px;
    margin-top: 10px;

    text-align: center;
  }

  .weather-box {
    text-align: center;
  }

  .weather-box .temp {
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;

    padding: 15px 25px;

    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  }

  .weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }
`;
