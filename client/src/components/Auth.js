import React, {Component} from 'react';
import '../style/auth.css';
import {sendInputValue} from "../api/InputValues";


class Auth extends Component {
    
    clickHandler() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        sendInputValue(name, surname, email, password);
    } 
    render() {
        return (
            <div class="container">
            <div class="row">                
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Логин</label>
                            <input type="text" class="form-control" id="email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Пароль</label>
                            <input type="password" class="form-control" id="password"></input>
                        </div>
                        <div class="form-group">
                            <div class="main-checkbox">
                                <input value="None" id="checkbox1" name="check" type="checkbox"></input>
                                <label for="checkbox1"></label>
                            </div>
                            <span class="text">Запомнить</span>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default">Войти</button>
                        </div>                            
                    </div> 
                </div>  
            </div> 
        </div>
        );
    }   
}
export default Auth;
