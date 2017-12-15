import React from 'react';
import JoinFamilyForm from './../../components/JoinFamilyForm/JoinFamilyForm';
import NewFamilyForm from './../../components/NewFamilyForm/NewFamilyForm';

const JoinFamilyPage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <JoinFamilyForm
            {...props}
          />
        </div>
        <div className="col s6">
          <NewFamilyForm
            {...props}
          />
        </div>
      </div>
    </div>
  )
};

export default JoinFamilyPage;

