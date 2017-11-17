import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        content: {
        full_name:'',
        email:'',
        phone_number:'',
        facebook_profile: '',
        linkedin_profile:'',
        stack:'',
        stack_details:'',
        github_profile:'',
        slack_team:'',
        blog_url:''
        }
    }
    this.onChange = this.onChange.bind(this);

  }
  handleClick(event){
    const headers = {headers: {'Access-Control-Allow-Origin': 'https://bot-production.herokuapp.com/register'}}; 
    //   const apiUrl = 'https://bot-production.herokuapp.com/register'
      axios.post(headers, this.state.content)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))

  };
  onChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const content = this.state.content;

    content[field] = value;
    this.setState({ content })
    console.log(this.state.content)
};
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
             title="Mentor_Bot Mentor Registration"
           />
           <div class='App-left'>
           <TextField
             hintText="Enter your Full Names"
             type="name"
             floatingLabelText="Full Name"
             name="full_name"
             value = {this.state.content.first_name}
             onChange = {this.onChange}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             name="email"
             value = {this.state.content.email}
             onChange = {this.onChange}
             />
             <br/>
            <TextField
             hintText="Enter your Phone Number"
             type="phone_number"
             floatingLabelText="Phone Number"
             name="phone_number"
             value = {this.state.content.phone_number}
             onChange = {this.onChange}
             />
           <br/>
           <TextField
             hintText="Enter your Facebook Profile URL"
             type="facebook_profile"
             floatingLabelText="Facebook Profile URL (Optional)"
             name="facebook_profile"
             value = {this.state.content.facebook_profile}
             onChange = {this.onChange}
             />
             <br/>
             <br/>
             <TextField
             hintText="Enter your Linkedin Profile URL"
             type="url"
             floatingLabelText="Linkedin Profile URL (Optional)"
             name="linkedin_profile"
             value = {this.state.content.linkedin_profile}
             onChange = {this.onChange}
             />  
           <br/>
           </div>
           <div class='App-right'>
           <TextField
             hintText="Enter your stack"
             type="stack"
             floatingLabelText="Stack(Eg. Python, Java)"
             name="stack"
             value = {this.state.content.stack}
             onChange = {this.onChange}
            />
             <br/>
             <TextField
             hintText="Enter your stack details"
             type="details"
             floatingLabelText="Stack Details"  
             name="stack_details"
             value = {this.state.content.stack_details}
             onChange = {this.onChange}
             />
             <br/>
           <TextField
             hintText="Enter your Github Profile Link"
             type="github"
             floatingLabelText="Github Profile Link (Optional)"
             name="github_profile"
             value = {this.state.content.github_profile}
             onChange = {this.onChange}
             />
             <br/>
             <TextField
             hintText="Enter name of slack team"
             type="slack"
             floatingLabelText="Do you have a Slack team?"
             name="slack_team"
             value = {this.state.content.slack_team}
             onChange = {this.onChange}
             />  
           <br/>
           <br/>
             <TextField
             hintText="Enter link to your blog"
             type="blog"
             floatingLabelText="Do you have a blog?"
             name="blog_url"
             value = {this.state.content.blog_url}
             onChange = {this.onChange}
             />  
           <br/>
           </div>
           <div class='Button-center'>
           <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;