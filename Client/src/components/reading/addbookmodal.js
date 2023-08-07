import React from 'react';
import { useSelector } from 'react-redux';
import Form from './form';

class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: true,
      modal: '',
    };
  }

  render() {
    return (
      <div className="modal-btn-cnt">
        <button
          className="modal-button"
          type="button"
          onClick={() => {
            this.setState({
              show: true,
              modal: 'modal',
            });
          }}
        >
          Add your own book
        </button>
        
          <div className={this.state.modal}>
              <div className="modal-box">
                <div
                  onClick={() => {
                    this.setState({
                      show: false,
                      modal: '',
                    });
                  }}
                  className="closebutton"
                >
                  X
                </div>
                {/* Form inside modal */}
                <Form
                // closeModal={() => {
                //   this.setState({
                //     show: false,
                //     show1: true,
                //   });
                // }}
                />
              </div>
          </div>
      </div>
    );
  }
}

export default BookModal;