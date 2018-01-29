
////////////////////////////////////////////////////////////////////////
/////////////////  Main App for Agent Store          //////////////////
/////////////////    Connecting Business to Bots   ///////////////////
//////////////////////////////////////////////////////////////////////

import React, { Component }   from 'react';
import ListContacts           from './ListContacts';
import * as ContactsAPI       from './utils/ContactsAPI'
import NavBar                 from './NavBar';
import Home                   from "./components/common/Home";
import About                  from "./components/common/About";
import Blog                   from "./components/common/Blog";
import Contact                from "./components/common/Contact";


// note lifecycle method to load all contacts when mounted

class App extends Component {
  state = {
    contacts: [ ],
    currentPage: "Home"
  }

  removeContact = (contact) => {
    ContactsAPI.remove(contact).then(cnt =>{
      this.setState( (state) => ({
        contacts: state.contacts.filter((c) => c.id !== contact.id )
      }) )
    })
  }

  createProfile(profile) {
    ContactsAPI.create(profile).then(profile => {
      this.setState(state => ({
        contacts: state.contacts.concat([profile])
      }))
    })
  }
  updateProfile(profile, cb) {
    ContactsAPI.updateProfile(profile).then(profile => {
      ContactsAPI.getAll().then((contacts) => {
          this.setState({ contacts })
          cb()
      })
    })
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  render() {
    return (
      <div className = 'app'>
        <NavBar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
        <ListContacts
            onDeleteContact = { this.removeContact }
            contacts={this.state.contacts}
          />
        {this.renderPage()}
       </div>
    );
  }
}

export default App;
