import React from 'react';
import Layout from '@theme/Layout';


import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

function MemberList() {
  return (
    <div className="row">
      {members.map(member => {
        return (
        <TeamMemberProfileCard
          key={member.githubUrl+member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          githubUrl={member.githubUrl}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

function MembersWall() {
  return (
    <Layout title="电视台成员">
      <main>
        <div className="text--center margin-vert--lg">
          <h1>北流广播电视台成员</h1>
          <p>Members</p>
        </div>
        <div className="container">
          <MemberList />
        </div>
        <div className="text--center margin-vert--lg">
          <p>
            
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default MembersWall;
