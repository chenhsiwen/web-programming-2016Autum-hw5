const { Component } = React;
class Countdisplay extends Component {
	render() {
    const { count } = this.props;
    return (
      		<div>
        		item: {count}
      		</div>
    	);
  	}

}
class TodoItem extends Component {
   render() {
    const { index, title, isCompleted, onChange } = this.props;
    return (
      		<li>
        		<div className="view">
			         <input
			            className="toggle"
			            type="checkbox"
			            checked={isCompleted}
			            onChange={(event) => onChange(event, index)}
			         />
         		 	<label>{title}</label>
        		</div>
      		</li>
    	);
  	}
}

class TodoApp extends Component {

	constructor(props) {
		super(props);
		this.state = { newlist: '',lists: [] };	
	}
	handleinput(event) {
    	this.setState({ newlist: event.target.value });

  	}
  	handlesubmit(event) {
    	const inputValue = event.target.value;
    	if (event.keyCode == 13 && inputValue !== '') {
     	const { lists, newlist } = this.state;
     	let temp = { title: newlist, isCompleted: false };
     		this.setState({
       			newlist: '',
       			lists: lists.concat({ title: inputValue, isCompleted: false })
      		});
  		}
  	}
  	handlecomplete(event, i) {
    	const { lists } = this.state;
	    lists[i].isCompleted = event.target.checked;
    	this.setState({
     		lists: lists
    	});
  	}
  	handleselectall(event) {
  		const select = event.target.checked;
    	const { lists } = this.state;
	    for(let i=0; i<lists.length; i++){
    		lists[i].isCompleted = select;
    	}
    	event.target.checked = false;
    	this.setState({
     		lists: lists
    	});
  	}
  	handleclear(event) {
    	let { lists } = this.state;;
    	for(let i=0; i<lists.length; i++){
    		
    		if(lists[i].isCompleted === true)
    		{
    			console.log(i);
    			console.log(lists.length);
    			lists.splice(i,1);
    			i--;

    		}

    	}
    	this.setState({
     		lists: lists
    	});
  	}
  	handlecount() {
  		const { lists } = this.state;
  		let count = 0;		
  		for(let i=0; i<lists.length; i++){
    		if(lists[i].isCompleted === false)
    			count++;
    	}
    	return count;
  	}

  	renderTodoItem(item, i) {
	    return (
	      <TodoItem
	        index={i}
	        title={item.title}
	        isCompleted={item.isCompleted}
	        onChange={this.handlecomplete.bind(this)}
	      />
	    );
	}
	renderTodoItem(item, i) {
	    return (
	      <TodoItem
	        index={i}
	        title={item.title}
	        isCompleted={item.isCompleted}
	        onChange={this.handlecomplete.bind(this)}
	      />
	    );
	}
	render() {
		const { newlist, lists } = this.state;
		return  (
			      	<div>
				        <section className="todoapp">
  							<header class="header">
								<h1>todos</h1>
								<input 
									className="new-todo"
              						placeholder="What needs to be done?"
             						autofocus
              						value={newlist}
              						onChange={this.handleinput.bind(this)}
              						onKeyDown={this.handlesubmit.bind(this)}
								/>
							</header>
							<section className="main">
								<input className="toggle-all" type="checkbox" onClick={this.handleselectall.bind(this)}/>
								<label htmlFor="toggle-all">Mark all as complete</label>
								<ul className="todo-list">
									{lists.map(this.renderTodoItem, this)}
								</ul>
							</section>
							<footer className="footer">
								<span className="todo-count"><Countdisplay count={this.handlecount()}/></span>
								<button className="clear-completed"  onClick={this.handleclear.bind(this)}>Clear completed</button>
							</footer>
						</section>
						<footer className="info">
							<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
						</footer>
			      	</div>
				);	
	}
}
ReactDOM.render(
	<TodoApp />,
	document.getElementById('root')
);
