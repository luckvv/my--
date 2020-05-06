import React from 'react';
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'

const header = (props) =>{
    return(
        <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                               in={props.focused}
                               timeout={300}
                               classNames="slide">
                                <NavSearch
                                    className={props.focused ? 'focused':''}
                                    onFocus={props.handleInputFocus}
                                    onBlur={props.handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe623;</span>
                        </SearchWrapper>
                        <Addition>  
                            <Button className="writting">
                            <span className="iconfont">&#xe616;</span>
                            写文章
                            </Button>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused:state.header.focused
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInputFocus(){
            const action={
                type: 'search_focus'
            };
            dispatch(action)
        },
        handleInputBlur(){
            const action={
                type: 'search_blur'
            };
            dispatch(action)
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(header)