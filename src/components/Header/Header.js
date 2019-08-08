import React from 'react';
// import styles from './styles'

const Header = props => (
    <div className='container-fluid header' >
        <div className='row center'>
            <div className='col l8 offset-l2 s10 offset-s1'>
                <div className='card-horizontal' >
                    <div className='card-content'>
                        <h2 className='white-text'>Don't choose the same character twice! Can you reach the top score of 85?</h2>
                        <div className='row'>
                            <div className='col s3'>
                                <h3>
                                Current Score / {props.currentScore}  ||
                                
                                Top Score /{props.topScore}
                                </h3>
                                <a href="." >Smash Bros Ultimate Memory</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row center'>
            <h4 className='grey-text' ><span>{props.message}</span></h4>
        </div>
    </div >
);

export default Header;