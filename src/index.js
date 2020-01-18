import React from 'react';
import ReactDOM from 'react-dom';

import Faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

 return(
   <div className="ui container comments">
   <ApprovalCard>
     <CommentDetail
       name="Sam"
       date="Hoje as 5:00"
       text="Eu gosto"
       avatarImage={ Faker.image.avatar() }
     />
   </ApprovalCard>
      <CommentDetail
        name="Alex"
        date="Ontem as 19:00"
        text="De batata"
        avatarImage={ Faker.image.avatar() }
      />
      <CommentDetail
        name="Jane"
        date=" 16/11/1992"
        text="Torneira"
        avatarImage={ Faker.image.avatar() }
      />
   </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));
