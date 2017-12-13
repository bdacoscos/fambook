import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const JoinFamilyForm = () => {
  return (
    <div className="container">

      <div className="row">

        <div className="col s6">
          <header>Join A Family</header>
            <p>Place your unique family code below:</p>
            <form>
              <input type="text" placeholder="Family Code"/>
            </form>
            <button>Join Family</button>
        </div>
        <div className="col s6">
          <header>Create A Family</header>
            <p>Start a new family here!</p>
            <form>
              <input type="text" placeholder="Family Name"/>
            </form>
            <button>Create Family</button>
        </div>

      </div>

    </div>
  )
}

export default JoinFamilyForm;