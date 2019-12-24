import React, {Component} from 'react';
import '../style/css/bootstrap.min.css';
import '../style/index.css';

function Menu(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserMenu />;
  }
  return <GuestMenu/>;
}


function UserMenu() {
   return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="btn-group-toggle" data-toggle="buttons">
        <a class="navbar-brand" href="/">Выход |</a>
        <a class="navbar-brand" href="/Start">Какая-то страница</a>
      </div>
    </nav>
   )
}

function GuestMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="btn-group-toggle" data-toggle="buttons">
        <a class="navbar-brand" href="/Auth">Авторизация |</a>
        <a class="navbar-brand" href="/Register">Регистрация |</a>
        <a class="navbar-brand" href="/Start">Какая-то страница</a>
      </div>
    </nav>
  )
}

class Navigation extends Component {
  render() {
    return (
        <Menu/>
    );
  }
}

export default Navigation;



