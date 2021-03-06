import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';

class Toasts extends Component {
  render() {
    const { toasts } = this.props.toasts;
    return (
      <div className={styles.toastContainer}>
        {toasts.map(toast => (
          <div key={toast.id} className={styles.toastDiv}>
            <span
              style={{
                backgroundColor: toast.colour
              }}
              className={styles.toast}
            >{toast.content}</span>
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { toasts } = state;
  return { toasts };
}

export default connect(mapStateToProps)(Toasts);
