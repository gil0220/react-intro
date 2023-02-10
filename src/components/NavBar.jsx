import React, { Component } from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
// import cartIcon from "./cart-icon.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" 
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              padding: '10px'
            }}><ShoppingCartOutlined style={{width: '10px', height:'5px'}}/>
            {/* <img src={cartIcon} alt="Cart Icon" />; */}
            <span>
              {this.props.totalCount > 0 && (
                <span className="badge bg-secondary ms-2">
                  {this.props.totalCount}
                </span>
              )}
            </span>
          </span>
        </div>
      </nav>
    );
  }

}
