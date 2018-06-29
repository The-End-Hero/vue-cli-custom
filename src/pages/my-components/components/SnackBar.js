import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { ConfigOnClose, ConfigOptions } from 'antd/lib/message/index'
import classnames from 'classnames'
import './SnackBar.scss'

class SnackBar extends Component {
    constructor () {
        super()
        this.state = {
            hide: false
        }
    }

    componentDidMount () {
        this.close()
    }

    componentDidUpdate () {

    }

    componentWillUnmount () {
    }

    close(){
        const { hasClose, delay, onClose } = this.props
        const t = this
        if (!hasClose) {
           t.time1 = setTimeout(() => {
                t.setState({ hide: !t.state.hide })
               t.time2 = setTimeout(() => {
                    onClose()
                }, 1000)
            }, delay * 1000)
        }
    }
    enter(){
        clearTimeout(this.time1)
        clearTimeout(this.time2)
    }
    leave(){
        this.close()
    }
    render () {
        const { type, msg, hasClose, onClose } = this.props
        const { hide } = this.state
        return (
            <div className={classnames('mc-message animated', {
                'mc-msg-success': type === 'success',
                'mc-msg-error': type === 'error',
                'mc-msg-info': type === 'info',
                'mc-msg-warning': type === 'warning',
                slideInDown: !hide,
                fadeOut: hide
            })} onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}>
                <div>{msg}</div>
                {hasClose && <i className="mc-msg-icon material-icons" onClick={() => {
                    this.setState({ hide: !hide })
                    setTimeout(() => {
                        onClose()
                    }, 1000)
                }}>close</i>}
            </div>
        )
    }
}

/**
 * 使用说明
 * import snackbar from 'snackbar'
 * snackbar.info(a,v,b,n)
 * @type {{info: _default.info}}
 * @private
 */
const _default = {
    /**
     * 参数
     * @param type 信息类型 success|error|info|warning  string 默认success
     * @param msg  snackbar展示文字  string
     * @param hasClose 是否有关闭按钮，如果有，则不会自动关闭。 bool 默认为false
     * @param delay 自动关闭时间(秒) num 默认为5
     */
    info: (type = 'success', msg = 'this is alertmsg', hasClose = false, delay = 5) => {
        const div = document.createElement('div')
        if (document.querySelector('#mc-snackbar')) {
            document.querySelector('#mc-snackbar').appendChild(div)
            const close = () => {
                ReactDom.unmountComponentAtNode(div)
                div.parentNode.removeChild(div)
            }
            ReactDom.render(<SnackBar type={type} msg={msg} hasClose={hasClose} onClose={close} delay={delay}/>, div)
            // !hasClose && setTimeout(close, delay * 1000)
        } else {
            // div.style.display='flex'
            div.id = 'mc-snackbar'
            document.body.appendChild(div)
            const rot = document.createElement('div')
            div.appendChild(rot)
            const close = () => {
                ReactDom.unmountComponentAtNode(rot)
                rot.parentNode.removeChild(rot)
            }
            ReactDom.render(<SnackBar type={type} msg={msg} hasClose={hasClose} onClose={close} delay={delay}/>, rot)
            // !hasClose && setTimeout(close, delay * 1000)
        }
    }
}
export default _default
