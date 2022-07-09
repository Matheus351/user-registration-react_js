import React from "react";
import { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon:'users',
    title:'Users',
    subtitle:'User registration: Add, List, Change and Delete'
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                User registration
            </Main>
        )
    }
}