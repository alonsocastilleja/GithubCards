import React from 'react';
import './App.css';
import Form from './Form'



const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
)
class Card extends React.Component {
  render(){
    const profile = this.props;
    return (
        <div className="github-profile">
        <div className="info">
          <div className="name">{profile.login}</div>
          <div className="location location-text">{profile.location}</div>
        </div>
        <img src={profile.avatar_url} alt='hello'  />
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        profiles: []
      };
  }  
  addNewProfileData = (profileData) => {
    this.setState(prevState => ({profiles: [...prevState.profiles, profileData],
    }));
    console.log('App', profileData);
  }
  render(){
    return (
    <div>
       <div className="github__profile-container"> 
          <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfileData} />
            <CardList profiles={this.state.profiles} />
       </div>
    </div>
   
    )
  }
}
export default App;