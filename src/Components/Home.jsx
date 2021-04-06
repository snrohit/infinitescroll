import React, { Component } from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
   constructor() {
      super();
      this.state = {
        data: [],
        loading: false,
        page: 0,
        prevY: 0
      };
    }
  
    getData() {
      this.setState({ loading: true });
      axios
        .get(
          `https://randomuser.me/api/?results=10`
        )
        .then(res => {
           console.log(res.data.results)
          this.setState({ data: [...this.state.data, ...res.data.results] });
          this.setState({ loading: false });
        });
    }
    componentDidMount(){
      this.getData();

      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };
      
      this.observer = new IntersectionObserver(
        this.handleObserver.bind(this),
        options
      );
      this.observer.observe(this.loadingRef);
    }
    handleObserver(entities, observer) {
      const y = entities[0].boundingClientRect.y;
      if (this.state.prevY > y) {
        this.getData();
      }
      this.setState({ prevY: y });
    }

   render() {

      const loadingCSS = {
        height: "100px",
        margin: "30px"
      };
  
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

  
      return (
        
         <div className='main'>
            <Container component='main' maxWidth="xs">
            <div className="container card">
            <Grid item xs={12}>

                  <div style={{ minHeight: "800px" }} className='userCard'>
                     <ul >

                     {this.state.data.map((user,index) =>{return(
                        <div key={index}>
                        <li className='name' >{user.name.first} {user.name.last}  </li>
                        <img alt='user' src={user.picture.medium} height="100px" width="100px" />
                        <li >Phone: {user.cell} </li>
                        <li >Email: {user.email} </li>
                        <br/>
                        <hr/>
                        </div>
                     )})}
                     </ul>
                  </div>
                  <div
                     ref={loadingRef => (this.loadingRef = loadingRef)}
                     style={loadingCSS}
                     >
                     <span style={loadingTextCSS}>Loading...</span>
                  </div>
            </Grid>
            </div>
            </Container>
         </div>
        


      );
    }
}

export default Home;