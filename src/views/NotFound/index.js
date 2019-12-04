import React, { Component } from 'react'

import notfoundImg from '@/assets/img/404.jpg'
export default class NotFound extends Component {
    render() {
        return (
            <div style={{
                height:"100%",
            }}>
                <img src={notfoundImg} style={{
                    width:'100%',
                    height:'100%'
                }}/>
            </div>
        )
    }
}
