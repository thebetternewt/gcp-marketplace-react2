import React from 'react';

import styled from 'styled-components';
import Feed from './Feed';
import profileImg from '../../images/profile1.jpg';

const Profile = props => {
  console.log(props);
  return (
    <div style={{ flexGrow: 1, marginTop: '2rem' }}>
      <div>
        <div className="row">
          <aside className="hidden-sm col-md-3">Sidebar</aside>
          <ProfileContainer className="col-sm-12 col-md">
            <div className="container">
              <div className="row" style={{ alignItems: 'center' }}>
                <div
                  className="col-sm-12 col-md-4"
                  style={{ textAlign: 'center' }}
                >
                  <img
                    src={profileImg}
                    alt="John Doe"
                    className="profile-img circular"
                  />
                </div>
                <div className="col-sm-12 col-md-8 profile-header">
                  <h1>John Doe</h1>
                  <SocialLinks>
                    <li>
                      <div className="circular primary">
                        <a href="/profile">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="circular primary">
                        <a href="/profile">
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="circular primary">
                        <a href="/profile">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="/profile">
                        <div className="circular primary">
                          <i className="fal fa-link" />
                        </div>
                      </a>
                    </li>
                  </SocialLinks>
                </div>
              </div>
              <div className="row">
                <div className="bio">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis sint animi omnis, sunt ex vitae ullam consequuntur
                    suscipit nihil dicta expedita, ab ratione accusantium
                    reprehenderit quisquam impedit fugit eveniet aliquid. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nobis
                    sint animi omnis, sunt ex vitae ullam consequuntur suscipit
                    nihil dicta expedita.
                  </p>
                </div>
              </div>
              <div className="row">
                <div>
                  <h2>Skills</h2>
                  <Skills>
                    <li>
                      <mark className="inline-block">Web development</mark>
                    </li>
                    <li>
                      <mark className="inline-block">Design</mark>
                    </li>
                    <li>
                      <mark className="inline-block">NodeJS</mark>
                    </li>
                    <li>
                      <mark className="inline-block">NodeJS</mark>
                    </li>
                  </Skills>
                </div>
              </div>
              <hr />
              <Feed />
            </div>
          </ProfileContainer>
          <aside
            className="col-sm-12 col-md-3"
            style={{ justifyContent: 'center' }}
          >
            <ActionPanel>
              <h3>Things you can do</h3>
              <hr />
              <ul>
                <li>Blog for GCP</li>
                <li>Invite friends</li>
              </ul>
            </ActionPanel>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5em;
    font-weight: 500;
  }
  .profile-img {
    margin: 1rem auto;
    width: 100%;
    max-width: 300px;
  }
  .profile-header {
    padding: 15px;
  }
  .bio > p {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 320px) {
    h2 {
      font-size: 1.2rem;
    }
    .profile-img {
      width: 280px;
    }
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    cursor: pointer;
    div {
      height: 36px;
      width: 36px;
      background-color: #5e5e5f;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      transition: all 200ms linear;
      font-size: 1.1rem;

      &:hover {
        background-color: #809b7e;
      }
    }
  }
`;

const Skills = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li > mark {
    margin-right: 6px;
    margin-bottom: 3px;
    border-radius: 8px;
    font-size: 0.9rem;
  }
`;

const ActionPanel = styled.div`
  background-color: #ddd;
  border: 2px solid #777;
  border-radius: 8px;
  padding: 15px;
  max-width: 300px;
  margin: 0 auto;

  h3 {
    font-size: 1.2rem;
  }
`;
