
class Order extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      quantity:'',
      Address:''

    };
  }
  orderinfochange=val=>{
    this.setState({
      quantity:val
    })
  };
  addresschange =val =>{
    this.setState({
      Address:val
    })
  };
  render() {
    return(
      <div style={{border:'solid 30px green'}}>
        <h2>Product Order Screen...</h2>
        <Productinformation quantity={this.state.quantity} onQuntitychange={this.orderinfochange} />
        <Addressinformation Address={this.state.Address} onAddresschange={this.addresschange} />
        <Summaryinformation quantity={this.state.quantity} Address={this.state.Address} onQuntitychange={this.orderinfochange} />
      </div>
    )
  }
}


class Productinformation extends React.Component{
  handleChange = e =>{
    this.props.onQuntitychange(e.target.value)
  }
  render() {
    return(
      <div style={{border:'solid 3px green'}}>
        <h2>Product information...</h2>
        <p>
          <label> select Product
            <select>
              <option value="Product1">Product1</option>
              <option value="Product2">Product2</option>
              <option value="Product3">Product3</option>
              <option value="Product4">Product4</option>
            </select>
          </label>

        </p>

        <p>
        <label>Enter quantity:-<input type="text" name="" value={this.props.quantity} onChange={this.handleChange} /></label></p>
      </div>
    )
  }
}


class Addressinformation extends React.Component{
  handleChange = e =>{
    this.props.onAddresschange(e.target.value)
  }
  render() {
    return(
      <div style={{border:'solid 3px green'}}> <h2>Address information...</h2>
        <p>
          <label>
            <textarea name="" cols="" value={this.props.Address} onChange={this.handleChange}></textarea>
          </label>
        </p>

      </div>

    )
  }
}

class Summaryinformation extends React.Component{

  render() {
    return(
      <div style={{border:'solid 3px green'}}><h2>Summaryinformation..</h2>
        <p>
        <label>
            Product name:- <b>Product - 1</b>
          </label></p>
          <p>
            <label>
              Enter quantity:-<input type="text" name="" value={this.props.quantity} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label> Address : <b>{this.props.Address}</b></label>

          </p>
      </div>
    )
  }
}


export {Order};
