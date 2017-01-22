'use scrict';

import { h, Component } from 'preact';

export default class Home extends Component {
  
	constructor(props) {
		super(props);
	}

  render ({items, title}) {
  	
  	return (
    	<section className="home">
    		<div className="container">
    			<header>
						<h4 className="home-title">{title}</h4>
					</header>
          <hr />
          {items.map(item => (
	     			<article className="production">
              <h5>{item.title}</h5>
              <img src={item.image} className="preview" />
     				  <p dangerouslySetInnerHTML={{__html: item.description.replace(/\n/g,'<br />')}}></p>
              <hr />
            </article>
          ))}
	     		<p>
            <a href={window.routes['/publications.html']} className="button button-primary">Voir les publications</a>
          </p>
     		</div>
      </section>
    );
  }

};
