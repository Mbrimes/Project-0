import React from 'react';
import {useSelector} from 'react-redux';
import Form from './form'

const BookModal = (props) => {
	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(true);
	const [modal, setModal] = useState('');

 return(
 	<div>
 		<button type="button" onClick={ (e) => {
      setShow(true);
      setModal('modal');
    }}> Add your own Book</button>

 		<Fade opposite when={this.state.show}>
          <div className={this.state.modal}>
            <Slide up opposite when={this.state.show1}>
              <div className="modal-box">
                <div onClick={ (e) => {
                  setShow(false);
                  setModal('');
                }} className="closebutton">
                  X
                </div>
              </div>
            </Slide>
          </div>
        </Fade>
 	</div>
 	);
}
export default BookModal;